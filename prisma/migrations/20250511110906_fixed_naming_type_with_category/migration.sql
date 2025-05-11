/*
  Warnings:

  - You are about to drop the column `catergoryId` on the `course` table. All the data in the column will be lost.
  - You are about to drop the `catergory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `course` DROP FOREIGN KEY `Course_catergoryId_fkey`;

-- DropIndex
DROP INDEX `Course_catergoryId_fkey` ON `course`;

-- AlterTable
ALTER TABLE `course` DROP COLUMN `catergoryId`,
    ADD COLUMN `categoryId` INTEGER NULL;

-- DropTable
DROP TABLE `catergory`;

-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Course` ADD CONSTRAINT `Course_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
