/*
  Warnings:

  - You are about to drop the column `studentId` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `yearYear` on the `Class` table. All the data in the column will be lost.
  - The primary key for the `StudentToLock` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `yearYear` on the `StudentToLock` table. All the data in the column will be lost.
  - The primary key for the `StudentToLocker` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `yearYear` on the `StudentToLocker` table. All the data in the column will be lost.
  - You are about to drop the `Year` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[grade,letter,year]` on the table `Class` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `year` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `StudentToLock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `StudentToLocker` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_studentId_fkey";

-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_yearYear_fkey";

-- DropForeignKey
ALTER TABLE "StudentToLock" DROP CONSTRAINT "StudentToLock_yearYear_fkey";

-- DropForeignKey
ALTER TABLE "StudentToLocker" DROP CONSTRAINT "StudentToLocker_yearYear_fkey";

-- AlterTable
ALTER TABLE "Class" DROP COLUMN "studentId",
DROP COLUMN "yearYear",
ADD COLUMN     "year" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "StudentToLock" DROP CONSTRAINT "StudentToLock_pkey",
DROP COLUMN "yearYear",
ADD COLUMN     "year" INTEGER NOT NULL,
ADD CONSTRAINT "StudentToLock_pkey" PRIMARY KEY ("year", "studentId", "lockSerial");

-- AlterTable
ALTER TABLE "StudentToLocker" DROP CONSTRAINT "StudentToLocker_pkey",
DROP COLUMN "yearYear",
ADD COLUMN     "year" INTEGER NOT NULL,
ADD CONSTRAINT "StudentToLocker_pkey" PRIMARY KEY ("year", "studentId", "lockerNumber");

-- DropTable
DROP TABLE "Year";

-- CreateTable
CREATE TABLE "StudentToClass" (
    "year" INTEGER NOT NULL,
    "studentId" TEXT NOT NULL,
    "classId" TEXT NOT NULL,

    CONSTRAINT "StudentToClass_pkey" PRIMARY KEY ("year","studentId","classId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Class_grade_letter_year_key" ON "Class"("grade", "letter", "year");

-- AddForeignKey
ALTER TABLE "StudentToClass" ADD CONSTRAINT "StudentToClass_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentToClass" ADD CONSTRAINT "StudentToClass_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
