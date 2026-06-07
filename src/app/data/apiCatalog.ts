import { blogPosts } from "./marketingPages";
import { visaRequirements } from "./visaRequirements";

export const tourPackages = [
    {
        id: "pkg_student_azhar",
        slug: "student-package",
        category: "student-consultancy",
        title: "Al-Azhar Student Package",
        subtitle: "Complete admission, visa, ticket and settlement support for students preparing for Egypt.",
        image: "/gallery/Gallery_06.webp",
        price: "৳1,75,000",
        duration: "Admission focused",
        audience: "Students & guardians",
        route: "Bangladesh to Cairo",
        href: "/package/student-package",
        includes: [
            "Admission and offer letter support",
            "Visa file guidance",
            "Air ticket support",
            "Document checklist and processing guidance",
            "Pre-departure consultation",
            "Arrival and settlement support",
        ],
        itinerary: [
            "Initial eligibility and document review",
            "Admission file preparation",
            "Visa and travel planning",
            "Final briefing before departure",
        ],
        exclusions: ["Personal expenses", "Embassy or third-party fee changes", "Any service not confirmed in writing"],
        process: ["Consultation", "Document review", "Application support", "Travel preparation"],
        featured: true,
    },
    {
        id: "pkg_umrah_egypt",
        slug: "umrah-and-egypt-package",
        category: "umrah",
        title: "Umrah & Egypt Package",
        subtitle: "A combined spiritual and heritage journey with organized travel, hotel and itinerary support.",
        image: "/home/visa-services/saudi_arabia.png",
        price: "Custom price",
        duration: "Custom itinerary",
        audience: "Families & groups",
        route: "Makkah, Madinah and Cairo",
        href: "/package/umrah-and-egypt-package",
        includes: [
            "Return air ticket support",
            "Umrah visa guidance",
            "Hotel arrangement support",
            "Transport planning",
            "Makkah and Madinah ziyarat guidance",
            "Egypt tour planning",
        ],
        itinerary: [
            "Departure from Dhaka and arrival in Saudi Arabia",
            "Makkah stay with Umrah and ziyarat support",
            "Madinah stay with guided ziyarat plan",
            "Egypt travel plan with Cairo heritage spots",
            "Return travel coordination",
        ],
        exclusions: ["Personal shopping", "Optional tours", "Any extra hotel night outside package confirmation"],
        process: ["Date selection", "Visa and ticket support", "Hotel planning", "Travel briefing"],
        featured: true,
    },
    {
        id: "pkg_umrah_premium",
        slug: "umrah-package",
        category: "umrah",
        title: "Umrah Premium Package",
        subtitle: "A focused Umrah journey with flight, visa, hotel, transport and ziyarat support.",
        image: "/home/visa-services/saudi_arabia.png",
        price: "৳1,30,000/-",
        duration: "Package based",
        audience: "Umrah travelers",
        route: "Makkah and Madinah",
        href: "/package/umrah-package",
        includes: [
            "Return air ticket support",
            "Visa guidance",
            "Transport planning",
            "Makkah and Madinah hotel support",
            "Ziyarat planning",
            "Travel briefing and communication support",
        ],
        itinerary: [
            "Travel preparation and final document check",
            "Arrival and Makkah hotel transfer",
            "Umrah and Makkah ziyarat plan",
            "Madinah stay and ziyarat plan",
            "Return travel coordination",
        ],
        exclusions: ["Personal expenses", "Optional ziyarat outside confirmed plan", "Extra food or hotel upgrades"],
        process: ["Package selection", "Document preparation", "Booking support", "Departure briefing"],
        featured: true,
    },
    {
        id: "pkg_egypt_tour",
        slug: "egypt-tour",
        category: "tour",
        title: "Egypt Tour Package",
        subtitle: "A heritage travel experience covering Cairo, Islamic sites, Nile moments and historical places.",
        image: "/home/visa-services/egypt.png",
        price: "৳1,50,000/-",
        duration: "6 days",
        audience: "Families & explorers",
        route: "Cairo and Alexandria",
        href: "/package/egypt-tour",
        includes: [
            "Return air ticket support",
            "Visa support",
            "Hotel arrangement support",
            "Transport planning",
            "Local food planning",
            "Cairo and Alexandria tour coordination",
        ],
        itinerary: [
            "Day 1: Dhaka to Cairo arrival",
            "Day 2: Pyramids, Egyptian Museum, Saqqara and Nile experience",
            "Day 3: Alexandria tour and heritage spots",
            "Day 4: Salahuddin Citadel, Muhammad Ali Mosque and Islamic Cairo",
            "Day 5: Tur mountain and Sahara desert experience",
            "Day 6: Return travel",
        ],
        exclusions: ["Cairo airport visa sticker fee", "Personal expenses", "Any optional tour outside the confirmed itinerary"],
        process: ["Travel date confirmation", "Visa and ticket support", "Hotel and route planning", "Final travel briefing"],
        featured: false,
    },
];

