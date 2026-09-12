import { NextRequest, NextResponse } from "next/server";
import { requireAdmin, getAdminActor } from "../../../../lib/adminAuth";
import { prisma } from "../../../../lib/db";
import { normalizeLeadPhone } from "../../../../lib/leadImport";

export async function POST(request: NextRequest) {
    const denied = await requireAdmin(request, true); if (denied) return denied;
    const body = await request.json().catch(() => null);
    const limits = { name: 100, phone: 40, email: 254, service: 200, notes: 10000, owner: 100, status: 100 };
    if (!body || Object.entries(limits).some(([key, limit]) => typeof body[key] !== "string" || body[key].length > limit))
        return NextResponse.json({error:"Enter valid lead details within the field limits."},{status:422});
    const name = body.name.trim(), phone = body.phone.trim(), email = body.email.trim().toLowerCase();
    const normalizedPhone = normalizeLeadPhone(phone);
    if (!name || (!phone && !email) || (phone && (normalizedPhone.length < 7 || normalizedPhone.length > 15)) || (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)))
        return NextResponse.json({error:"Enter a name and a valid phone number or email address."},{status:422});
    if (!await prisma.leadStage.findUnique({where:{name:body.status}}) || (body.owner !== "Unassigned" && !await prisma.leadPerson.findUnique({where:{name:body.owner}})))
        return NextResponse.json({error:"Choose an existing stage and owner."},{status:422});
    const actor = (await getAdminActor(request))!;
    const result = await prisma.$transaction(async tx => {
        const existing = await tx.lead.findMany({select:{id:true,phone:true,email:true}});
        const duplicate = existing.find(l => (normalizedPhone && normalizeLeadPhone(l.phone) === normalizedPhone) || (email && l.email?.trim().toLowerCase() === email));
        if (duplicate) return {duplicate:duplicate.id};
        const lead = await tx.lead.create({data:{name,phone,email:email||null,service:body.service.trim(),message:"",source:"manual",owner:body.owner,status:body.status,
            conversations:{create:[{party:"system",author:actor.name,text:"Lead added manually"},...(body.notes.trim()?[{party:"note",author:actor.name,text:body.notes.trim()}]:[])]}}});
        return {id:lead.id};
    });
    if ("duplicate" in result) return NextResponse.json({error:"A lead with this phone or email already exists. Search for that contact to update it."},{status:409});
    return NextResponse.json(result,{status:201});
}
