/*
  Warnings:

  - You are about to alter the column `bio` on the `Profile` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(120)`.
  - Added the required column `imageUrl` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "imageUrl" TEXT NOT NULL,
ALTER COLUMN "bio" SET DATA TYPE CHAR(120);
