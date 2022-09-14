import express from "express";
import {
  createFairy,
  deleteFairyById,
  getAllFairys,
  getFairyById,
  updateFairy,
} from "../controllers/FairyController.js";


const router = express.Router();

router.post("/create", createFairy);

router.get("/get", getAllFairys);

router.get("/get/:id", getFairyById);

router.delete("/delete/:id", deleteFairyById);

router.put("/update/:id", updateFairy);

export default router;