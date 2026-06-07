import { prisma } from "./db";
import { AdminCollection, AdminRecord } from "./contentStore";

function stringifyList(value: unknown) {
    if (Array.isArray(value)) return JSON.stringify(value);
    if (typeof value === "string") {
        const lines = value.split("\n").map((item) => item.trim()).filter(Boolean);
        return JSON.stringify(lines.length > 1 ? lines : value ? [value] : []);
    }
    return "[]";
}

function parseList(value: unknown) {
    if (Array.isArray(value)) return value;
    if (typeof value !== "string") return [];
    try {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return value.split("\n").map((item) => item.trim()).filter(Boolean);
    }
}

function statusFilter(includePrivate = false) {
    return includePrivate ? undefined : { status: "published" };
}

export async function listCrm(collection: AdminCollection, includePrivate = false) {
    if (shouldSkipLocalSqliteOnVercel()) return [];

    try {
        switch (collection) {
            case "services":
                return prisma.service.findMany({ where: statusFilter(includePrivate), orderBy: [{ sortOrder: "asc" }, { updatedAt: "desc" }] });
            case "tour-packages":
                return (await prisma.tourPackage.findMany({ where: statusFilter(includePrivate), orderBy: [{ sortOrder: "asc" }, { updatedAt: "desc" }] })).map(packageDto);
            case "visa-services":
                return (await prisma.visaService.findMany({ where: statusFilter(includePrivate), orderBy: [{ sortOrder: "asc" }, { updatedAt: "desc" }] })).map(visaDto);
            case "blogs":
                return (await prisma.blogPost.findMany({ where: statusFilter(includePrivate), orderBy: [{ updatedAt: "desc" }] })).map(blogDto);
            case "reviews":
                return (await prisma.review.findMany({ where: includePrivate ? undefined : { status: "published" }, orderBy: [{ updatedAt: "desc" }] })).map(reviewDto);
            case "leads":
                return prisma.lead.findMany({ orderBy: [{ updatedAt: "desc" }] }) as Promise<AdminRecord[]>;
        }
    } catch (error) {
        if (isReadableDatabaseFallbackError(error)) return [];
        throw error;
    }
}

export async function getCrmBySlug(collection: AdminCollection, slug: string) {
    if (shouldSkipLocalSqliteOnVercel()) return null;

    try {
        switch (collection) {
            case "services": {
                const record = await prisma.service.findFirst({ where: { slug, status: "published" } });
                return record;
            }
            case "tour-packages": {
                const record = await prisma.tourPackage.findFirst({ where: { slug, status: "published" } });
                return record ? packageDto(record) : null;
            }
            case "visa-services": {
                const record = await prisma.visaService.findFirst({ where: { slug, status: "published" } });
                return record ? visaDto(record) : null;
            }
            case "blogs": {
                const record = await prisma.blogPost.findFirst({ where: { slug, status: "published" } });
                return record ? blogDto(record) : null;
            }
            default:
                return null;
        }
    } catch (error) {
        if (isReadableDatabaseFallbackError(error)) return null;
        throw error;
    }
}

export async function saveCrm(collection: AdminCollection, input: Record<string, unknown>) {
    switch (collection) {
        case "services":
            return prisma.service.upsert({
                where: { id: String(input.id ?? "") },
                create: serviceInput(input),
                update: serviceInput(input),
            }) as Promise<AdminRecord>;
        case "tour-packages":
            return packageDto(await prisma.tourPackage.upsert({
                where: { id: String(input.id ?? "") },
                create: packageInput(input),
                update: packageInput(input),
            }));
        case "visa-services":
            return visaDto(await prisma.visaService.upsert({
                where: { id: String(input.id ?? "") },
                create: visaInput(input),
                update: visaInput(input),
            }));
        case "blogs":
            return blogDto(await prisma.blogPost.upsert({
                where: { id: String(input.id ?? "") },
                create: blogInput(input),
                update: blogInput(input),
            }));
        case "reviews":
            return reviewDto(await prisma.review.upsert({
                where: { id: String(input.id ?? "") },
                create: reviewInput(input),
                update: reviewInput(input),
            }));
        case "leads":
            return prisma.lead.upsert({
                where: { id: String(input.id ?? "") },
                create: leadInput(input),
                update: leadInput(input),
            }) as Promise<AdminRecord>;
    }
}

