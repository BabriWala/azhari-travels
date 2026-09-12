import { NextRequest, NextResponse } from "next/server";
import { requireAdmin, getAdminActor } from "../../../../../lib/adminAuth";
import { prisma } from "../../../../../lib/db";
import { dailyWorkLabels, DailyWorkStatus, workDay } from "../../../../../lib/leadDailyWork";

export async function PATCH(request:NextRequest,context:{params:Promise<{id:string}>}) {
    const denied=await requireAdmin(request,true);if(denied)return denied;
    const body=await request.json().catch(()=>null);
    if(!body || typeof body.status!=="string" || !Object.hasOwn(dailyWorkLabels,body.status))
        return NextResponse.json({error:"Choose a valid daily work status."},{status:422});
    const day=workDay();
    if(body.day!==day)return NextResponse.json({error:"The day has changed. Refresh the CRM and update today's status again."},{status:409});
    const {id}=await context.params;
    if(!await prisma.lead.findUnique({where:{id},select:{id:true}}))return NextResponse.json({error:"Lead not found."},{status:404});
    const actor=(await getAdminActor(request))!;
    const record=await prisma.$transaction(async tx=>{
        const previous=await tx.leadDailyWork.findUnique({where:{leadId_day:{leadId:id,day}}});
        if(previous?.status===body.status)return previous;
        const saved=await tx.leadDailyWork.upsert({where:{leadId_day:{leadId:id,day}},create:{leadId:id,day,status:body.status,author:actor.name},update:{status:body.status,author:actor.name}});
        await tx.leadConversation.create({data:{leadId:id,party:"system",author:actor.name,text:"Daily work · "+day+" (Dhaka): "+dailyWorkLabels[body.status as DailyWorkStatus]+" · "+actor.name}});
        return saved;
    });
    return NextResponse.json(record);
}
