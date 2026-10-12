// import "dotenv/config";
// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export const analyzeResumeWithAI = async (
//   resumeText: string,
//   jobDescription: string
// ) => {
//   const response = await openai.responses.create({
//     model: "gpt-4o",
//     input: `
// Resume:
// ${resumeText}

// Job Description:
// ${jobDescription}

// Analyze the resume against the job description.
// `,
//   });

//   return response.output_text;
// };

import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";

interface ResumeAnalysis {
  score: number;
  matchedSkills: string[];
  missingSkills: string[];
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
}

const genAI = new GoogleGenerativeAI(
  process.env.GOOGLE_API_KEY as string
);

const model = genAI.getGenerativeModel({
  model: "gemini-3.8-flash",
});

export const analyzeResumeWithAI = async (
  resumeText: string,
  jobDescription: string
): Promise<ResumeAnalysis> => {
  const prompt = `
Analyze the resume against the job description.

Resume:
${resumeText}

Job Description:
${jobDescription}

Return ONLY valid JSON.
Do not include markdown.
Do not include \`\`\`json.

Use exactly this structure:

{
  "score": 85,
  "matchedSkills": [],
  "missingSkills": [],
  "strengths": [],
  "weaknesses": [],
  "suggestions": []
}

Rules:
- score must be a number from 0 to 100
- every other field must be an array of strings
`;

  const result = await model.generateContent(prompt);

  const text = result.response.text();

  console.log("Raw Gemini response:", text);

  const analysis: ResumeAnalysis = JSON.parse(text);

  return analysis;
};