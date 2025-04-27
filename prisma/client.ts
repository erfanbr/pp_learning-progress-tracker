
import {PrismaClient} from "@/app/generated/prisma";


const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
    globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;


// based on the guide here: https://www.prisma.io/docs/orm/more/help-and-troubleshooting/nextjs-help
// to avoid having to instances of PrismaClient running at the same time