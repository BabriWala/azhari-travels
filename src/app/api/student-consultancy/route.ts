import { ok } from "../../lib/api";
import { studentConsultancy } from "../../data/apiCatalog";
import { listCrm } from "../../lib/crmRepository";

export async function GET() {
    const packages = await listCrm("tour-packages");
    const dynamicPackages = packages.filter((item) => String(item.category ?? "") === "student-consultancy");

    return ok({
        ...studentConsultancy,
        packages: dynamicPackages.length ? dynamicPackages : studentConsultancy.packages,
    });
}
