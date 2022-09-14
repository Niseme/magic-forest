import princessModel from "../models/princessModel.js";

export const createPrincess = async (req, res) => {
  try {
    const newPrincess = new princessModel({
      ...req.body,
    });
    await newPrincess.save();
    res.status(201).send("New princess is created");
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
};

export const getAllPrincesss = async (req, res) => {
  try {
    const allPrincesss = await princessModel.find({}, { password: 0 });

    res.status(202).json(allPrincesss);
  } catch (error) {
    console.error(error);
  }
};

export const getPrincessById = async (req, res) => {
  try {
    const princess = await princessModel.findById(req.params.id);
    const { password, ...remainingPrincessData } = princess._doc;
    res.status(200).json(remainingPrincessData);
  } catch (error) {
    console.error(error);
  }
};

export const deletePrincessById = async (req, res) => {
  try {
    await princessModel.findByIdAndDelete(req.params.id);
    res.status(200).send(`princess has been successfully deleted`);
  } catch (error) {
    console.error(error);
  }
};

export const deleteAllPrincesss = async (req, res) => {
  try {
    await princessModel.deleteMany({ princessName: req.body.princessName });
    res.status(200).send(`all princesss has been successfully deleted`);
  } catch (error) {
    console.error(error);
    res.status(400).send("couldnt find record that matches query");
  }
};

export const updatePrincess = async (req, res) => {
  try {
    const updatedPrincess = await princessModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedPrincess);
  } catch (error) {
    console.error(error);
  }
};