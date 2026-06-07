import { PrismaClient } from "@prisma/client";

const databaseUrl = process.env.DATABASE_URL ?? "file:./dev.db";
process.env.DATABASE_URL = databaseUrl;

const globalForPrisma = globalThis as unknown as {
    prisma?: PrismaClient;
};

export const prisma =
    process.env.DATABASE_URL && globalForPrisma.prisma
        ? globalForPrisma.prisma
        :
    new PrismaClient({
        log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
        datasources: {
            db: {
                url: databaseUrl,
            },
        },
    });

if (process.env.NODE_ENV !== "production" && process.env.DATABASE_URL) {
    globalForPrisma.prisma = prisma;
}
