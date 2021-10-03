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
}

export class TrieNode {
  children: TrieNode[] = new Array(26).fill(null);
  isEndOfWord: boolean = false;
}
