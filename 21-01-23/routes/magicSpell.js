import express from "express";
import * as MagicSpell from "../models/MagicSpell.js";

const router = express.Router();

router
  .post("/create", async (req, res) => {
    try {
      const result = await MagicSpell.createSpell(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).send("Error: " + error);
    }
  })
  .get("/all", async (req, res) => {
    const result = await MagicSpell.getAll();
    res.status(200).json(result);
  })
  .get("/details/:id", async (req, res) => {
    try {
      const result = await MagicSpell.getOne(req.params.id);
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json(error.message);
    }
  });

export default router;
