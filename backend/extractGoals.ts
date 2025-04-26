import * as fs from "fs";
import { LlamaParseReader } from "llamaindex";
import * as dotenv from "dotenv";
dotenv.config();

// Assuming you have a markdown file after parsing the IEP
const IEP_FILE_PATH = "./backend/sampleIEP.md";

// Function to extract the annual goal section
export async function extractGoals(markdown: string): Promise<string | null> {
  const goalSectionRegex = /# Annual Goal\s+([^\n]+)/g;
  const match = goalSectionRegex.exec(markdown);
  return match ? match[1] : null; // Return the first matched goal or null if not found
}

// Read the markdown file
fs.readFile(IEP_FILE_PATH, 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading markdown file:", err);
    return;
  }

  // Extract the Annual Goal
  const annualGoal = extractGoals(data);
  
  if (annualGoal) {
    console.log("Extracted Annual Goal:", annualGoal);
    // Now you can pass the annualGoal to your activity generation function
  } else {
    console.log("No Annual Goal section found.");
  }
});
