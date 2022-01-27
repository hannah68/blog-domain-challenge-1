/*
  Warnings:

  - You are about to alter the column `content` on the `Comment` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(250)`.

*/
-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "content" SET DATA TYPE CHAR(250);
