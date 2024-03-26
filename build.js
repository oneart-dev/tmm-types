import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url)); // For ES Module support to get __dirname
const srcDir = path.join(__dirname, "./src");
const indexFile = path.join(__dirname, "/src/index.ts");

const dirsInclude = ["types", "locales"];
let exportStatements = `
/* 
 * This file is generated automatically. 
 * Do not modify it manually.
 * Build by build.js script.
 * */\n\n`;

for (const dir of dirsInclude) {
  exportStatements += `// ${dir}\n`;
  // read all forlders in src folder
  const files = fs.readdirSync(path.join(srcDir, dir));
  files.forEach((file) => {
    if (file.endsWith(".ts")) {
      const moduleName = path.basename(file, ".ts");
      exportStatements += `export * from './${dir}/${moduleName}';\n`;
    }
  });

  exportStatements += "\n\n";
}

// // read all forlders in src folder
// const files = fs.readdirSync(typesDir);
// files.forEach((file) => {
//   if (file.endsWith(".ts") && file !== "index.ts") {
//     const moduleName = path.basename(file, ".ts");
//     exportStatements += `export * from './types/${moduleName}';\n`;
//   }
// });

fs.writeFileSync(indexFile, exportStatements);
