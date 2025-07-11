import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const prisma = new PrismaClient();

async function restore() {
    const rawData = fs.readFileSync('backup.json', 'utf-8');
    const data = JSON.parse(rawData);


    const { technology, category, platform, course, learningPath } = data;


    await prisma.technology.deleteMany();
    await prisma.category.deleteMany();
    await prisma.platform.deleteMany();
    await prisma.course.deleteMany();
    await prisma.learningPath.deleteMany();



    if (technology?.length) {
        await prisma.technology.createMany({ data: technology });
    }


    if (category?.length) {
        await prisma.category.createMany({ data: category });
    }

    if (platform?.length) {
        await prisma.platform.createMany({ data: platform });
    }

    if (course?.length) {
        await prisma.course.createMany({ data: course });
    }
    if (learningPath?.length) {
        await prisma.learningPath.createMany({ data: learningPath });
    }



    console.log('Restore complete.');
}

restore()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());
