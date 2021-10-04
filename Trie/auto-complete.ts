export class AutocompleteSystem {
  searchTerms: string = '';
  root: TrieNode;

  constructor(sentences: string[], times: number[]) {
    this.root = new TrieNode();

    // Add each sentence to the trie
    for (let i = 0; i < sentences.length; i++) {
      const sentence = sentences[i];
      let crawlNode = this.root;
      for (let j = 0; j < sentence.length; j++) {
        let index = sentence.charCodeAt(j) - 'a'.charCodeAt(0);
        if(sentence[j] === ' ') {
          index = 26;
        }
        if (crawlNode.children[index] === null) {
          crawlNode.children[index] = new TrieNode();
        }
        crawlNode = crawlNode.children[index];
      }
      crawlNode.sentence = sentence;
      crawlNode.weight = times[i];
    }
  }


  insertSentence(sentence: string) {
    // Step 1: Find if sentence exists
    let crawlNode = this.root;
    for (let i = 0; i < sentence.length; i++) {
      let index = sentence.charCodeAt(i) - 'a'.charCodeAt(0);
      if(sentence[i] === ' ') {
        index = 26;
      }
      if (crawlNode.children[index] === null) {
        crawlNode.children[index] = new TrieNode();
      }
      crawlNode = crawlNode.children[index];
    }
    crawlNode.sentence = sentence;
    crawlNode.weight += 1;
  };

  input(c: string): string[] {
    if (c === '#') {
      this.insertSentence(this.searchTerms);
      this.searchTerms = '';
      return [];
    }
  
    this.searchTerms += c;

    // Step 1: Find node
    let crawlNode = this.root;

    for (let i = 0; i < this.searchTerms.length; i++) {
      let index = this.searchTerms.charCodeAt(i) - 'a'.charCodeAt(0);
      if(this.searchTerms[i] === ' ') index = 26;
      // If the trie doesn't contain the prefix, return an emoty array
      if (crawlNode.children[index] === null) {
        return [];
      }
      crawlNode = crawlNode.children[index];
    }

    // Step 2: Find all words from the prefix
    const sentenceNodes =  this.findSentencesFromNode(crawlNode);
    if (crawlNode.sentence) {
      sentenceNodes.push(crawlNode);
    }
  
    return sentenceNodes
      .sort((a,b) => {
        const diff = a.weight - b.weight;
        if (diff === 0) {
          return (a.sentence as string) > (b.sentence as string) ? -1 : 1;
        }
        return diff;
      })
      .reverse()
      .slice(0,3)
      .map(n => n.sentence as string);
  }

  findSentencesFromNode(node: TrieNode): TrieNode[] {
    let sentenceNodes: TrieNode[] = [];
    
    for (let i = 0; i < node.children.length; i++) {
      if (node.children[i] === null) continue;

      if (node.children[i].sentence) {
        sentenceNodes.push(node.children[i]);
      }

      // Add child's sentences words
      sentenceNodes.push(...this.findSentencesFromNode(node.children[i]));
    }

    return sentenceNodes;
  }
}

class TrieNode {
  children: TrieNode[] = new Array(27).fill(null);
  // value: string = '';
  sentence: string | null = null;
  weight = 0;
}

// Test
const ac = new AutocompleteSystem(['i love you','island','iroman','i love leetcode'],[5,3,2,2]);
// console.log(ac.input('i')); // ['i love you', 'island', 'i love leetcode']
// console.log(ac.input(' ')); // ['i love you', 'i love leetcode']
// console.log(ac.input('a')); // []
// console.log(ac.input('#')); // []



[["i"],[" "],["a"],["#"],["i"],[" "],["a"],["#"],["i"],[" "],["a"],["#"]].forEach((input) => console.log(input[0], ac.input(input[0])));

[
  ["i love you","island","i love leetcode"],
  ["i love you","i love leetcode"],
  [],[],
  ["i love you","island","i love leetcode"],
  ["i love you","i love leetcode","i a"],
  ["i a"],
  [],
  ["i love you","island","i a"],
  ["i love you","i a","i love leetcode"],
  ["i a"],
  []
]
