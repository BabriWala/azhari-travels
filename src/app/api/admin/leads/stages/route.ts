import { NextRequest, NextResponse } from "next/server";
import { getAdminActor, requireAdmin } from "../../../../lib/adminAuth";
import { prisma } from "../../../../lib/db";
class StageError extends Error { constructor(message:string,public status=422){super(message);} }
async function mutate(request:NextRequest,remove=false){
 const denied=await requireAdmin(request);if(denied)return denied;
 const body=await request.json().catch(()=>null);
 if(!body)return NextResponse.json({error:"Invalid stage request."},{status:422});
 const actor=(await getAdminActor(request))!;
 try {
  await prisma.$transaction(async tx=>{
   if(!remove && body.action==="reorder"){
    const stages=await tx.leadStage.findMany();
    if(!Array.isArray(body.ids)||body.ids.length!==stages.length||new Set(body.ids).size!==stages.length||!body.ids.every((id:unknown)=>typeof id==="string"&&stages.some(s=>s.id===id)))throw new StageError("The stages changed. Refresh and try again.",409);
    for(const [sortOrder,id] of (body.ids as string[]).entries())await tx.leadStage.update({where:{id},data:{sortOrder}});
    return;
   }
   if(typeof body.id!=="string")throw new StageError("Choose a stage.");
   const stage=await tx.leadStage.findUnique({where:{id:body.id}});if(!stage)throw new StageError("Stage no longer exists.",404);
   if(remove){
    if(body.confirmation!==stage.name)throw new StageError("Confirm the stage name before removing it.");
    if(await tx.leadStage.count()<=1)throw new StageError("Keep at least one pipeline stage.");
    if(await tx.lead.count({where:{status:stage.name}}))throw new StageError("Move leads to another stage before removing this stage.",409);
    await tx.messageTemplate.updateMany({where:{stage:stage.name},data:{stage:""}});
    await tx.leadStage.delete({where:{id:stage.id}});
    const remaining=await tx.leadStage.findMany({orderBy:{sortOrder:"asc"}});
    for(const [sortOrder,item] of remaining.entries())await tx.leadStage.update({where:{id:item.id},data:{sortOrder}});return;
   }
   if(body.action!=="rename"||typeof body.name!=="string"||!body.name.trim()||body.name.length>100)throw new StageError("Enter a stage name of 1–100 characters.");
   const name=body.name.trim();if(name===stage.name)return;
   if(await tx.leadStage.findUnique({where:{name}}))throw new StageError("A stage with that name already exists.",409);
   await tx.leadStage.update({where:{id:stage.id},data:{name}});
   await tx.messageTemplate.updateMany({where:{stage:stage.name},data:{stage:name}});
   const leads=await tx.lead.findMany({where:{status:stage.name},select:{id:true}});
   await tx.lead.updateMany({where:{status:stage.name},data:{status:name}});
   for(const lead of leads)await tx.leadConversation.create({data:{leadId:lead.id,party:"system",author:actor.name,text:`Stage renamed from ${stage.name} to ${name}`}});
  },{timeout:30000});
  return NextResponse.json({success:true});
 }catch(error){if(error instanceof StageError)return NextResponse.json({error:error.message},{status:error.status});throw error;}
}
export async function PATCH(request:NextRequest){return mutate(request);}
export async function DELETE(request:NextRequest){return mutate(request,true);}

