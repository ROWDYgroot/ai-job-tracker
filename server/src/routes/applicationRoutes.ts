import { Router } from "express";
import { createApplication, deleteApplication, getApplication, updateApplication } from "../controllers/applicationController.js";

const router = Router();

router.post("/", createApplication);
router.get("/", getApplication);
router.put("/:id", updateApplication);
router.delete("/:id", deleteApplication);

export default router;