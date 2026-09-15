import { Request, Response } from "express";
import Application from "../models/Application.js";

export const createApplication = async (req: Request, res: Response) => {
  try {
    const application = await Application.create(req.body);

    return res.status(201).json({
      message: "Application created successfully",
      application,
    });
  } catch (error) {
    console.error("Create application error:", error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};

export const getApplication = async (req: Request, res: Response) => {
  try {
    const { userId } = req.query;

    const applications = await Application.find({ userId });
    // console.log("applications", applications);

    return res.status(200).json({
      message: "Below is the list",
      applications,
    });
  } catch (error) {
    console.log("Failed due to", error);
    return res.status(500).json({
      message: "Internal Sever Error",
    });
  }
};

export const updateApplication = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const application = await Application.findByIdAndUpdate(id, req.body, {new: true});

    if (!application) {
      return res.status(404).json({
        message: "Application Not found!!",
      });
    }

    return res.status(200).json({
      message: "Application Updated Successfully!!",
      application
    });
  } catch (error) {
    console.log("update error", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const deleteApplication = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const application = await Application.findByIdAndDelete(id);

    if (!application) {
      return res.status(404).json({
        message: "Application not found",
      });
    }

    return res.status(200).json({
      message: "Application deleted successfully",
    });
  } catch (error) {
    console.error("Delete application error:", error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};
