import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "../../../../lib/adminAuth";
import { prisma } from "../../../../lib/db";
export async function GET(request:NextRequest){const denied=await requireAdmin(request,true);if(denied)return denied;return NextResponse.json({templates:await prisma.messageTemplate.findMany({orderBy:[{stage:"asc"},{title:"asc"}]})},{headers:{"Cache-Control":"no-store"}});}
async function save(request:NextRequest,editing=false){
 const denied=await requireAdmin(request,true);if(denied)return denied;
 const b=await request.json().catch(()=>null);
 if(!b||typeof b.title!=="string"||!b.title.trim()||b.title.length>100||typeof b.text!=="string"||!b.text.trim()||b.text.length>10000||typeof b.stage!=="string"||!["active","draft","archived"].includes(b.status)||(editing&&typeof b.id!=="string"))return NextResponse.json({error:"Enter a title, message, stage and valid status."},{status:422});
 if(b.stage&&!await prisma.leadStage.findUnique({where:{name:b.stage}}))return NextResponse.json({error:"Choose an existing stage."},{status:422});
 if(editing&&!await prisma.messageTemplate.findUnique({where:{id:b.id}}))return NextResponse.json({error:"Template not found."},{status:404});
 const data={title:b.title.trim(),text:b.text.trim(),stage:b.stage,status:b.status};
 const template=editing?await prisma.messageTemplate.update({where:{id:b.id},data}):await prisma.messageTemplate.create({data});return NextResponse.json({template});
}
export async function POST(request:NextRequest){return save(request);}
export async function PATCH(request:NextRequest){return save(request,true);}
export async function DELETE(request:NextRequest){const denied=await requireAdmin(request);if(denied)return denied;const b=await request.json().catch(()=>null);if(typeof b?.id!=="string"||b.confirmation!=="DELETE")return NextResponse.json({error:"Confirm template deletion."},{status:422});await prisma.messageTemplate.deleteMany({where:{id:b.id}});return NextResponse.json({success:true});}
