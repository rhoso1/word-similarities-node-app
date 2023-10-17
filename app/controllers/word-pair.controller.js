import WordPairRepository from "../data-repositories/word-pair.repository.js";

const wordPairRepository = new WordPairRepository();

// Add a new word pair to the repository
function addWordPair(initialWord, similarWord) {
  const wordPairGroups = wordPairRepository.addWordPair(initialWord, similarWord);
  return wordPairGroups;
}

// Get all word pair groups from the repository
function getAllWordPairs() {
  const wordPairGroups = wordPairRepository.getAllWordPairs();
  return wordPairGroups;
}

export { addWordPair, getAllWordPairs };
