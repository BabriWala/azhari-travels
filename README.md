# Azhari Travels

Production-ready Next.js app for Azhari Travels & Tours.

## Requirements

- Node.js 22+
- pnpm 10+
- PM2 for VPS hosting, or Docker for container hosting

## Environment

Create `.env.local` for local development or `.env` on the server using `.env.example` as the template.

Required for Meta tracking:

```bash
NEXT_PUBLIC_META_PIXEL_ID=1404228387596184
META_PIXEL_ID=1404228387596184
META_ACCESS_TOKEN=replace_with_meta_conversions_api_access_token
META_TEST_EVENT_CODE=
ADMIN_API_TOKEN=change_this_admin_token
ADMIN_EMAIL=admin@gmail.com
ADMIN_PASSWORD=admin123456
DATABASE_URL="file:./dev.db"
```

Never commit real access tokens.

## Admin Panel

Open:

```text
/admin/content
```

Set `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `ADMIN_API_TOKEN` on the server. The current demo login is:

```text
admin@gmail.com
admin123456
```

After login, choose a content type from the left sidebar. The list below it shows all existing records for that type. Click any record to edit it, change the fields, then press `Update Record`. Press `New` to create a fresh record.

Dynamic content is stored in the Prisma database configured by `DATABASE_URL`. Locally this can be SQLite; on production you can point Prisma to a managed database supported by the schema.

Supported admin collections:

```text
tour-packages
visa-services
blogs
reviews
leads
services
```

Use `status: "published"` for records that should appear in public APIs. Draft, pending, and received records stay visible only in the admin API.

Media uploads from the admin panel are stored under:

```text
public/uploads
```

For production VPS hosting, keep that folder on persistent disk or mount it as a volume.

Database commands:

```bash
pnpm db:generate
pnpm db:migrate
pnpm db:init:sqlite
pnpm db:seed
pnpm db:studio
```

Use `pnpm db:init:sqlite` only for local SQLite setup if Prisma's migration engine is unavailable on the machine. Production deploys should use `pnpm db:deploy`.

Admin API:

```text
GET    /api/admin/content/:collection
POST   /api/admin/content/:collection
PUT    /api/admin/content/:collection
DELETE /api/admin/content/:collection?id=:id
```

Send the token as:

```text
Authorization: Bearer YOUR_ADMIN_API_TOKEN
```

## Local Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Production Build

```bash
pnpm install --frozen-lockfile
pnpm build
pnpm start
```

The app runs on `0.0.0.0:3000`.

## VPS With PM2

```bash
pnpm install --frozen-lockfile
pnpm build
pnpm pm2:start
```

For later deploys:

```bash
git pull origin main
pnpm install --frozen-lockfile
pnpm build
pnpm pm2:reload
```

## Docker

```bash
docker build -t azhari-travels .
docker run --env-file .env -p 3000:3000 azhari-travels
```

## Health Check

Use this endpoint for uptime monitors or load balancers:

```text
GET /api/health
```

Expected response:

```json
{
  "ok": true,
  "service": "azhari-travels",
  "timestamp": "..."
}
```

## API

All API responses use a consistent envelope:

```json
{
  "success": true,
  "data": {},
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "totalPages": 1,
    "hasNextPage": false,
    "hasPrevPage": false
  }
}
```

List endpoints support `page`, `limit`, `q`, and where relevant `category`.

Core endpoints:

```text
GET  /api/catalog
GET  /api/services
GET  /api/tour-packages
GET  /api/tour-packages/:slug
GET  /api/visa-services
GET  /api/visa-services/:slug
GET  /api/blogs
GET  /api/blogs/:slug
GET  /api/student-consultancy
GET  /api/umrah
GET  /api/reviews
POST /api/reviews
GET  /api/gallery
GET  /api/faqs
GET  /api/contact-info
POST /api/contact
GET  /api/health
```

Examples:

```bash
curl "http://localhost:3000/api/tour-packages?page=1&limit=4&q=umrah"
curl "http://localhost:3000/api/visa-services/egypt-visa"
curl "http://localhost:3000/api/faqs?type=AU&page=1&limit=10"
```

Contact submission:

```bash
curl -X POST "http://localhost:3000/api/contact" \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Client Name\",\"phone\":\"01300000000\",\"message\":\"I need Umrah package details\",\"service\":\"Umrah\"}"
```

## Deployment

### Lead workspace

The separate lead workspace is available at `/admin/leads` and linked from the content admin. Sign in with the existing admin credentials. It supports CSV/XLSX preview and import (first worksheet, 10 MB, 5,000 rows), search, stage/source/owner filters, bulk assignment, custom stages, and per-lead conversation history. Staff can log either party's text and attach or record audio. This is an internal conversation log, not a customer messaging portal. Team member names are assignment labels, not separate login accounts.

Imports accept both CRM contact exports and Meta/Facebook form response exports (`full_name`, `created_time`, `form_name`, `lead_status`, and `p:` phone prefixes). CSV uploads automatically detect UTF-8/UTF-16 encoding and comma, tab or semicolon separators, including Meta's UTF-16 tab-separated `.csv` downloads. They match existing contacts by normalized phone, email, import identity or external lead ID. Bangladesh local `01…` and international `+8801…` numbers match, including Bengali digits. Store Excel phone cells as text to preserve leading zeros. Rows with apparently shifted name/phone fields are flagged and skipped rather than guessing where their answers belong.

Matching contacts receive nonempty form responses and missing contact fields while their assignments, pipeline stages and conversation history stay intact. Import preview separates new leads, updated leads, unchanged/duplicate rows and ambiguous matches. Blank answers never erase saved answers; older dated form exports only fill missing answers. Repeated imports are idempotent. Conflicting matches across multiple contacts are skipped for review. When importing both files, import the CRM contact export first to establish its owners/stages, then the response export to enrich it.

Each lead shows a Form responses section with readable question/answer text; original values remain stored. Global search includes questions and answers. Select several exact answers per question (any selected answer matches), or filter for text, answered, or not answered. Combine question filters with ALL (AND) or ANY (OR) matching alongside owner/stage/source filters. Ad/campaign identifiers remain in Contact & import details instead of question filters.

The lead list defaults to 100 rows per page, with 200 and 500 options. WhatsApp links appear beside primary phone numbers and WhatsApp response numbers; Bengali digits and Bangladesh local prefixes are normalized, while scientific notation or corrupted numbers are not turned into links. Delete a lead from its detail panel, or select multiple leads and use Delete selected. Deletion requires three separate confirmations, including typing `DELETE N` at the final step. It permanently removes only those IDs and their responses, conversation history and audio. No real leads are deleted by tests.

Run `pnpm exec prisma generate` and `pnpm db:deploy` before starting the updated app. The additive `000002_lead_workspace` migration preserves existing leads. On a database previously created with `db:init:sqlite` without migration records, first verify that its tables match `000001_init` and baseline it with `pnpm exec prisma migrate resolve --applied 000001_init`, then deploy migrations. Back up the database before applying production migrations.

Lead data and private audio are stored in the SQLite database. Production must use persistent, writable storage and include the database in backups; ephemeral serverless storage is not supported. Set `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `ADMIN_API_TOKEN` for production. Audio requests require the admin token. Browser microphone capture needs HTTPS (or localhost); attaching audio also works without microphone access. Audio is limited to 10 MB, recordings to three minutes. Other team changes refresh every 30 seconds or with the refresh button.

