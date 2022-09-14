import dwarfModel from "../models/dwarfModel.js";

export const createDwarf = async (req, res) => {
  try {
    const newDwarf = new dwarfModel({
      ...req.body,
    });
    await newDwarf.save();
    res.status(201).send("New Dwarf is created");
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
};

export const getAllDwarfs = async (req, res) => {
  try {
    const allDwarfs = await dwarfModel.find({}, { password: 0 });

    res.status(202).json(allDwarfs);
  } catch (error) {
    console.error(error);
  }
};

export const getDwarfById = async (req, res) => {
  try {
    const dwarf = await dwarfModel.findById(req.params.id);
    const { password, ...remainingDwarfData } = dwarf._doc;
    res.status(200).json(remainingDwarfData);
  } catch (error) {
    console.error(error);
  }
};

export const deleteDwarfById = async (req, res) => {
  try {
    await dwarfModel.findByIdAndDelete(req.params.id);
    res.status(200).send(`dwarf has been successfully deleted`);
  } catch (error) {
    console.error(error);
  }
};

export const deleteAllDwarfs = async (req, res) => {
  try {
    await dwarfModel.deleteMany({ dwarfName: req.body.dwarfName });
    res.status(200).send(`all dwarfs has been successfully deleted`);
  } catch (error) {
    console.error(error);
    res.status(400).send("couldnt find record that matches query");
  }
};

export const updateDwarf = async (req, res) => {
  try {
    const updatedDwarf = await dwarfModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedDwarf);
  } catch (error) {
    console.error(error);
  }
};