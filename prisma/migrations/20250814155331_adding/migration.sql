/*
  Warnings:

  - You are about to drop the column `images` on the `Rooms` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Rooms" DROP COLUMN "images";

-- CreateTable
CREATE TABLE "public"."Images" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "roomsId" TEXT NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Images" ADD CONSTRAINT "Images_roomsId_fkey" FOREIGN KEY ("roomsId") REFERENCES "public"."Rooms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
