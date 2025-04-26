import * as fs from "fs";
import fetch from "node-fetch";
import * as dotenv from "dotenv";
import { LlamaParseReader } from "llamaindex";
dotenv.config();

// const LLAMAPARSE_API = "https://api.llamaindex.ai/api/parsing";
const API_KEY = process.env.LLAMA_CLOUD_API_KEY;

// Create a LlamaParseReader instance
const reader = new LlamaParseReader({ 
  resultType: "markdown",
  apiKey: API_KEY
 });

export async function parseIEP(filePath: string) {
  try {
    // Parse the document using LlamaParseReader
    const documents = await reader.loadData(filePath);

    // Assuming 'documents' is an array of Document objects. We extract the content.
    const content = documents.map(doc => doc.text).join("\n\n"); // Join the text content from all documents

    // Write the extracted text to a file
    fs.writeFileSync("backend/sampleIEP.md", content);
    console.log("IEP parsed and saved to sampleIEP.md");
  } catch (error) {
    console.error("Error parsing IEP:", error);
  }
}

//parseIEP("backend/IEP_Functional_reading.pdf"); // Replace with actual PDF filename