/*
  Warnings:

  - Added the required column `location` to the `Rooms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Rooms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Rooms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Rooms" ADD COLUMN     "images" TEXT[],
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "price" TEXT NOT NULL;
