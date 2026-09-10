import { NextRequest } from "next/server";
import { requestToken, tokenHash } from "../../../lib/adminAuth";
import { prisma } from "../../../lib/db";
export async function POST(request:NextRequest){const token=requestToken(request); if(token) await prisma.adminSession.deleteMany({where:{tokenHash:tokenHash(token)}});return Response.json({success:true});}
