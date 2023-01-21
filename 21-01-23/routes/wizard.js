import express from "express";
import * as Wizard from "../models/Wizard.js";

const router = express.Router();

router
  .post("/create", async (req, res) => {
    try {
      const result = await Wizard.createWizard(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).send("Error: " + error);
    }
  })
  .get("/all", async (req, res) => {
    const result = await Wizard.getAll();
    res.status(200).json(result);
  })
  .get("/details/:id", async (req, res) => {
    try {
      const result = await Wizard.getOne(req.params.id);
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json(error.message);
    }
  })
  .patch("/levelup/:id", async (req, res) => {
    try {
      const result = await Wizard.updateOne(req.params.id);

      res.status(200).json(result);
    } catch (error) {
      res.status(404).json(error.message);
    }
  });

export default router;
