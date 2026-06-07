import { ok } from "../../lib/api";
import {
    articles,
    contactInfo,
    gallery,
    reviews,
    services,
    studentConsultancy,
    tourPackages,
    umrah,
    visas,
} from "../../data/apiCatalog";
import { listCrm } from "../../lib/crmRepository";

export async function GET() {
    const dynamicPackages = await listCrm("tour-packages");
    const dynamicVisas = await listCrm("visa-services");
    const dynamicBlogs = await listCrm("blogs");
    const dynamicReviews = await listCrm("reviews");

    return ok({
        services,
        tourPackages: [...dynamicPackages, ...tourPackages],
        visas: [...dynamicVisas, ...visas],
        blogs: [...dynamicBlogs, ...articles],
        studentConsultancy,
        umrah,
        reviews: [...dynamicReviews, ...reviews],
        gallery: gallery.slice(0, 12),
        contactInfo,
        endpoints: {
            services: "/api/services",
            tourPackages: "/api/tour-packages",
            tourPackageDetails: "/api/tour-packages/:slug",
            visaServices: "/api/visa-services",
            visaServiceDetails: "/api/visa-services/:slug",
            blogs: "/api/blogs",
            blogDetails: "/api/blogs/:slug",
            studentConsultancy: "/api/student-consultancy",
            umrah: "/api/umrah",
            reviews: "/api/reviews",
            gallery: "/api/gallery",
            faqs: "/api/faqs",
            contactInfo: "/api/contact-info",
            contactSubmit: "POST /api/contact",
            reviewSubmit: "POST /api/reviews",
        },
    });
}