Run `pnpm test:leads` for isolated database integration tests. Optionally append a CSV path to validate an export without importing it into the app database.

GitHub Actions deploys `main` to the VPS using `.github/workflows/deploy.yml`.

### Campaign landing pages and assessments

Open **Lead workspace → Campaigns & assessments** (`/admin/campaigns`). Superadmins can create, publish/pause and edit campaigns; staff can review responses and update qualification. A published campaign lives at `/campaign/<slug>`. No campaigns are published automatically.

The editor manages introductions, campaign information, privacy notice, button/confirmation text, steps, question order, question types, required/active flags, field mappings, conditions and scoring rules. Conditions refer to earlier active questions; rules support equality, contains and numeric comparisons. Scores are capped at 100, with configurable Hot, Qualified and Warm thresholds; a matching disqualification rule overrides the score. Staff overrides are preserved. Map questions to phone, WhatsApp, email, passport, budget, location, education or experience to enable contact matching and filters.

Visitors are told that continuing saves incomplete answers. Each successful Next saves a partial assessment and links it to a CRM profile. An HttpOnly, same-site cookie resumes that visitor's own assessment for 30 days on the same browser; it never returns another person's answers when a contact matches. Existing assessments retain a snapshot of their original questions and scoring rules. Unchecked required consent prevents final submission. Server validation ignores answers hidden by conditional logic and rejects stale saves from other tabs.

