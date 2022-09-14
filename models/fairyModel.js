import mongoose from "mongoose";

const FairySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  isGood: {
    type: Boolean,
    required: true,
  },
  canFly: {
    type: Boolean,
  },
  isSenior: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Fairy", FairySchema);