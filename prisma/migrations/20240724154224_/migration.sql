-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_membershipId_fkey";

-- AlterTable
ALTER TABLE "Student" ALTER COLUMN "membershipId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "Membership"("id") ON DELETE SET NULL ON UPDATE CASCADE;