Phone/WhatsApp/email matching reuses a profile without replacing staff-managed contact data, stages or ownership. Ambiguous matches remain separate with a review note. Shared-device cookies should be cleared before starting an assessment for another person. New leads use the campaign's default assignee. Existing CRM notes, daily work, conversation/audio history and follow-ups remain available; Call, WhatsApp, SMS and Email links open the staff member's communication app. Outbound messaging is not automated and no SMS/email/WhatsApp provider is connected.

Use URL parameters in Facebook ads: `utm_source=facebook&utm_medium=paid_social&utm_campaign=YOUR_CAMPAIGN&campaign_id={{campaign.id}}&adset_id={{adset.id}}&ad_id={{ad.id}}`. The system also records `utm_content`, `utm_term`, `fbclid`, landing page and referrer on the first save. It does not fetch ad spend or audience demographics from Meta. Configure your reverse proxy to overwrite `X-Real-IP` for the persisted hourly submission rate limit.

**Leads & performance** supports debounced search, qualification/score/contact-answer/date/employee/follow-up filters, sorting, pagination and CSV export. The main CRM row also shows the latest assessment score and progress. Campaign reports count unique CRM profiles; response lists retain repeat assessments. Enter lifetime campaign spend manually in one currency. Cost per lead and cost per qualified lead use lifetime totals for that selected campaign, independent of response-list filters. Conversion means an assessment was marked Converted; it is not an inferred sale or payment. Ad and team breakdowns show recorded activity only.

Apply additive migration `000009_campaign_assessments` (or the existing deployment schema sync), regenerate Prisma, and restart the app. Back up the database first. Run `pnpm test:campaigns` and `pnpm test:leads` for isolated database integration checks.

Required repository secrets:

- `HOST`
- `USERNAME`
- `SSH_KEY`

CSV/XLSX uploads now record a dated batch with filename and uploader, including matched contacts on repeat imports. The CRM shows colored date and batch badges and filters in Asia/Dhaka time. Older records show their CRM creation date with “Upload batch not recorded”; historical batch identities are not inferred. The Add lead form creates one contact without a file, with stage, owner, service and an optional first note; duplicate phone/email contacts are rejected. Apply migration `000005_lead_uploads` (or the existing deployment schema-sync step) and regenerate Prisma before running this version.

Each CRM lead has a shared daily work status: Not checked, Checked, Follow-up needed, or Done today. The daily status is separate from its pipeline stage and scheduled reminders. It starts fresh at midnight in Asia/Dhaka; records for earlier days and status changes in conversation history are retained. Authenticated staff can update individual rows, with server-controlled date and author attribution. Apply `000006_lead_daily_work` before running this version.

Named spreadsheet imports support CSV, TSV, XLSX and XLSM (values only; macros are not run). Save legacy XLS files as XLSX first. Choose a worksheet and header row, then map CRM fields; all columns are preserved as extra data. Missing names use email/phone or a generated record label. Imports allow 10 MB, 5,000 rows and 100 columns. Upload names appear on batch badges, in search and in the upload name/batch filter. Repeat imports can save a new named batch containing existing matching contacts. Apply `000007_upload_names` before running this version.
