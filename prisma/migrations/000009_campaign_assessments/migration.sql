-- CreateTable
CREATE TABLE "Campaign" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "config" TEXT NOT NULL,
    "spend" REAL NOT NULL DEFAULT 0,
    "currency" TEXT NOT NULL DEFAULT 'BDT',
    "defaultOwner" TEXT NOT NULL DEFAULT 'Unassigned',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "CampaignResponse" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "campaignId" TEXT NOT NULL,
    "leadId" TEXT,
    "tokenHash" TEXT NOT NULL,
    "snapshot" TEXT NOT NULL,
    "answers" TEXT NOT NULL DEFAULT '{}',
    "tracking" TEXT NOT NULL DEFAULT '{}',
    "step" INTEGER NOT NULL DEFAULT 0,
    "version" INTEGER NOT NULL DEFAULT 0,
    "score" INTEGER NOT NULL DEFAULT 0,
    "qualification" TEXT NOT NULL DEFAULT 'Partial',
    "manualQualification" BOOLEAN NOT NULL DEFAULT false,
    "completedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "CampaignResponse_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CampaignResponse_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CampaignRateLimit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "count" INTEGER NOT NULL DEFAULT 1,
    "expiresAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Campaign_slug_key" ON "Campaign"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "CampaignResponse_tokenHash_key" ON "CampaignResponse"("tokenHash");

-- CreateIndex
CREATE INDEX "CampaignResponse_campaignId_createdAt_idx" ON "CampaignResponse"("campaignId", "createdAt");

-- CreateIndex
CREATE INDEX "CampaignResponse_leadId_idx" ON "CampaignResponse"("leadId");

-- CreateIndex
CREATE INDEX "CampaignRateLimit_expiresAt_idx" ON "CampaignRateLimit"("expiresAt");