export const visas = visaRequirements.map(({ icon: _icon, ...visa }) => ({
    ...visa,
    id: `visa_${visa.slug}`,
    href: `/visa-services/${visa.slug}`,
    category: "visa",
}));

export const articles = [
    {
        slug: "Al-Azhar-Introduction",
        title: "A clear checklist before applying for Egypt student admission",
        excerpt: "Egypt admission becomes easier when the student and family understand the document sequence before starting the file.",
        sections: [
            "Start with document clarity",
            "Keep timelines realistic",
            "Use guided support",
        ],
    },
    {
        slug: "Introduction-To-Egypt",
        title: "Documents families should prepare before visa processing",
        excerpt: "Visa work is smoother when the file is complete, consistent and reviewed before submission.",
        sections: [
            "Core personal documents",
            "Purpose-based support",
            "Review before submission",
        ],
    },
    {
        slug: "Al-Azhar-Syllabus",
        title: "How to plan a calm and organized Umrah journey",
        excerpt: "A well-planned Umrah journey gives travelers space to focus on worship instead of logistics.",
        sections: [
            "Confirm the travel basics",
            "Understand what is included",
            "Travel with a clear support line",
        ],
    },
].map((article) => ({
    ...article,
    id: `blog_${article.slug}`,
    href: `/blog/${article.slug}`,
    ...blogPosts.find((post) => post.slug === article.slug),
}));

export const services = [
    {
        id: "service_visa",
        slug: "visa-services",
        title: "Visa Services",
        category: "visa",
        href: "/visa-services",
        summary: "Country-specific visa requirements, document support and application guidance.",
    },
    {
        id: "service_tour",
        slug: "tour-packages",
        title: "Tour Packages",
        category: "tour",
        href: "/tour-packages",
        summary: "Organized travel packages for Egypt, Umrah and custom family travel.",
    },
    {
        id: "service_student",
        slug: "student-consultancy",
        title: "Student Consultancy",
        category: "student-consultancy",
        href: "/package/student-package",
        summary: "Admission, document, visa and travel support for students preparing for Egypt.",
    },
    {
        id: "service_umrah",
        slug: "umrah",
        title: "Umrah Services",
        category: "umrah",
        href: "/package/umrah-package",
        summary: "Umrah package planning with visa, ticket, hotel, transport and ziyarat guidance.",
    },
];

export const studentConsultancy = {
    id: "student_consultancy",
    title: "Student Consultancy",
    href: "/package/student-package",
    destination: "Egypt",
    services: [
        "Admission roadmap",
        "Document checklist",
        "Visa support",
        "Air ticket support",
        "Pre-departure briefing",
    ],
    packages: tourPackages.filter((item) => item.category === "student-consultancy"),
};

export const umrah = {
    id: "umrah_services",
    title: "Umrah Services",
    href: "/package/umrah-package",
    services: [
        "Visa guidance",
        "Ticket support",
        "Hotel planning",
        "Transport planning",
        "Ziyarat guidance",
    ],
    packages: tourPackages.filter((item) => item.category === "umrah"),
};

export const reviews = [
    {
        id: "review_001",
        name: "Mahmud Hasan",
        location: "Dhaka",
        rating: 5,
        service: "Umrah Package",
        feedback: "The process was clear and the team stayed responsive from document preparation to travel.",
        image: "/client-gallery/client-gallery-01.webp",
        date: "2026-05-22",
        featured: true,
    },
    {
        id: "review_002",
        name: "Abdullah Al Mamun",
        location: "Chattogram",
        rating: 5,
        service: "Student Consultancy",
        feedback: "They explained the admission and visa steps in a way our family could follow easily.",
        image: "/client-gallery/client-gallery-02.webp",
        date: "2026-05-14",
        featured: true,
    },
    {
        id: "review_003",
        name: "Nusrat Jahan",
        location: "Sylhet",
        rating: 5,
        service: "Egypt Tour",
        feedback: "Good communication, organized planning and helpful guidance before the trip.",
        image: "/client-gallery/client-gallery-03.webp",
        date: "2026-04-30",
        featured: false,
    },
];

export const gallery = Array.from({ length: 23 }, (_, index) => {
    const id = String(index + 1).padStart(2, "0");
    return {
        id: `gallery_${id}`,
        image: `/client-gallery/client-gallery-${id}.webp`,
        alt: `Azhari Travels client gallery ${index + 1}`,
        category: "clients",
    };
});

export const contactInfo = {
    phone: "+88013 1818 5954",
    email: "azharitravels.info@gmail.com",
    address: "2/A - R#7 - Nabinagar Housing - Mohammadpur - Dhaka",
    whatsapp: "https://wa.me/8801318185954",
    socials: {
        facebook: "https://www.facebook.com/azharitravels2.0",
        instagram: "https://www.instagram.com/azhari_travels_and_tours/",
        youtube: "https://www.youtube.com/@azhari_travels",
        x: "https://x.com/azhari__travels",
    },
};
