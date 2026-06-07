import { readFileSync } from "node:fs";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { DatabaseSync } from "node:sqlite";

const databaseUrl = process.env.DATABASE_URL ?? "file:./dev.db";
const relativePath = databaseUrl.startsWith("file:") ? databaseUrl.slice(5) : databaseUrl;
const databasePath = join(process.cwd(), "prisma", relativePath.replace(/^\.\//, ""));
const migrationPath = join(process.cwd(), "prisma", "migrations", "000001_init", "migration.sql");
const migrationSql = readFileSync(migrationPath, "utf8");

mkdirSync(dirname(databasePath), { recursive: true });

const db = new DatabaseSync(databasePath);
db.exec("PRAGMA foreign_keys = ON;");
db.exec(migrationSql);
db.exec(`
    CREATE TABLE IF NOT EXISTS "_prisma_migrations" (
        "id" TEXT NOT NULL PRIMARY KEY,
        "checksum" TEXT NOT NULL,
        "finished_at" DATETIME,
        "migration_name" TEXT NOT NULL,
        "logs" TEXT,
        "rolled_back_at" DATETIME,
        "started_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "applied_steps_count" INTEGER NOT NULL DEFAULT 0
    );
`);
db.close();

console.log(`SQLite database initialized at ${databasePath}`);
