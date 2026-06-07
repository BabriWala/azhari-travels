# Azhari Travels Project Documentation

## 1. Project Overview

Azhari Travels is a Next.js travel agency website with a database-backed CRM/admin panel. The website shows services, visa support, tour packages, Umrah packages, student consultancy content, blogs, reviews, and contact information.

The admin panel lets a non-developer manage dynamic website data:

- Create, update, delete and publish packages
- Create, update, delete and publish visa services
- Create, update, delete and publish blog posts
- Manage reviews
- View and update leads from contact forms
- Upload images and use them in packages, visas, blogs and reviews

## 2. Technology Stack

- Framework: Next.js App Router
- Language: TypeScript
- UI: React, Tailwind CSS
- Icons: Lucide React, React Icons
- Database ORM: Prisma
- Local database: SQLite
- Package manager: pnpm
- Tracking: Meta Pixel and server-side conversion API route
- Deployment support: PM2, Docker, GitHub Actions

## 3. Important Project Paths

```text
src/app                     Main Next.js app routes
src/app/admin/content       CRM admin panel UI
src/app/api                 Backend API routes
src/app/lib                 Shared backend helpers
src/app/data                Static fallback/seed data
src/app/Home                Home page sections
src/app/components          Shared frontend sections/components
prisma/schema.prisma        Database schema
prisma/seed.ts              Initial database seed script
prisma/migrations           SQL migration files
public/uploads              Uploaded admin images
```

## 4. Environment Variables

Create `.env.local` for local development.

```env
NEXT_PUBLIC_META_PIXEL_ID=1404228387596184
META_PIXEL_ID=1404228387596184
META_ACCESS_TOKEN=replace_with_meta_conversions_api_access_token
META_TEST_EVENT_CODE=
PORT=3000
HOSTNAME=0.0.0.0

ADMIN_API_TOKEN=demo-admin-token
ADMIN_EMAIL=admin@gmail.com
ADMIN_PASSWORD=admin123456

DATABASE_URL="file:./dev.db"
```

Current demo admin login:

```text
Email: admin@gmail.com
Password: admin123456
```

For production, change all admin credentials and tokens.

## 5. Install And Run Locally

```bash
pnpm install
pnpm db:generate
pnpm db:init:sqlite
pnpm db:seed
pnpm dev
```

Open:

```text
http://localhost:3000
```

Admin panel:

```text
http://localhost:3000/admin
```

or:

```text
http://localhost:3000/admin/content
```

## 6. Database

The database schema is in:

```text
prisma/schema.prisma
```

Main database models:

```text
Service
TourPackage
VisaService
BlogPost
Review
Lead
MediaAsset
AdminUser
ActivityLog
```

Useful commands:

```bash
pnpm db:generate
pnpm db:init:sqlite
pnpm db:seed
pnpm db:studio
pnpm db:migrate
pnpm db:deploy
```

Local note: `pnpm db:init:sqlite` creates the SQLite database from the SQL migration when Prisma migration engine is unavailable on Windows.

## 7. Admin Panel Workflow

Open:

```text
/admin/content
```

Login with admin credentials.

Left sidebar content types:

```text
Services
Packages
Visa
Blogs
Reviews
Leads
```

To create a record:

1. Select the content type.
2. Click `New`.
3. Fill the form fields.
4. Upload an image if needed.
5. Set status to `published` if it should show on the public website.
6. Click `Create Record`.

To update a record:

1. Select the content type.
2. Click an existing item from the left list.
3. Edit the fields on the right.
4. Click `Update Record`.

To delete:

1. Select an item.
2. Click `Delete`.
3. Confirm deletion.

## 8. Publishing Rules

Only records with:

```text
status = published
```

show on the public website.

Draft, pending, new, received, contacted and closed records are admin-only unless code explicitly includes them.

## 9. Image Uploads

Admin image upload route:

```text
POST /api/admin/upload
```

Images are stored in:

```text
public/uploads
```

Supported formats:

```text
JPG
PNG
WEBP
GIF
```

Max file size:

```text
5MB
```

The admin panel shows an instant local preview when selecting an image, then replaces it with the saved `/uploads/...` URL after upload succeeds.

Production note: keep `public/uploads` on persistent storage or a mounted volume.

## 10. Frontend Dynamic Data Flow

The main frontend now reads database/admin data.

Dynamic pages:

```text
/
/tour-packages
/visa-services
/package/[slug]
/visa-services/[slug]
/blog
/blog/[slug]
```

These pages are marked dynamic/no-cache so admin changes can show without rebuilding:

```ts
export const dynamic = "force-dynamic";
export const revalidate = 0;
```

Data comes from Prisma through:

```text
src/app/lib/crmRepository.ts
```

