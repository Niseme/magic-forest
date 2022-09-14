import express from "express";
import {
  createPrincess,
  deletePrincessById,
  getAllPrincesss,
  getPrincessById,
  updatePrincess,
} from "../controllers/PrincessController.js";


const router = express.Router();

router.post("/create", createPrincess);

router.get("/get", getAllPrincesss);

router.get("/get/:id", getPrincessById);

router.delete("/delete/:id", deletePrincessById);

router.put("/update/:id", updatePrincess);

export default router;