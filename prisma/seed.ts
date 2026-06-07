import { PrismaClient } from "@prisma/client";
import { articles, reviews, services, tourPackages, visas } from "../src/app/data/apiCatalog";

const prisma = new PrismaClient();

function jsonList(value: unknown) {
    return JSON.stringify(Array.isArray(value) ? value : []);
}

async function main() {
    for (const service of services) {
        await prisma.service.upsert({
            where: { slug: service.slug },
            update: {
                title: service.title,
                category: service.category,
                summary: service.summary,
                href: service.href,
                status: "published",
            },
            create: {
                slug: service.slug,
                title: service.title,
                category: service.category,
                summary: service.summary,
                href: service.href,
                status: "published",
            },
        });
    }

    for (const item of tourPackages) {
        await prisma.tourPackage.upsert({
            where: { slug: item.slug },
            update: {
                title: item.title,
                subtitle: item.subtitle,
                category: item.category,
                image: item.image,
                price: item.price,
                duration: item.duration,
                audience: item.audience,
                route: item.route,
                href: item.href,
                includes: jsonList(item.includes),
                itinerary: jsonList(item.itinerary),
                exclusions: jsonList(item.exclusions),
                process: jsonList(item.process),
                featured: item.featured,
                status: "published",
            },
            create: {
                slug: item.slug,
                title: item.title,
                subtitle: item.subtitle,
                category: item.category,
                image: item.image,
                price: item.price,
                duration: item.duration,
                audience: item.audience,
                route: item.route,
                href: item.href,
                includes: jsonList(item.includes),
                itinerary: jsonList(item.itinerary),
                exclusions: jsonList(item.exclusions),
                process: jsonList(item.process),
                featured: item.featured,
                status: "published",
            },
        });
    }

    for (const visa of visas) {
        await prisma.visaService.upsert({
            where: { slug: visa.slug },
            update: {
                title: visa.title,
                subtitle: visa.subtitle,
                image: visa.image,
                duration: visa.duration,
                feeNote: visa.feeNote,
                requirements: jsonList(visa.requirements),
                process: jsonList(visa.process),
                status: "published",
            },
            create: {
                slug: visa.slug,
                title: visa.title,
                subtitle: visa.subtitle,
                image: visa.image,
                duration: visa.duration,
                feeNote: visa.feeNote,
                requirements: jsonList(visa.requirements),
                process: jsonList(visa.process),
                status: "published",
            },
        });
    }

    for (const article of articles) {
        const content = "content" in article ? String(article.content ?? article.excerpt) : article.excerpt;

        await prisma.blogPost.upsert({
            where: { slug: article.slug },
            update: {
                title: article.title,
                excerpt: article.excerpt,
                category: article.category ?? "Travel Guide",
                date: article.date ?? new Date().toISOString().slice(0, 10),
                image: article.image,
                sections: jsonList(article.sections),
                content,
                status: "published",
            },
            create: {
                slug: article.slug,
                title: article.title,
                excerpt: article.excerpt,
                category: article.category ?? "Travel Guide",
                date: article.date ?? new Date().toISOString().slice(0, 10),
                image: article.image,
                sections: jsonList(article.sections),
                content,
                status: "published",
            },
        });
    }

    for (const review of reviews) {
        await prisma.review.upsert({
            where: { id: review.id },
            update: {
                name: review.name,
                location: review.location,
                rating: review.rating,
                service: review.service,
                feedback: review.feedback,
                image: review.image,
                featured: review.featured,
                status: "published",
            },
            create: {
                id: review.id,
                name: review.name,
                location: review.location,
                rating: review.rating,
                service: review.service,
                feedback: review.feedback,
                image: review.image,
                featured: review.featured,
                status: "published",
            },
        });
    }

    console.log("Seeded Azhari CRM content.");
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
