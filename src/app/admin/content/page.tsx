"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { Database, ImagePlus, Loader2, LogOut, Pencil, Plus, RefreshCcw, Save, Search, ShieldCheck, Trash2 } from "lucide-react";

type FieldType = "text" | "textarea" | "array" | "number" | "checkbox" | "select" | "image";

type Field = {
    name: string;
    label: string;
    type: FieldType;
    placeholder?: string;
    required?: boolean;
    options?: string[];
    wide?: boolean;
};

type CollectionConfig = {
    value: CollectionKey;
    label: string;
    description: string;
    template: Record<string, unknown>;
    fields: Field[];
};

type CollectionKey = "services" | "tour-packages" | "visa-services" | "blogs" | "reviews" | "leads";

type AdminRecord = {
    id?: string;
    slug?: string;
    title?: string;
    name?: string;
    status?: string;
    updatedAt?: string;
    createdAt?: string;
    [key: string]: unknown;
};

const statusOptions = ["published", "draft", "pending", "received", "new", "contacted", "closed"];

const collections: CollectionConfig[] = [
    {
        value: "services",
        label: "Services",
        description: "Main service cards and navigation level business offerings.",
        template: {
            status: "draft",
            slug: "",
            title: "",
            category: "general",
            summary: "",
            href: "",
            image: "",
            sortOrder: 0,
        },
        fields: [
            { name: "status", label: "Publishing status", type: "select", options: statusOptions, required: true },
            { name: "slug", label: "Service slug", type: "text", placeholder: "visa-services", required: true },
            { name: "title", label: "Service title", type: "text", required: true },
            { name: "category", label: "Category", type: "select", options: ["visa", "tour", "umrah", "student-consultancy", "general"], required: true },
            { name: "summary", label: "Service summary", type: "textarea", wide: true },
            { name: "href", label: "Website link", type: "text", placeholder: "/visa-services" },
            { name: "image", label: "Service image", type: "image", wide: true },
            { name: "sortOrder", label: "Sort order", type: "number" },
        ],
    },
    {
        value: "tour-packages",
        label: "Packages",
        description: "Tour, Umrah and student packages shown on the website.",
        template: {
            status: "draft",
            slug: "",
            category: "tour",
            title: "",
            subtitle: "",
            image: "",
            price: "",
            duration: "",
            audience: "",
            route: "",
            includes: [],
            itinerary: [],
            exclusions: [],
            process: [],
            featured: false,
            sortOrder: 0,
        },
        fields: [
            { name: "status", label: "Publishing status", type: "select", options: statusOptions, required: true },
            { name: "featured", label: "Featured package", type: "checkbox" },
            { name: "slug", label: "Page slug", type: "text", placeholder: "egypt-tour-package", required: true },
            { name: "category", label: "Category", type: "select", options: ["tour", "umrah", "student-consultancy"], required: true },
            { name: "title", label: "Package title", type: "text", required: true },
            { name: "subtitle", label: "Short description", type: "textarea", wide: true },
            { name: "image", label: "Package image", type: "image", wide: true },
            { name: "price", label: "Price", type: "text", placeholder: "Custom price" },
            { name: "duration", label: "Duration", type: "text", placeholder: "6 days" },
            { name: "audience", label: "Audience", type: "text", placeholder: "Families, students, groups" },
            { name: "route", label: "Route", type: "text", placeholder: "Dhaka to Cairo" },
            { name: "sortOrder", label: "Sort order", type: "number" },
            { name: "includes", label: "What is included", type: "array", wide: true },
            { name: "itinerary", label: "Itinerary", type: "array", wide: true },
            { name: "exclusions", label: "Exclusions", type: "array", wide: true },
            { name: "process", label: "Booking process", type: "array", wide: true },
        ],
    },
    {
        value: "visa-services",
        label: "Visa",
        description: "Country wise visa services, requirements and processing notes.",
        template: {
            status: "draft",
            slug: "",
            title: "",
            subtitle: "",
            image: "",
            duration: "",
            feeNote: "",
            requirements: [],
            process: [],
            sortOrder: 0,
        },
        fields: [
            { name: "status", label: "Publishing status", type: "select", options: statusOptions, required: true },
            { name: "slug", label: "Page slug", type: "text", placeholder: "egypt-visa", required: true },
            { name: "title", label: "Visa title", type: "text", required: true },
            { name: "subtitle", label: "Short description", type: "textarea", wide: true },
            { name: "image", label: "Visa image", type: "image", wide: true },
            { name: "duration", label: "Processing time", type: "text" },
            { name: "feeNote", label: "Fee note", type: "text" },
            { name: "sortOrder", label: "Sort order", type: "number" },
            { name: "requirements", label: "Requirements", type: "array", wide: true },
            { name: "process", label: "Process", type: "array", wide: true },
        ],
    },
    {
        value: "blogs",
        label: "Blogs",
        description: "Articles and travel guides for the public blog.",
        template: {
            status: "draft",
            slug: "",
            title: "",
            excerpt: "",
            category: "Travel Guide",
            date: new Date().toISOString().slice(0, 10),
            image: "",
            sections: [],
            content: "",
            featured: false,
        },
        fields: [
            { name: "status", label: "Publishing status", type: "select", options: statusOptions, required: true },
            { name: "featured", label: "Featured article", type: "checkbox" },
            { name: "slug", label: "Page slug", type: "text", placeholder: "egypt-travel-guide", required: true },
            { name: "title", label: "Article title", type: "text", required: true },
            { name: "excerpt", label: "Excerpt", type: "textarea", wide: true },
            { name: "category", label: "Category", type: "text" },
            { name: "date", label: "Publish date", type: "text", placeholder: "2026-06-06" },
            { name: "image", label: "Cover image", type: "image", wide: true },
            { name: "sections", label: "Section highlights", type: "array", wide: true },
            { name: "content", label: "Full article content", type: "textarea", wide: true },
        ],
    },
    {
        value: "reviews",
        label: "Reviews",
        description: "Client testimonials that can be published or kept pending.",
        template: {
            status: "pending",
            name: "",
            location: "",
            rating: 5,
            service: "",
            feedback: "",
            image: "",
            featured: false,
        },
        fields: [
            { name: "status", label: "Review status", type: "select", options: statusOptions, required: true },
            { name: "featured", label: "Featured review", type: "checkbox" },
            { name: "name", label: "Client name", type: "text", required: true },
            { name: "location", label: "Location", type: "text" },
            { name: "rating", label: "Rating", type: "number" },
            { name: "service", label: "Service used", type: "text" },
            { name: "image", label: "Client image", type: "image", wide: true },
            { name: "feedback", label: "Feedback", type: "textarea", wide: true },
        ],
    },
    {
        value: "leads",
        label: "Leads",
        description: "Contact form and inquiry leads from the website.",
        template: {
            status: "new",
            name: "",
            phone: "",
            email: "",
            service: "",
            preferredContact: "phone",
            source: "website",
            message: "",
        },
        fields: [
            { name: "status", label: "Lead status", type: "select", options: statusOptions, required: true },
            { name: "name", label: "Client name", type: "text", required: true },
            { name: "phone", label: "Phone", type: "text", required: true },
            { name: "email", label: "Email", type: "text" },
            { name: "service", label: "Service interest", type: "text" },
            { name: "preferredContact", label: "Preferred contact", type: "select", options: ["phone", "whatsapp", "email"] },
            { name: "source", label: "Lead source", type: "text" },
            { name: "message", label: "Message", type: "textarea", wide: true },
        ],
    },
];

