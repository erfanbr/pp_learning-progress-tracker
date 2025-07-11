import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const prisma = new PrismaClient();

async function backup() {
    const technologies = await prisma.technology.findMany();
    const categories = await prisma.category.findMany();
    const platforms = await prisma.platform.findMany();
    const courses = await prisma.course.findMany();
    // const learningPathCourse = await prisma.learningPathCou.findMany();
    const learningPaths = await prisma.learningPath.findMany();



    const data = { technologies, categories, platforms, courses, learningPaths };

    fs.writeFileSync('backup.json', JSON.stringify(data, null, 2));
    console.log('Backup written to backup.json');
}

backup().finally(() => prisma.$disconnect());
