// runPipeline.ts
import * as fs from "fs";
import { parseIEP } from "./parseIEP";
import { extractGoals } from "./extractGoals";

async function run() {
  await parseIEP("backend/IEP_Functional_reading.pdf");
  //await extractGoals("backend/sampleIEP.md");

  const mdPath = "backend/sampleIEP.md";
    if (!fs.existsSync(mdPath)) {
        console.error("Markdown file does not exist:", mdPath);
        return;
    }
  const markdown = fs.readFileSync(mdPath, "utf-8");
  const goal = await extractGoals(markdown); // <-- await this
  console.log("✅ Extracted Annual Goal:", goal);
}

run();