const arrayFields = new Set(collections.flatMap((collection) => collection.fields.filter((field) => field.type === "array").map((field) => field.name)));

function createForm(config: CollectionConfig, record?: AdminRecord) {
    const source = record ?? config.template;

    return Object.fromEntries(
        config.fields.map((field) => {
            const value = source[field.name];
            if (field.type === "array") {
                return [field.name, Array.isArray(value) ? value.join("\n") : String(value ?? "")];
            }
            if (field.type === "checkbox") {
                return [field.name, Boolean(value)];
            }
            return [field.name, value ?? ""];
        }),
    ) as Record<string, unknown>;
}

function buildPayload(collection: CollectionKey, form: Record<string, unknown>, selected?: AdminRecord) {
    const payload: Record<string, unknown> = selected?.id ? { id: selected.id } : {};

    for (const [key, value] of Object.entries(form)) {
        if (arrayFields.has(key)) {
            payload[key] = String(value ?? "")
                .split("\n")
                .map((item) => item.trim())
                .filter(Boolean);
        } else {
            payload[key] = value;
        }
    }

    if (collection === "tour-packages" && typeof payload.slug === "string" && payload.slug) {
        payload.href = `/package/${payload.slug}`;
    }

    return payload;
}

export default function AdminContentPage() {
    const [token, setToken] = useState("");
    const [email, setEmail] = useState("admin@gmail.com");
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [collection, setCollection] = useState<CollectionKey>("tour-packages");
    const [records, setRecords] = useState<AdminRecord[]>([]);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [form, setForm] = useState<Record<string, unknown>>({});
    const [query, setQuery] = useState("");
    const [message, setMessage] = useState("Login to manage website data.");
    const [isBusy, setIsBusy] = useState(false);
    const [uploadingField, setUploadingField] = useState<string | null>(null);

    const config = useMemo(() => collections.find((item) => item.value === collection) ?? collections[0], [collection]);
    const selectedRecord = useMemo(() => records.find((item) => item.id === selectedId), [records, selectedId]);
    const visibleRecords = useMemo(() => {
        const term = query.trim().toLowerCase();
        if (!term) return records;
        return records.filter((record) => {
            const label = `${record.title ?? ""} ${record.name ?? ""} ${record.slug ?? ""} ${record.status ?? ""}`.toLowerCase();
            return label.includes(term);
        });
    }, [records, query]);

    useEffect(() => {
        const savedToken = window.localStorage.getItem("azhari_admin_token") ?? "";
        const savedEmail = window.localStorage.getItem("azhari_admin_email") ?? "admin@gmail.com";
        setToken(savedToken);
        setEmail(savedEmail);
        setIsAuthenticated(Boolean(savedToken));
        setForm(createForm(config));
    }, []);

    useEffect(() => {
        setSelectedId(null);
        setForm(createForm(config));
        if (token && isAuthenticated) {
            void loadRecords();
        }
    }, [collection, isAuthenticated]);

    function authHeaders(contentType = true) {
        const headers: Record<string, string> = { Authorization: `Bearer ${token}` };
        if (contentType) headers["Content-Type"] = "application/json";
        return headers;
    }

    function authHeadersFor(activeToken: string, contentType = true) {
        const headers: Record<string, string> = { Authorization: `Bearer ${activeToken}` };
        if (contentType) headers["Content-Type"] = "application/json";
        return headers;
    }

    async function loadRecords() {
        if (!token) {
            setMessage("Please login first.");
            return;
        }

        await loadRecordsWithToken(token);
    }

    async function loadRecordsWithToken(activeToken: string) {

        setIsBusy(true);
        setMessage("Loading records...");
        try {
            const response = await fetch(`/api/admin/content/${collection}?limit=100`, { headers: authHeadersFor(activeToken) });
            const payload = await response.json();

            if (!payload.success) {
                setMessage(payload.error?.message ?? "Could not load records.");
                return;
            }

            setRecords(payload.data);
            setMessage(`Loaded ${payload.data.length} ${config.label.toLowerCase()} record(s).`);
        } catch {
            setMessage("Could not connect to the admin API.");
        } finally {
            setIsBusy(false);
        }
    }

    async function login(event: FormEvent) {
        event.preventDefault();
        setIsBusy(true);
        setMessage("Checking login...");

        try {
            const response = await fetch("/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const payload = await response.json();

            if (!payload.success) {
                setMessage(payload.error?.message ?? "Login failed.");
                return;
            }

            setToken(payload.data.token);
            setIsAuthenticated(true);
            setPassword("");
            window.localStorage.setItem("azhari_admin_token", payload.data.token);
            window.localStorage.setItem("azhari_admin_email", email);
            setMessage("Logged in. Loading records...");
            await loadRecordsWithToken(payload.data.token);
        } catch {
            setMessage("Login failed. Please try again.");
        } finally {
            setIsBusy(false);
        }
    }

    function logout() {
        window.localStorage.removeItem("azhari_admin_token");
        setToken("");
        setIsAuthenticated(false);
        setRecords([]);
        setSelectedId(null);
        setForm(createForm(config));
        setMessage("Logged out.");
    }

    function startNew() {
        setSelectedId(null);
        setForm(createForm(config));
        setMessage(`Creating a new ${config.label.toLowerCase()} record.`);
    }

    function startEdit(record: AdminRecord) {
        setSelectedId(record.id ?? null);
        setForm(createForm(config, record));
        setMessage(`Editing ${String(record.title ?? record.name ?? record.slug ?? "record")}.`);
    }

    function updateField(field: Field, value: unknown) {
        setForm((current) => ({ ...current, [field.name]: field.type === "number" ? Number(value) : value }));
    }

    async function saveRecord(event: FormEvent) {
        event.preventDefault();
        if (!token) {
            setMessage("Admin token is required.");
            return;
        }

        setIsBusy(true);
        setMessage("Saving...");
        const payload = buildPayload(collection, form, selectedRecord);

        try {
            const response = await fetch(`/api/admin/content/${collection}`, {
                method: selectedRecord?.id ? "PUT" : "POST",
                headers: authHeaders(),
                body: JSON.stringify(payload),
            });
            const result = await response.json();

            if (!result.success) {
                setMessage(result.error?.message ?? "Save failed.");
                return;
            }

            setMessage("Saved successfully.");
            setSelectedId(result.data.id);
            await loadRecords();
        } catch {
            setMessage("Save failed. Please try again.");
        } finally {
            setIsBusy(false);
        }
    }

    async function deleteSelected() {
        if (!selectedRecord?.id || !token) return;
        const confirmed = window.confirm("Delete this record permanently?");
        if (!confirmed) return;

        setIsBusy(true);
        setMessage("Deleting...");
        try {
            const response = await fetch(`/api/admin/content/${collection}?id=${encodeURIComponent(selectedRecord.id)}`, {
                method: "DELETE",
                headers: authHeaders(),
            });
            const payload = await response.json();

            if (!payload.success || !payload.data?.deleted) {
                setMessage(payload.error?.message ?? "Delete failed.");
                return;
            }

            startNew();
            await loadRecords();
            setMessage("Record deleted.");
        } catch {
            setMessage("Delete failed. Please try again.");
        } finally {
            setIsBusy(false);
        }
    }

    async function uploadImage(field: Field, file?: File) {
        if (!file || !token) return;
        const previewUrl = URL.createObjectURL(file);
        setForm((current) => ({ ...current, [field.name]: previewUrl }));
        setUploadingField(field.name);
        setMessage("Uploading image...");

        const formData = new FormData();
        formData.append("file", file);
        formData.append("category", collection);
        formData.append("alt", String(form.title ?? form.name ?? ""));

        try {
            const response = await fetch("/api/admin/upload", {
                method: "POST",
                headers: authHeaders(false),
                body: formData,
            });
            const payload = await response.json();

            if (!payload.success) {
                setMessage(payload.error?.message ?? "Image upload failed.");
                return;
            }

            URL.revokeObjectURL(previewUrl);
            setForm((current) => ({ ...current, [field.name]: payload.data.url }));
            setMessage("Image uploaded.");
        } catch {
            setMessage("Image upload failed.");
        } finally {
            setUploadingField(null);
        }
    }

    if (!isAuthenticated) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#F7F8FC] px-4 py-20 text-[#06113C]">
                <section className="w-full max-w-md rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
                    <div className="mb-7">
                        <p className="inline-flex items-center gap-2 rounded-full bg-[#FFF1F5] px-4 py-2 text-sm font-black text-[#F7025B]">
                            <ShieldCheck size={16} />
                            Admin Login
                        </p>
                        <h1 className="mt-4 text-3xl font-black tracking-normal">Azhari CRM</h1>
                        <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">
                            Login to manage services, visa pages, packages, blogs, reviews, leads and uploaded images.
                        </p>
                    </div>

                    <form onSubmit={login} className="space-y-4">
                        <div>
                            <label className="text-sm font-black">Email</label>
                            <input
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                type="email"
                                className="mt-2 h-12 w-full rounded-[16px] border border-slate-200 px-4 text-sm font-semibold outline-none transition focus:border-[#F7025B]"
                                placeholder="admin@gmail.com"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-sm font-black">Password</label>
                            <input
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                type="password"
                                className="mt-2 h-12 w-full rounded-[16px] border border-slate-200 px-4 text-sm font-semibold outline-none transition focus:border-[#F7025B]"
                                placeholder="admin123456"
                                required
                            />
                        </div>

                        <button
                            disabled={isBusy}
                            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[16px] bg-gradient-to-r from-[#F7025B] to-[#FF7A1A] px-5 py-4 text-sm font-black text-white transition disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isBusy ? <Loader2 className="animate-spin" size={17} /> : <ShieldCheck size={17} />}
                            Login
                        </button>
                    </form>

                    <p className="mt-4 rounded-[16px] bg-[#F8FAFC] px-4 py-3 text-sm font-bold text-slate-600">{message}</p>
                </section>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#F7F8FC] px-4 py-24 text-[#06113C] sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <section className="rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-7">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <p className="inline-flex items-center gap-2 rounded-full bg-[#FFF1F5] px-4 py-2 text-sm font-black text-[#F7025B]">
                                <Database size={16} />
                                Azhari CRM
                            </p>
                            <h1 className="mt-4 text-3xl font-black tracking-normal sm:text-4xl">Real-time website control panel</h1>
                            <p className="mt-3 max-w-3xl text-sm font-semibold leading-7 text-slate-600">
                                Manage packages, visa services, blog posts, reviews, leads and uploaded media from forms connected to the database.
                            </p>
                        </div>

                        <div className="flex w-full flex-col gap-3 rounded-[18px] bg-[#F8FAFC] p-3 sm:flex-row sm:items-center sm:justify-between lg:max-w-xl">
                            <div>
                                <p className="text-xs font-black uppercase tracking-normal text-slate-400">Logged in as</p>
                                <p className="mt-1 text-sm font-black text-[#06113C]">{email}</p>
                            </div>
                            <button onClick={logout} className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-[#06113C] px-5 py-3 text-sm font-black text-white transition hover:bg-[#101C55]">
                                <LogOut size={16} />
                                Logout
                            </button>
                        </div>
                    </div>
                </section>

                <div className="mt-6 grid gap-6 lg:grid-cols-[330px_1fr]">
                    <aside className="rounded-[24px] bg-white p-4 shadow-sm ring-1 ring-slate-200 sm:p-5">
                        <div className="mb-4">
                            <h2 className="text-lg font-black">All content lists</h2>
                            <p className="mt-1 text-sm font-semibold leading-6 text-slate-500">
                                Choose a type, then click any item below to edit and update it.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            {collections.map((item) => (
                                <button
                                    key={item.value}
                                    onClick={() => setCollection(item.value)}
                                    className={`rounded-[14px] px-3 py-3 text-left text-sm font-black transition ${collection === item.value
                                        ? "bg-[#F7025B] text-white shadow-sm"
                                        : "bg-[#F8FAFC] text-slate-600 hover:bg-[#FFF1F5] hover:text-[#F7025B]"
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        <div className="mt-5 flex gap-2">
                            <button onClick={loadRecords} className="inline-flex flex-1 items-center justify-center gap-2 rounded-[14px] bg-[#06113C] px-4 py-3 text-sm font-black text-white">
                                {isBusy ? <Loader2 className="animate-spin" size={16} /> : <RefreshCcw size={16} />}
                                Refresh
                            </button>
                            <button onClick={startNew} className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-[#FFF1F5] px-4 py-3 text-sm font-black text-[#F7025B]">
                                <Plus size={16} />
                                New
                            </button>
                        </div>

                        <label className="mt-5 flex h-12 items-center gap-2 rounded-[14px] border border-slate-200 px-3">
                            <Search size={17} className="text-slate-400" />
                            <input
                                value={query}
                                onChange={(event) => setQuery(event.target.value)}
                                placeholder="Search records"
                                className="min-w-0 flex-1 bg-transparent text-sm font-semibold outline-none"
                            />
                        </label>

                        <div className="mt-5 max-h-[620px] space-y-3 overflow-auto pr-1">
                            <div className="flex items-center justify-between gap-3 px-1">
                                <p className="text-sm font-black">All {config.label}</p>
                                <span className="rounded-full bg-[#F8FAFC] px-3 py-1 text-xs font-black text-slate-500">{visibleRecords.length} shown</span>
                            </div>
                            {visibleRecords.map((record) => (
                                <button
                                    key={record.id}
                                    onClick={() => startEdit(record)}
                                    className={`w-full rounded-[16px] p-4 text-left ring-1 transition ${selectedId === record.id
                                        ? "bg-[#FFF1F5] ring-[#F7025B]/30"
                                        : "bg-white ring-slate-200 hover:bg-[#F8FAFC]"
                                        }`}
                                >
                                    <p className="truncate text-sm font-black">{String(record.title ?? record.name ?? record.slug ?? record.id ?? "Untitled record")}</p>
                                    <div className="mt-2 flex items-center justify-between gap-3 text-xs font-bold text-slate-500">
                                        <span className="truncate">{String(record.slug ?? record.service ?? "No slug")}</span>
                                        <span className="rounded-full bg-slate-100 px-2 py-1">{String(record.status ?? "draft")}</span>
                                    </div>
                                    <p className="mt-3 inline-flex items-center gap-1 text-xs font-black text-[#F7025B]">
                                        <Pencil size={13} />
                                        Click to edit
                                    </p>
                                </button>
                            ))}
                            {!visibleRecords.length && (
                                <div className="rounded-[16px] bg-[#F8FAFC] p-4 text-sm font-semibold text-slate-500">
                                    No records found.
                                </div>
                            )}
                        </div>
                    </aside>

                    <section className="rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-6">
                        <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <h2 className="text-2xl font-black tracking-normal">
                                    {selectedRecord ? `Update existing ${config.label} record` : `Create new ${config.label} record`}
                                </h2>
                                <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-slate-600">
                                    {selectedRecord
                                        ? "Change the fields below, upload images if needed, then press Update Record."
                                        : config.description}
                                </p>
                                <p className="mt-2 text-sm font-bold text-[#F7025B]">{message}</p>
                            </div>
                            <button
                                onClick={deleteSelected}
                                disabled={!selectedRecord || isBusy}
                                className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-red-50 px-4 py-3 text-sm font-black text-red-600 transition disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                <Trash2 size={16} />
                                Delete
                            </button>
                        </div>

                        <form onSubmit={saveRecord} className="mt-6">
                            <div className="grid gap-5 md:grid-cols-2">
                                {config.fields.map((field) => (
                                    <div key={field.name} className={field.wide ? "md:col-span-2" : ""}>
                                        {field.type === "checkbox" ? (
                                            <label className="flex min-h-12 items-center gap-3 rounded-[16px] border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm font-black">
                                                <input
                                                    type="checkbox"
                                                    checked={Boolean(form[field.name])}
                                                    onChange={(event) => updateField(field, event.target.checked)}
                                                    className="h-5 w-5 accent-[#F7025B]"
                                                />
                                                {field.label}
                                            </label>
                                        ) : (
                                            <>
                                                <label className="text-sm font-black text-[#06113C]">{field.label}</label>
                                                <FieldInput
                                                    field={field}
                                                    value={form[field.name]}
                                                    uploading={uploadingField === field.name}
                                                    onChange={(value) => updateField(field, value)}
                                                    onUpload={(file) => uploadImage(field, file)}
                                                />
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
                                <p className="text-sm font-semibold text-slate-500">
                                    Publish with status <span className="font-black text-[#F7025B]">published</span>. Draft and pending records stay private.
                                </p>
                                <button
                                    disabled={isBusy}
                                    className="inline-flex items-center justify-center gap-2 rounded-[16px] bg-gradient-to-r from-[#F7025B] to-[#FF7A1A] px-6 py-4 text-sm font-black text-white shadow-sm transition disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {isBusy ? <Loader2 className="animate-spin" size={17} /> : <Save size={17} />}
                                    {selectedRecord ? "Update Record" : "Create Record"}
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </main>
    );
}

function FieldInput({
    field,
    value,
    uploading,
    onChange,
    onUpload,
}: {
    field: Field;
    value: unknown;
    uploading: boolean;
    onChange: (value: unknown) => void;
    onUpload: (file?: File) => void;
}) {
    const baseClass = "mt-2 w-full rounded-[16px] border border-slate-200 bg-white px-4 py-3 text-sm font-semibold outline-none transition focus:border-[#F7025B]";

    if (field.type === "select") {
        return (
            <select value={String(value ?? "")} onChange={(event) => onChange(event.target.value)} className={baseClass} required={field.required}>
                <option value="">Select</option>
                {field.options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        );
    }

    if (field.type === "textarea" || field.type === "array") {
        return (
            <textarea
                value={String(value ?? "")}
                onChange={(event) => onChange(event.target.value)}
                placeholder={field.type === "array" ? "Write one item per line" : field.placeholder}
                required={field.required}
                rows={field.type === "array" ? 5 : 4}
                className={`${baseClass} resize-y leading-7`}
            />
        );
    }

    if (field.type === "image") {
        return (
            <div className="mt-2 rounded-[18px] border border-slate-200 bg-[#F8FAFC] p-3">
                {value ? (
                    <img src={String(value)} alt="" className="mb-3 h-44 w-full rounded-[16px] object-cover" />
                ) : (
                    <div className="mb-3 flex h-44 items-center justify-center rounded-[16px] bg-white text-sm font-bold text-slate-400">
                        No image selected
                    </div>
                )}
                <div className="grid gap-2 sm:grid-cols-[1fr_auto]">
                    <input
                        value={String(value ?? "")}
                        onChange={(event) => onChange(event.target.value)}
                        placeholder="/uploads/package/image.webp or https://..."
                        className="min-w-0 rounded-[14px] border border-slate-200 bg-white px-4 py-3 text-sm font-semibold outline-none focus:border-[#F7025B]"
                    />
                    <label className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-[14px] bg-[#06113C] px-4 py-3 text-sm font-black text-white">
                        {uploading ? <Loader2 className="animate-spin" size={16} /> : <ImagePlus size={16} />}
                        Upload
                        <input type="file" accept="image/png,image/jpeg,image/webp,image/gif" className="hidden" onChange={(event) => onUpload(event.target.files?.[0])} />
                    </label>
                </div>
            </div>
        );
    }

    return (
        <input
            value={String(value ?? "")}
            onChange={(event) => onChange(event.target.value)}
            placeholder={field.placeholder}
            required={field.required}
            type={field.type === "number" ? "number" : "text"}
            className={baseClass}
        />
    );
}
