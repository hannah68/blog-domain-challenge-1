/*
  Warnings:

  - You are about to alter the column `title` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(150)`.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "postImg" TEXT,
ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "title" SET DATA TYPE CHAR(150);
