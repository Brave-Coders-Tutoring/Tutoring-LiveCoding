import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import magicSpellRoutes from "./routes/magicSpell.js";
import wizardRoutes from "./routes/wizard.js";
import cors from "cors";

dotenv.config();

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
const dbConnectionString = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/magic-spell", magicSpellRoutes);
app.use("/wizard", wizardRoutes);

console.log("Casting Mongoose database connection spell... 🪄");

mongoose.set("strictQuery", false);
mongoose
  .connect(dbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("The spell was a success! Database connected! 😍"))
  .catch(() =>
    console.log("Casting spell failed! Database is not connected! ☹️")
  );

app.listen(3001, () => console.log("The server wizard is listening... 🧙"));