Frontend pages call:

```ts
listCrm(...)
getCrmBySlug(...)
```

## 11. Public API Endpoints

All API responses use a consistent envelope:

```json
{
  "success": true,
  "data": {},
  "meta": {}
}
```

Core APIs:

```text
GET  /api/catalog
GET  /api/services
GET  /api/tour-packages
GET  /api/tour-packages/[slug]
GET  /api/visa-services
GET  /api/visa-services/[slug]
GET  /api/blogs
GET  /api/blogs/[slug]
GET  /api/student-consultancy
GET  /api/umrah
GET  /api/reviews
POST /api/reviews
GET  /api/gallery
GET  /api/faqs
GET  /api/contact-info
POST /api/contact
GET  /api/health
POST /api/meta/events
```

List endpoints support:

```text
page
limit
q
category
featured
```

Examples:

```bash
curl "http://localhost:3000/api/tour-packages?page=1&limit=10"
curl "http://localhost:3000/api/visa-services"
curl "http://localhost:3000/api/blogs?q=umrah"
```

## 12. Admin API Endpoints

Admin login:

```text
POST /api/admin/login
```

Body:

```json
{
  "email": "admin@gmail.com",
  "password": "admin123456"
}
```

Admin content CRUD:

```text
GET    /api/admin/content/:collection
POST   /api/admin/content/:collection
PUT    /api/admin/content/:collection
DELETE /api/admin/content/:collection?id=:id
```

Collections:

```text
services
tour-packages
visa-services
blogs
reviews
leads
```

Authorization:

```text
Authorization: Bearer ADMIN_API_TOKEN
```

Upload:

```text
POST /api/admin/upload
```

Form fields:

```text
file
category
alt
```

## 13. Contact And Leads

Contact form submissions go to:

```text
POST /api/contact
```

Required:

```text
name
phone
message
```

Optional:

```text
email
service
source
preferredContact
```

Submissions are saved as `Lead` records in the database and can be managed from the admin panel under `Leads`.

## 14. Reviews

Public review submission:

```text
POST /api/reviews
```

Submitted reviews are saved as pending/admin-managed records. Publish them from the admin panel by setting:

```text
status = published
```

## 15. Meta Pixel And Server Tracking

Environment variables:

```env
NEXT_PUBLIC_META_PIXEL_ID=
META_PIXEL_ID=
META_ACCESS_TOKEN=
META_TEST_EVENT_CODE=
```

Server event route:

```text
POST /api/meta/events
```

This route is used for server-side tracking such as WhatsApp click or purchase-style conversion events.

For testing Meta Pixel:

1. Set the Pixel ID.
2. Set Meta access token for server-side events.
3. Use Meta Events Manager test events.
4. Trigger the WhatsApp/package action.
5. Confirm browser and server events arrive.

## 16. Production Build

```bash
pnpm install --frozen-lockfile
pnpm db:generate
pnpm db:deploy
pnpm build
pnpm start
```

Production app runs on:

```text
0.0.0.0:3000
```

## 17. PM2 Deployment

Start:

```bash
pnpm pm2:start
```

Reload after deploy:

```bash
pnpm pm2:reload
```

PM2 config:

```text
ecosystem.config.cjs
```

## 18. Docker Deployment

Build:

```bash
docker build -t azhari-travels .
```

Run:

```bash
docker run --env-file .env -p 3000:3000 azhari-travels
```

For uploads, mount a volume to:

```text
public/uploads
```

## 19. GitHub Actions

Deployment workflow:

```text
.github/workflows/deploy.yml
```

Required repository secrets:

```text
HOST
USERNAME
SSH_KEY
```

## 20. Troubleshooting

### Admin list is empty

Check:

```bash
pnpm db:seed
```

Also make sure records have:

```text
status = published
```

for public display.

### Admin create/update fails

Check:

```text
ADMIN_API_TOKEN
DATABASE_URL
prisma/dev.db
```

Restart dev server after Prisma/schema changes.

### API route returns 404 in dev

Clear Next dev cache:

```powershell
Remove-Item -Recurse -Force .next\dev
pnpm dev
```

### Prisma generate fails on Windows

Stop running Node/Next processes, then run:

```bash
pnpm prisma generate
```

### Uploaded image does not show

Check the saved URL:

```text
/uploads/category/file-name.png
```

Check the file exists under:

```text
public/uploads
```

### Frontend still shows old data

Check that the page is dynamic and data is published. Restart dev server if needed.

## 21. Current Verification Status

Verified:

- Production build passes
- Admin login exists
- Admin package list works
- Admin blog list works
- Create package API works
- Delete package API works
- Image upload API works
- Frontend package, visa and blog pages are DB-backed
- Main DB-backed pages are dynamic server-rendered