export async function deleteCrm(collection: AdminCollection, id: string) {
    try {
        switch (collection) {
            case "services":
                await prisma.service.delete({ where: { id } });
                break;
            case "tour-packages":
                await prisma.tourPackage.delete({ where: { id } });
                break;
            case "visa-services":
                await prisma.visaService.delete({ where: { id } });
                break;
            case "blogs":
                await prisma.blogPost.delete({ where: { id } });
                break;
            case "reviews":
                await prisma.review.delete({ where: { id } });
                break;
            case "leads":
                await prisma.lead.delete({ where: { id } });
                break;
        }
        return true;
    } catch {
        return false;
    }
}

function serviceInput(input: Record<string, unknown>) {
    return {
        slug: String(input.slug ?? ""),
        title: String(input.title ?? ""),
        category: String(input.category ?? "general"),
        summary: String(input.summary ?? ""),
        href: String(input.href ?? `/${input.slug ?? ""}`),
        image: String(input.image ?? ""),
        status: String(input.status ?? "draft"),
        sortOrder: Number(input.sortOrder ?? 0),
    };
}

function packageInput(input: Record<string, unknown>) {
    return {
        slug: String(input.slug ?? ""),
        title: String(input.title ?? ""),
        subtitle: String(input.subtitle ?? ""),
        category: String(input.category ?? "tour"),
        image: String(input.image ?? ""),
        price: String(input.price ?? "Custom"),
        duration: String(input.duration ?? ""),
        audience: String(input.audience ?? ""),
        route: String(input.route ?? ""),
        href: String(input.href ?? `/package/${input.slug ?? ""}`),
        includes: stringifyList(input.includes),
        itinerary: stringifyList(input.itinerary),
        exclusions: stringifyList(input.exclusions),
        process: stringifyList(input.process),
        featured: Boolean(input.featured),
        status: String(input.status ?? "draft"),
        sortOrder: Number(input.sortOrder ?? 0),
    };
}

function visaInput(input: Record<string, unknown>) {
    return {
        slug: String(input.slug ?? ""),
        title: String(input.title ?? ""),
        subtitle: String(input.subtitle ?? ""),
        image: String(input.image ?? ""),
        duration: String(input.duration ?? ""),
        feeNote: String(input.feeNote ?? ""),
        requirements: stringifyList(input.requirements),
        process: stringifyList(input.process),
        status: String(input.status ?? "draft"),
        sortOrder: Number(input.sortOrder ?? 0),
    };
}

function blogInput(input: Record<string, unknown>) {
    return {
        slug: String(input.slug ?? ""),
        title: String(input.title ?? ""),
        excerpt: String(input.excerpt ?? ""),
        category: String(input.category ?? "Travel Guide"),
        date: String(input.date ?? new Date().toISOString().slice(0, 10)),
        image: String(input.image ?? ""),
        sections: stringifyList(input.sections),
        content: String(input.content ?? ""),
        status: String(input.status ?? "draft"),
        featured: Boolean(input.featured),
    };
}

function reviewInput(input: Record<string, unknown>) {
    return {
        name: String(input.name ?? ""),
        location: String(input.location ?? ""),
        rating: Number(input.rating ?? 5),
        service: String(input.service ?? "General"),
        feedback: String(input.feedback ?? ""),
        image: String(input.image ?? ""),
        featured: Boolean(input.featured),
        status: String(input.status ?? "pending"),
    };
}

function leadInput(input: Record<string, unknown>) {
    return {
        name: String(input.name ?? ""),
        phone: String(input.phone ?? ""),
        email: String(input.email ?? ""),
        service: String(input.service ?? "General inquiry"),
        message: String(input.message ?? ""),
        source: String(input.source ?? "website"),
        preferredContact: String(input.preferredContact ?? "phone"),
        status: String(input.status ?? "new"),
    };
}

function packageDto(record: any) {
    return { ...record, includes: parseList(record.includes), itinerary: parseList(record.itinerary), exclusions: parseList(record.exclusions), process: parseList(record.process), href: record.href || `/package/${record.slug}` };
}

function visaDto(record: any) {
    return { ...record, requirements: parseList(record.requirements), process: parseList(record.process), href: `/visa-services/${record.slug}` };
}

function blogDto(record: any) {
    return { ...record, sections: parseList(record.sections), href: `/blog/${record.slug}` };
}

function reviewDto(record: any) {
    return record;
}

function shouldSkipLocalSqliteOnVercel() {
    const databaseUrl = process.env.DATABASE_URL ?? "file:./dev.db";
    return Boolean(process.env.VERCEL) && databaseUrl.startsWith("file:");
}

function isReadableDatabaseFallbackError(error: unknown) {
    if (typeof error === "object" && error !== null && "code" in error && error.code === "P2021") {
        return true;
    }

    const message = error instanceof Error ? error.message : String(error);
    return message.includes("Unable to open the database file") || message.includes("Error code 14");
}
