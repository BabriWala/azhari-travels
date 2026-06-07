import { NextRequest } from "next/server";
import { fail, ok, readJson, requiredString } from "../../lib/api";
import { contactInfo } from "../../data/apiCatalog";
import { saveCrm } from "../../lib/crmRepository";

export async function POST(request: NextRequest) {
    const body = await readJson(request);

    if (!body || !requiredString(body.name) || !requiredString(body.phone) || !requiredString(body.message)) {
        return fail("Name, phone and message are required", 422, {
            required: ["name", "phone", "message"],
            optional: ["email", "service", "source", "preferredContact"],
        });
    }

    const lead = await saveCrm("leads", {
        id: `lead_${Date.now()}`,
        status: "received",
        name: String(body.name).trim(),
        phone: String(body.phone).trim(),
        message: String(body.message).trim(),
        email: requiredString(body.email) ? String(body.email).trim() : null,
        service: requiredString(body.service) ? String(body.service).trim() : "General inquiry",
        source: requiredString(body.source) ? String(body.source).trim() : "website",
        preferredContact: requiredString(body.preferredContact) ? String(body.preferredContact).trim() : "phone",
        receivedAt: new Date().toISOString(),
    });

    return ok(
        {
            lead,
            nextStep: "Azhari Travels will contact the client using the provided phone number.",
            contact: contactInfo,
        },
        { status: 202 },
    );
}
