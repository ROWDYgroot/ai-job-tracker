import { Router } from "express";
import { analyzeResume } from "../controllers/resumeController.js";
import multer from "multer";

const router = Router();

const upload = multer({
    storage: multer.memoryStorage(),
})

router.post(
    "/analyze", 
    upload.single("resume"), 
    analyzeResume
);

export default router;