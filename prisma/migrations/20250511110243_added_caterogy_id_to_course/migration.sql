-- AlterTable
ALTER TABLE `course` ADD COLUMN `catergoryId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Course` ADD CONSTRAINT `Course_catergoryId_fkey` FOREIGN KEY (`catergoryId`) REFERENCES `Catergory`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
