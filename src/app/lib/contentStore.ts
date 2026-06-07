export type AdminCollection =
    | "services"
    | "tour-packages"
    | "visa-services"
    | "blogs"
    | "reviews"
    | "leads";

export type AdminRecord = {
    id: string;
    slug?: string;
    title?: string;
    name?: string;
    status?: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    [key: string]: unknown;
};

const adminCollections: AdminCollection[] = [
    "services",
    "tour-packages",
    "visa-services",
    "blogs",
    "reviews",
    "leads",
];

export function isAdminCollection(value: string): value is AdminCollection {
    return adminCollections.includes(value as AdminCollection);
}
