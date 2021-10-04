function replaceWords(dictionary: string[], sentence: string): string {
  // Step 1: Construct Trie
  // O(nm) : n = dict length, m = longest string
  const root = new TrieNode();

  for (let i = 0; i < dictionary.length; i++) {
    const word = dictionary[i];
    let crawlNode = root;
    for (let j = 0; j < word.length; j++) {
      const letterIndex = word.toLowerCase().charCodeAt(j) - 'a'.charCodeAt(0);
      if (crawlNode.children[letterIndex] === null) {
        crawlNode.children[letterIndex] = new TrieNode();
      }
      crawlNode = crawlNode.children[letterIndex];
    }
    crawlNode.isEndOfWord = true;
  }

  // Step 2
  let outputWords: string[] = [];
  const sentenceWords = sentence.split(' ');

  for (let i = 0; i < sentenceWords.length; i++) {
    const word = sentenceWords[i];
    let outWord = '';
    let crawlNode = root;
    let isRoot = false;
    // Track letters of words down the trie
    for (let j = 0; j < word.length; j++) {
      const letterIndex = word.toLowerCase().charCodeAt(j) - 'a'.charCodeAt(0);
      outWord += word[j];

      // If the letter is not in the map before we reach the end of the root
      // Then it doesn't contain the root and we just push word to the sentence
      if (crawlNode.children[letterIndex] === null) {
        break;
      }
      if (crawlNode.children[letterIndex].isEndOfWord) {
        isRoot = true;
        break;
      }
      crawlNode = crawlNode.children[letterIndex];
    }
    outputWords.push(isRoot ? outWord : word);
  }

  return outputWords.join(' ');
};

class TrieNode {
  children: TrieNode[] = new Array(26).fill(null);
  isEndOfWord = false;
}

console.log(replaceWords(['cat','bat','rat'], 'the cattle was r rattled by the battery'));
