import mongoose from "mongoose";

const FavoriteFairyTaleSchema = new mongoose.Schema({
  place: {
    type: String,
    required: true,
    unique: true,
  },
  isIndoor: {
    type: Boolean,
    required: true,
  },
  numberOfEvel: {
    type: Number,
    min: 0,
    max: 400,
    required: true,
  },
  favoriteRating: {
    type: Number,
    min: 0,
    max: 10,
    required: true,
  },
  characters: [{ entity: String, id: String }],
});

export default mongoose.model("FavoriteFairyTale", FavoriteFairyTaleSchema);