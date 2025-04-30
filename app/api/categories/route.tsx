import React from "react";
import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/client";

export async function GET(request: NextRequest) {
    const categories = await prisma.catergory.findMany();
    return NextResponse.json(categories);
}
