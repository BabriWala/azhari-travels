import { NextRequest, NextResponse } from "next/server";
import { getAdminActor, requireAdmin } from "../../../../../lib/adminAuth";
import { prisma } from "../../../../../lib/db";
type Context={params:Promise<{id:string}>};
export async function PATCH(request:NextRequest,context:Context){
 const denied=await requireAdmin(request,true);if(denied)return denied;const {id}=await context.params;const actor=(await getAdminActor(request))!;
 const b=await request.json().catch(()=>null);if(!b)return NextResponse.json({error:"Invalid follow-up request."},{status:422});
 const lead=await prisma.lead.findUnique({where:{id}});if(!lead)return NextResponse.json({error:"Lead not found."},{status:404});
 if(b.action==="notes"){
  if(typeof b.notes!=="string"||b.notes.length>10000)return NextResponse.json({error:"Notes must be under 10,000 characters."},{status:422});
  if(lead.notes&&!b.notes.trim()&&actor.role!=="superadmin")return NextResponse.json({error:"Only a superadmin can clear saved notes."},{status:403});
  if(lead.notes!==b.notes.trim())await prisma.$transaction([prisma.lead.update({where:{id},data:{notes:b.notes.trim()}}),prisma.leadConversation.create({data:{leadId:id,party:"system",author:actor.name,text:"Lead notes updated"}})]);
  return NextResponse.json({success:true});
 }
 if(!["create","update"].includes(b.action)||typeof b.notes!=="string"||b.notes.length>5000||typeof b.dueAt!=="string"||!Number.isFinite(Date.parse(b.dueAt))||!["pending","completed","cancelled"].includes(b.status)||(b.action==="update"&&typeof b.id!=="string"))return NextResponse.json({error:"Choose a follow-up date, time and valid reminder status."},{status:422});
 const old=b.action==="update"?await prisma.leadReminder.findFirst({where:{id:b.id,leadId:id}}):null;
 if(b.action==="update"&&!old)return NextResponse.json({error:"Reminder not found."},{status:404});
 const dueAt=new Date(b.dueAt), data={dueAt,notes:b.notes.trim(),status:b.status,completedAt:b.status==="completed"?(old?.completedAt||new Date()):null};
 await prisma.$transaction(async tx=>{
  if(old)await tx.leadReminder.update({where:{id:old.id},data});else await tx.leadReminder.create({data:{...data,leadId:id,author:actor.name}});
  await tx.leadConversation.create({data:{leadId:id,party:"system",author:actor.name,text:`Reminder ${old?"updated":"created"}: ${b.status} · ${dueAt.toISOString()}${b.notes.trim()?" · "+b.notes.trim():""}`}});
 });return NextResponse.json({success:true});
}
export async function DELETE(request:NextRequest,context:Context){
 const denied=await requireAdmin(request);if(denied)return denied;const {id}=await context.params;const actor=(await getAdminActor(request))!;const b=await request.json().catch(()=>null);
 if(typeof b?.id!=="string"||b.confirmation!=="DELETE")return NextResponse.json({error:"Confirm reminder deletion."},{status:422});
 await prisma.$transaction(async tx=>{const reminder=await tx.leadReminder.findFirst({where:{id:b.id,leadId:id}});if(!reminder)return;await tx.leadReminder.delete({where:{id:reminder.id}});await tx.leadConversation.create({data:{leadId:id,party:"system",author:actor.name,text:`Reminder deleted: ${reminder.dueAt.toISOString()} · ${reminder.notes}`}});});return NextResponse.json({success:true});
}
