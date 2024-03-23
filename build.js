import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url)); // For ES Module support to get __dirname
const typesDir = path.join(__dirname, "./types");
const indexFile = path.join(__dirname, "index.d.ts");

let exportStatements = "";

const files = fs.readdirSync(typesDir);
files.forEach((file) => {
  if (file.endsWith(".ts") && file !== "index.ts") {
    const moduleName = path.basename(file, ".ts");
    exportStatements += `export * from './types/${moduleName}';\n`;
  }
});

fs.writeFileSync(indexFile, exportStatements);
