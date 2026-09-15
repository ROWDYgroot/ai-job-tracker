import { Request, Response } from "express";
import { PDFParse } from "pdf-parse";
import { analyzeResumeWithAI } from "../services/aiService.js";

export const analyzeResume = async (req: Request, res: Response) => {
  try {
    const file = req.file;
    const jobDescription = req.body.jobDescription;
    console.log("file name", file);
    console.log("jobdescription", jobDescription);

    if (!file || !jobDescription) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    const parse = new PDFParse({
        data: file.buffer,
    })

    const result = await parse.getText();
    const resumeText = result.text;
    // console.log("parse", resumeText)
    console.log("Resume text extracted successfully");

    //call openAi service
    const aiResult = await analyzeResumeWithAI(
      resumeText,
      jobDescription
    )

    console.log("AI result:", aiResult);

    return res.status(200).json({
      message: "Resume analyzed successfully",
      analysis: aiResult, 
    })

    // return res.status(200).json({
    //   message: "Resume received successfully!!",
    //   resumeText,
    //   jobDescription
    // });
  } catch (error) {
    console.log("File upload error", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
