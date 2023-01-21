import mongoose from "mongoose";

const energy = new mongoose.Schema({
  health: {
    type: Number,
    default: 1,
    min: [0, "health shouldn't be less than 0"],
  },
  stamina: {
    type: Number,
    default: 10,
    min: [0, "stamina shouldn't be less than 0"],
  },
  magic: {
    type: Number,
    default: 100,
    min: [0, "magic shouldn't be less than 0"],
  },
});

const wizardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  age: {
    type: Number,
    min: [1, "age shouldn't be less than 1"],
  },
  level: {
    type: Number,
    default: 1,
    min: [1, "level shouldn't be less than 1"],
  },
  accuracy: {
    type: Number,
    default: 0.3,
    min: [0, "accuracy shouldn't be less than 0"],
    max: [1, "accuracy shouldn't be more than 1"],
  },
  critical: {
    type: Number,
    default: 0,
    min: [0, "critical shouldn't be less than 0"],
    max: [1, "critical shouldn't be more than 1"],
  },
  origin: {
    type: String,
    enum: [
      "Ankh-Morpork",
      "Bad Schüschein",
      "Betrek",
      "Borogravia",
      "Brindisi",
      "Chimeria",
      "Chirm",
      "Copperhead",
      "Cori Celesti",
      "Djelibeybi",
      "Ephebe",
      "Ghat",
      "Hersheba",
      "Howondaland",
      "Klatchistan",
      "Lipwig",
      "Rehigreed Province",
      "Schmaltzberg",
      "Skund",
      "Sto Helit",
      "Sto Lat",
      "Sunken Leshp",
      "The Chalk",
      "The Wyrmberg",
      "Überwald",
    ],
  },
  energy: [energy],
  spells: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MagicSpell",
    },
  ],
});

const Wizard = mongoose.model("Wizard", wizardSchema);

export const createWizard = async (doc) => {
  const newWizard = new Wizard(doc);

  const result = await newWizard.save();
  return result;
};

export const getAll = async () => {
  const wizards = await Wizard.find();
  return wizards;
};

export const getOne = async (id) => {
  const wizard = await Wizard.findById(id);
  return wizard;
};

export const updateOne = async (id) => {
  const wizard = await Wizard.findById(id);
  wizard.$inc("level", 1);
  return await wizard.save();
};

export default Wizard;
