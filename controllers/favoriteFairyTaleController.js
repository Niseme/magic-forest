import dwarfModel from "../models/dwarfModel.js";
import fairyModel from "../models/fairyModel.js";
import princessModel from "../models/princessModel.js";
import favoriteFairyTaleModel from "../models/favoriteFairyTaleModel.js";

export const createFavoriteFairyTale = async (req, res) => {
  try {
    const newFavoriteFairyTale = new favoriteFairyTaleModel({
      ...req.body,
    });
    await newFavoriteFairyTale.save();
    res.status(201).send("New FavoriteFairyTale is created");
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
};

export const getAllFavoriteFairyTale = async (req, res) => {
  try {
    const AllFavoriteFairyTale = await favoriteFairyTaleModel.find();

    res.status(202).json(AllFavoriteFairyTale);
  } catch (error) {
    console.error(error);
  }
};

export const getFavoriteFairyTaleById = async (req, res) => {
  try {
    const favoriteFairyTale = await favoriteFairyTaleModel.findById(req.params.id);
    const { password, ...remainingFavoriteFairyTaleData } = favoriteFairyTale._doc;
    res.status(200).json(remainingFavoriteFairyTaleData);
  } catch (error) {
    console.error(error);
  }
};

export const deleteFavoriteFairyTaleById = async (req, res) => {
  try {
    await FavoriteFairyTaleModel.findByIdAndDelete(req.params.id);
    res.status(200).send(`FavoriteFairyTale has been successfully deleted`);
  } catch (error) {
    console.error(error);
  }
};

export const deleteAllFavoriteFairyTale = async (req, res) => {
  try {
    await favoriteFairyTaleModel.deleteMany({
      favoriteFairyTaleName: req.body.favoriteFairyTaleName,
    });
    res.status(200).send(`all FavoriteFairyTale has been successfully deleted`);
  } catch (error) {
    console.error(error);
    res.status(400).send("couldnt find record that matches query");
  }
};

export const updateFavoriteFairyTale = async (req, res) => {
  try {
    const updatedFavoriteFairyTale = await favoriteFairyTaleModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedFavoriteFairyTale);
  } catch (error) {
    console.error(error);
  }
};

export const getCharacterByFairyTale = async (req, res) => {
  const characterModels = {
    ["dwarf"]: dwarfModel,
    ["fairy"]: fairyModel,
    ["princess"]: princessModel,
  };
  try {
    const getFavoriteFairyTale = await favoriteFairyTaleModel.findOne({
      place: req.params.placeName,
    });
    const character = await Promise.all(
      getFavoriteFairyTale.animal.map(async (animal) => {
        if (animal.entity === "princess") {
          return await princessModel.findById(animal.id);
        }
        if (animal.entity === "fairy") {
          return await fairyModel.findById(animal.id);
        }
        if (animal.entity === "dwarf") {
          return await dwarfModel.findById(animal.id);
        }
      })
    );
    res.status(200).json(character);
  } catch (error) {
    console.error(error);
  }
};

export const getMostPopularFairyTale = async (req, res) => {
    try {
      const favoriteFairyTale = await FavoriteFairyTaleModel.find();
      const favoriteFairyTales = [];
      favoriteFairyTale.reduce((prev, curr) =>
        prev.animal?.length >= curr.animal?.length
          ? favoriteFairyTales.push(prev.FairyTale)
          : favoriteFairyTales.push(curr.FairyTale)
      );
      let answer;
      if (favoriteFairyTales.length !== 0) {
        answer = favoriteFairyTales.length > 1 ? favoriteFairyTales : favoriteFairyTales[0];
      }

    res.status(200).json(answer);
  } catch (error) {
    console.log(error);
  }
};