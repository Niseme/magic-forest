import express from "express";
import {
  createFavoriteFairyTale,
  deleteFavoriteFairyTaleById,
  getAllFavoriteFairyTale,
  getCharacterByFairyTale,
  getFavoriteFairyTaleById,
  getMostPopularFairyTale,
  updateFavoriteFairyTale,
} from "../controllers/favoriteFairyTaleController.js";

const router = express.Router();

router.post("/create", createFavoriteFairyTale);

router.get("/get", getAllFavoriteFairyTale);

router.get("/get/popular", getMostPopularFairyTale);

router.get("/get/:id", getFavoriteFairyTaleById);

router.delete("/delete/:id", deleteFavoriteFairyTaleById);

router.put("/update/:id", updateFavoriteFairyTale);

router.get("/get/fairyTale/:fairyTale", getCharacterByFairyTale);

export default router;