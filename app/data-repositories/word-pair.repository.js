import { readFileSync, writeFileSync } from "fs";

const jsonFilePath = "./app/data-repositories/word-pair.json";

class WordPairRepository {
  constructor() {
    this.loadWordPairs();
  }

  loadWordPairs() {
    try {
      const data = readFileSync(jsonFilePath, "utf8");
      this.wordPairs = JSON.parse(data);

      if (!Array.isArray(this.wordPairs)) {
        this.wordPairs = [];
      }
    } catch (error) {
      console.error("Error loading JSON file:", error);
    }
  }

  saveWordPairs() {
    try {
      const data = JSON.stringify(this.wordPairs, null, 2);
      writeFileSync(jsonFilePath, data, "utf8");
    } catch (error) {
      console.error("Error saving word pairs:", error);
    }
  }

  addWordPair(initialWord, similarWord) {
    // Check if both words are the same; if so, ignore the pair
    if (initialWord === similarWord) {
      return this.wordPairs;
    }

    const commonGroup = this.findCommonGroup(initialWord, similarWord);

    if (commonGroup) {
      // If one of the words exists, add the other word to the same array without duplicates
      if (!commonGroup.includes(initialWord)) {
        commonGroup.push(initialWord);
      }
      if (!commonGroup.includes(similarWord)) {
        commonGroup.push(similarWord);
      }
    } else {
      // If both words are not found, create a new array without duplicates
      const newGroup = [...new Set([initialWord, similarWord])];
      this.wordPairs.push(newGroup);
    }

    this.saveWordPairs();
    return this.wordPairs;
  }

  findCommonGroup(initialWord, similarWord) {
    if (Array.isArray(this.wordPairs)) {
      for (const group of this.wordPairs) {
        if (group.includes(initialWord) || group.includes(similarWord)) {
          return group;
        }
      }
    }
    return null;
  }

  getAllWordPairs() {
    return this.wordPairs;
  }
}

export default WordPairRepository;
