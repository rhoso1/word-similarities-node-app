import { Router } from "express";
import * as WordPairController from "../controllers/word-pair.controller.js";

const router = Router();

// Route to add a new word pair
router.post("/add-word", (req, res) => {
  const { initialWord, similarWord } = req.body;
  const wordPairGroups = WordPairController.addWordPair(initialWord, similarWord);
  res.json(wordPairGroups);
});

// Route to get all word pair groups
router.get("/all-words", (req, res) => {
  const wordPairGroups = WordPairController.getAllWordPairs();
  res.json(wordPairGroups);
});

export default router;
