const db = require("../models");

require("dotenv").config();
const { OpenAI } = require("openai");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Get all records
const getAllRecords = async (req, res) => {
  try {
    const records = await db.Record.findAll();
    res.json(records);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Get a record by ID
const getRecordById = async (req, res) => {
  try {
    const record = await db.Record.findByPk(req.params.id);
    if (record) {
      res.json(record);
    } else {
      res.status(404).send("Record not found");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// Create a new record
const createRecord = async (req, res) => {
  try {
    const newRecord = await db.Record.create(req.body);
    res.status(201).send(`Record added with ID: ${newRecord.id}`);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Update a record by ID
const updateRecord = async (req, res) => {
  try {
    const [updated] = await db.Record.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedRecord = await db.Record.findByPk(req.params.id);
      res.status(200).json(updatedRecord);
    } else {
      res.status(404).send("Record not found");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// Delete a record by ID
const deleteRecord = async (req, res) => {
  try {
    const deleted = await db.Record.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).send("Record not found");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getAllRecords,
  getRecordById,
  createRecord,
  updateRecord,
  deleteRecord,
};
