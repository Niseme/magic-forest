import express from "express";
import { connectionToMongo } from "./utils/connection.js";
import dwarfRoute from "./routes/dwarfRoute.js";
import fairyRoute from "./routes/fairyRoute.js";
import princessRoute from "./routes/princessRoute.js";
import favoriteFairyTaleModel from "./routes/favoriteFairyTaleRoute.js";


const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/dwarf", dwarfRoute);
app.use("/api/fairy", fairyRoute);
app.use("/api/princess", princessRoute);
app.use("/api/favoriteFairyTale", favoriteFairyTaleModel);

app.listen(port, () => {
  connectionToMongo();
  console.log(`Example app listening on port ${port}`)
})