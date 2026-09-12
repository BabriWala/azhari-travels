CREATE TABLE "LeadDailyWork" (
 "id" TEXT NOT NULL PRIMARY KEY,
 "leadId" TEXT NOT NULL,
 "day" TEXT NOT NULL,
 "status" TEXT NOT NULL DEFAULT 'not_checked',
 "author" TEXT NOT NULL,
 "updatedAt" DATETIME NOT NULL,
 CONSTRAINT "LeadDailyWork_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE UNIQUE INDEX "LeadDailyWork_leadId_day_key" ON "LeadDailyWork"("leadId","day");
CREATE INDEX "LeadDailyWork_day_status_idx" ON "LeadDailyWork"("day","status");
