import express from "express";
import {
  getVisits,
  getVisitsByPatientId,
  getVisitById,
  createVisit,
  updateVisit,
  deleteVisit,
} from "../controllers/visitController.js";

const router = express.Router();

router.get("/", getVisits);
router.get("/patient/:id", getVisitsByPatientId);
router.get("/:id", getVisitById);

router.post("/", createVisit);
router.put("/:id", updateVisit);
router.delete("/:id", deleteVisit);

export default router;