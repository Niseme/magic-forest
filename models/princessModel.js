import mongoose from "mongoose";

const PrincessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  isWaitingForPrince: {
    type: Boolean,
    required: true,
  },
  needsHelp: {
    type: Boolean,
    },
  isGood: {
    type: Boolean,
  },
  isSenior: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Princess", PrincessSchema);