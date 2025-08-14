/*
  Warnings:

  - You are about to drop the `Images` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Images" DROP CONSTRAINT "Images_roomsId_fkey";

-- AlterTable
ALTER TABLE "public"."Rooms" ADD COLUMN     "images" TEXT[];

-- DropTable
DROP TABLE "public"."Images";
