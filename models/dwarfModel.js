import mongoose from "mongoose";

const DwarfSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  hatColor: {
    type: String,
    required: true,
  },
  hasMagic: {
    type: Boolean,
  },
  isSenior: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Dwarf", DwarfSchema);