-- AlterTable
ALTER TABLE `categories` ADD COLUMN `published` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `notifications` ADD COLUMN `read` BOOLEAN NOT NULL DEFAULT false;
