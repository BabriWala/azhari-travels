import { ok } from "../../lib/api";
import { contactInfo } from "../../data/apiCatalog";

export function GET() {
    return ok(contactInfo);
}
