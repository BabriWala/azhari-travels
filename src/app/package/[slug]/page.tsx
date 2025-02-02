import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import UEContent from './UEContent';
import UContent from './UContent';
import AUContent from './AUContent';
import Econtent from './Econtent';



const tourPackages = [
    {
        slug: "student-package",
        content:
            <AUContent></AUContent>
        ,
    },
    {
        slug: "umrah-and-egypt-package",
        content:
            <UEContent></UEContent>,
    },
    {
        slug: "umrah-package",
        content:
            <UContent></UContent>
        ,
    },
    {
        slug: "egypt-tour",
        content:
            <Econtent></Econtent>,
    },

]



// This function tells Next.js which package slugs to pre-render at build time.
export async function generateStaticParams() {
    return tourPackages.map((pkg) => ({
        slug: pkg.slug,
    }));
}

// The component expects a Promise-wrapped params object since it is async.
export default async function PackageDetails({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    // Await the params to obtain the slug.
    const { slug } = await params;
    console.log("Package slug:", slug);
    const TOURPACKAGE = tourPackages.find((it) => it.slug === slug);
    if (!TOURPACKAGE) {
        return <p>PACKAGE post not found</p>; // Handle 404 or missing content here
    }
    return (
        <div className="bg-gradient-secondary">
            <div className="container mx-auto py-[100px] lg:px-8">
                {TOURPACKAGE.content}
            </div>
        </div>
    );
}