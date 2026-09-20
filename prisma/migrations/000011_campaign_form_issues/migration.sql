CREATE TABLE "CampaignFormIssue" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "campaignId" TEXT NOT NULL,
  "step" INTEGER NOT NULL,
  "questionId" TEXT NOT NULL DEFAULT '',
  "message" TEXT NOT NULL,
  "code" TEXT NOT NULL,
  "occurrences" INTEGER NOT NULL DEFAULT 1,
  "resolvedAt" DATETIME,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL
);
CREATE INDEX "CampaignFormIssue_resolvedAt_updatedAt_idx" ON "CampaignFormIssue"("resolvedAt", "updatedAt");
CREATE INDEX "CampaignFormIssue_campaignId_idx" ON "CampaignFormIssue"("campaignId");
