/*
  Warnings:

  - The primary key for the `StudentToClass` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `year` on the `StudentToClass` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "StudentToClass" DROP CONSTRAINT "StudentToClass_pkey",
DROP COLUMN "year",
ADD CONSTRAINT "StudentToClass_pkey" PRIMARY KEY ("studentId", "classId");
