-- CreateEnum
CREATE TYPE "MembershipStatus" AS ENUM ('VERIFIED', 'UNPAID');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('READY', 'STICKY', 'BROKEN');

-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "applicationReceived" BOOLEAN NOT NULL,
    "depositPaid" BOOLEAN NOT NULL,
    "topLocker" BOOLEAN NOT NULL,
    "membershipId" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Year" (
    "year" INTEGER NOT NULL,

    CONSTRAINT "Year_pkey" PRIMARY KEY ("year")
);

-- CreateTable
CREATE TABLE "Class" (
    "id" TEXT NOT NULL,
    "grade" INTEGER NOT NULL,
    "letter" CHAR(1),
    "studentId" TEXT,
    "yearYear" INTEGER NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Membership" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "status" "MembershipStatus" NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "Membership_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentToLocker" (
    "yearYear" INTEGER NOT NULL,
    "studentId" TEXT NOT NULL,
    "lockerNumber" INTEGER NOT NULL,

    CONSTRAINT "StudentToLocker_pkey" PRIMARY KEY ("yearYear","studentId","lockerNumber")
);

-- CreateTable
CREATE TABLE "Locker" (
    "number" INTEGER NOT NULL,
    "floor" INTEGER NOT NULL,
    "status" "Status" NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "Locker_pkey" PRIMARY KEY ("number")
);

-- CreateTable
CREATE TABLE "StudentToLock" (
    "yearYear" INTEGER NOT NULL,
    "studentId" TEXT NOT NULL,
    "lockSerial" INTEGER NOT NULL,

    CONSTRAINT "StudentToLock_pkey" PRIMARY KEY ("yearYear","studentId","lockSerial")
);

-- CreateTable
CREATE TABLE "Lock" (
    "serial" INTEGER NOT NULL,
    "combination1" INTEGER NOT NULL,
    "combination2" INTEGER NOT NULL,
    "combination3" INTEGER NOT NULL,
    "status" "Status" NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "Lock_pkey" PRIMARY KEY ("serial")
);

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "Membership"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_yearYear_fkey" FOREIGN KEY ("yearYear") REFERENCES "Year"("year") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentToLocker" ADD CONSTRAINT "StudentToLocker_yearYear_fkey" FOREIGN KEY ("yearYear") REFERENCES "Year"("year") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentToLocker" ADD CONSTRAINT "StudentToLocker_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentToLocker" ADD CONSTRAINT "StudentToLocker_lockerNumber_fkey" FOREIGN KEY ("lockerNumber") REFERENCES "Locker"("number") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentToLock" ADD CONSTRAINT "StudentToLock_yearYear_fkey" FOREIGN KEY ("yearYear") REFERENCES "Year"("year") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentToLock" ADD CONSTRAINT "StudentToLock_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentToLock" ADD CONSTRAINT "StudentToLock_lockSerial_fkey" FOREIGN KEY ("lockSerial") REFERENCES "Lock"("serial") ON DELETE RESTRICT ON UPDATE CASCADE;
