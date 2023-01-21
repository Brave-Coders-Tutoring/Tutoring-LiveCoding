import mongoose from "mongoose";

const magicSpellSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  cost: {
    type: Number,
    min: [1, "cost shouldn't be less than 1"],
  },
  damage: {
    type: Number,
    default: 0,
    min: [0, "damage shouldn't be less than 0"],
  },
  castingTime: {
    type: Number,
    default: 6,
    min: [0, "castingTime shouldn't be less than 0"],
  },
  level: {
    type: Number,
    default: 1,
    min: [1, "level shouldn't be less than 1"],
  },
  range: {
    type: Number,
    default: 0.1,
    min: [0, "range shouldn't be less than 0"],
  },
  areaOfEffect: {
    type: Boolean,
    default: false,
  },
  school: {
    type: String,
    enum: ["physical", "arcane", "fire", "frost", "nature", "shadow", "holy"],
  },
});

const MagicSpell = mongoose.model("MagicSpell", magicSpellSchema);

export const createSpell = async (doc) => {
  const newSpell = new MagicSpell(doc);

  const result = await newSpell.save();
  return result;
};

export const getAll = async () => {
  const magicSpells = await MagicSpell.find();
  return magicSpells;
};

export const getOne = async (id) => {
  const magicSpell = await MagicSpell.findById(id);
  return magicSpell;
};

export default MagicSpell;
