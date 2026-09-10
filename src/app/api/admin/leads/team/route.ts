import { NextRequest, NextResponse } from "next/server";
import { configuredEmail, getAdminActor, hashPassword, requireAdmin } from "../../../../lib/adminAuth";
import { prisma } from "../../../../lib/db";
const fields = { id: true, name: true, email: true, role: true, active: true, createdAt: true } as const;
export async function GET(request: NextRequest) {
 const denied = await requireAdmin(request); if (denied) return denied;
 return NextResponse.json({users: await prisma.adminUser.findMany({select:fields, orderBy:{name:"asc"}}), configuredEmail:configuredEmail()}, {headers:{"Cache-Control":"no-store"}});
}
async function save(request: NextRequest, editing: boolean) {
 const denied = await requireAdmin(request); if (denied) return denied;
 const actor = (await getAdminActor(request))!;
 const body = await request.json().catch(() => null);
 if (!body || typeof body.name !== "string" || !body.name.trim() || body.name.length > 100 || typeof body.email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email) || body.email.length > 254 || !["superadmin","subadmin"].includes(body.role) || typeof body.active !== "boolean" || typeof body.password !== "string" || body.password.length > 200 || ((!editing || body.password) && body.password.length < 10) || (editing && typeof body.id !== "string")) return NextResponse.json({error:"Enter a name, email, role and a password of at least 10 characters (leave blank to keep an existing password)."},{status:422});
 const name=body.name.trim(), email=body.email.trim().toLowerCase();
 if (email === configuredEmail()) return NextResponse.json({error:"The configured superadmin is managed through server settings."},{status:422});
 if (editing && body.id === actor.id && (!body.active || body.role !== "superadmin")) return NextResponse.json({error:"You cannot disable or demote your own account."},{status:422});
 const old = editing ? await prisma.adminUser.findUnique({where:{id:body.id}}) : null;
 if (editing && !old) return NextResponse.json({error:"Account not found."},{status:404});
 const duplicate = await prisma.adminUser.findFirst({where:{OR:[{email},{name}], ...(editing?{id:{not:body.id}}:{})}});
 if (duplicate || name === "Unassigned") return NextResponse.json({error:"Choose a unique team name and email."},{status:409});
 const passwordHash = body.password ? await hashPassword(body.password) : undefined;
 const user=await prisma.$transaction(async tx=>{
  const data={name,email,role:body.role,active:body.active,...(passwordHash?{passwordHash}:{})};
  const saved=editing?await tx.adminUser.update({where:{id:body.id},data,select:fields}):await tx.adminUser.create({data,select:fields});
  if(old && old.name!==name){await tx.lead.updateMany({where:{owner:old.name},data:{owner:name}}); await tx.leadPerson.deleteMany({where:{name:old.name}});}
  await tx.leadPerson.upsert({where:{name},update:{},create:{name}});
  if(old && (passwordHash || old.role!==body.role || !body.active)) await tx.adminSession.deleteMany({where:{userId:old.id}});
  return saved;
 });
 return NextResponse.json({user});
}
export async function POST(request:NextRequest){return save(request,false);}
export async function PATCH(request:NextRequest){return save(request,true);}
