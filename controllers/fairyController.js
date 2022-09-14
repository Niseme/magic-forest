import fairyModel from "../models/fairyModel.js";

export const createFairy = async (req, res) => {
  try {
    const newFairy = new fairyModel({
      ...req.body,
    });
    await newFairy.save();
    res.status(201).send("New Fairy is created");
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
};

export const getAllFairys = async (req, res) => {
  try {
    const allFairys = await fairyModel.find({}, { password: 0 });

    res.status(202).json(allFairys);
  } catch (error) {
    console.error(error);
  }
};

export const getFairyById = async (req, res) => {
  try {
    const fairy = await fairyModel.findById(req.params.id);
    const { password, ...remainingFairyData } = fairy._doc;
    res.status(200).json(remainingFairyData);
  } catch (error) {
    console.error(error);
  }
};

export const deleteFairyById = async (req, res) => {
  try {
    await fairyModel.findByIdAndDelete(req.params.id);
    res.status(200).send(`fairy has been successfully deleted`);
  } catch (error) {
    console.error(error);
  }
};

export const deleteAllFairys = async (req, res) => {
  try {
    await fairyModel.deleteMany({ fairyName: req.body.fairyName });
    res.status(200).send(`all fairys has been successfully deleted`);
  } catch (error) {
    console.error(error);
    res.status(400).send("couldnt find record that matches query");
  }
};

export const updateFairy = async (req, res) => {
  try {
    const updatedFairy = await fairyModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedFairy);
  } catch (error) {
    console.error(error);
  }
};