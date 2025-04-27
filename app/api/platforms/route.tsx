import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/client";

export async function GET(request : NextRequest) {
    const platforms = await prisma.platform.findMany();
    return NextResponse.json(platforms)
}
