export class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  // For every letter in the key, it will crawl through the trie.
  // If there is already a node for the letter, then it will keep moving
  // If not, it will create a new node
  // It will do that for every letter in the key and mark the last node
  // as an end of word node
  insert(key: string): void {
    let index: number;
    let crawlNode = this.root;

    for (let i = 0; i < key.length; i++) {
      index = key.toLowerCase().charCodeAt(i) - 'a'.charCodeAt(0);
      if (crawlNode.children[index] === null) {
        crawlNode.children[index] = new TrieNode();
      }
      crawlNode = crawlNode.children[index];
    }
    crawlNode.word = key;
    crawlNode.isEndOfWord = true;
  }

  // Will traverse the trie to find if the key exists in the trie
  // It will follow a similar pattern as insert, but returning if the
  // Letter exists and if the full key is an end of work
  search(key: string): boolean {
    let index: number;
    let crawlNode = this.root;

    for (let i = 0; i < key.length; i++) {
      index = key.toLowerCase().charCodeAt(i) - 'a'.charCodeAt(0);
      if (crawlNode.children[index] === null) {
        return false;
      }
      crawlNode = crawlNode.children[index];
    }

    return crawlNode.isEndOfWord;
  }

  containsPrefix(prefix: string): boolean {
    let index: number;
    let crawlNode = this.root;

    for (let i = 0; i < prefix.length; i++) {
      index = prefix.toLowerCase().charCodeAt(i) - 'a'.charCodeAt(0);
      if (crawlNode.children[index] === null) {
        return false;
      }
      crawlNode = crawlNode.children[index];
    }

    return true;
  }

  /**
   * Returns the list of words that contain the prefix
   * 
   * Time Complexity: O(n) where n is words in the Trie
   *  - This is because even though we visit each child
   *    of all nodes after the prefix, there's a static
   *    amount of children (26). Even though we're visiting
   *    children of children and that number will be recursively
   *    larger, it's static. It depends on the number of
   *    nodes...thus complexity is O(n).
   */
  wordsFromPrefix(prefix: string): string[] {
    // Step 1: Find end node for prefix
    let crawlNode = this.root;

    for (let i = 0; i < prefix.length; i++) {
      let index = prefix.charCodeAt(i) - 'a'.charCodeAt(0);
      // If the prefix is not in the trie, return an empty array
      if (crawlNode.children[index] === null) {
        return [];
      }
      crawlNode = crawlNode.children[index];
    }

    // Step 2: Find all children (recursively)
    const words = [];
    if (crawlNode.word) {
      words.push(crawlNode.word);
    }
    words.push(...this.findWordsFromPrefixNode(crawlNode));
    return words;
  }

  findWordsFromPrefixNode(node: TrieNode): string[] {
    let crawlNode = node;
    let words: string[] = [];

    for (let i = 0; i < crawlNode.children.length; i++) {
      // If the child is null, we don't need to find it's children
      if (!crawlNode.children[i]) {
        continue;
      }

      // If child is the end of a word, add that word
      if (crawlNode.children[i].word) {
        words.push(crawlNode.children[i].word as string);
      }

      // Recurse on children of the node
      words.push(...this.findWordsFromPrefixNode(crawlNode.children[i]))
    }

    return words;
  }
}

export class TrieNode {
  children: TrieNode[] = new Array(26).fill(null);
  word: string | null = null;
  isEndOfWord: boolean = false;
}
