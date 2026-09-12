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

Required repository secrets:

- `HOST`
- `USERNAME`
- `SSH_KEY`

CSV/XLSX uploads now record a dated batch with filename and uploader, including matched contacts on repeat imports. The CRM shows colored date and batch badges and filters in Asia/Dhaka time. Older records show their CRM creation date with “Upload batch not recorded”; historical batch identities are not inferred. The Add lead form creates one contact without a file, with stage, owner, service and an optional first note; duplicate phone/email contacts are rejected. Apply migration `000005_lead_uploads` (or the existing deployment schema-sync step) and regenerate Prisma before running this version.
