import express from "express";
import {
  createDwarf,
  deleteDwarfById,
  getAllDwarfs,
  getDwarfById,
  updateDwarf,
} from "../controllers/dwarfController.js";


const router = express.Router();

router.post("/create", createDwarf);

router.get("/get", getAllDwarfs);

router.get("/get/:id", getDwarfById);

router.delete("/delete/:id", deleteDwarfById);

router.put("/update/:id", updateDwarf);

export default router;