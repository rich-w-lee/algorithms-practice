import { Trie } from './Trie';

const trie1 = new Trie();
trie1.insert('eat');
trie1.insert('ear');
trie1.insert('earn');
trie1.insert('earnest');
trie1.insert('earned');
trie1.insert('earner');
trie1.insert('bet');

console.log(trie1.search('eat'));
console.log(trie1.search('beat'));
console.log(trie1.wordsFromPrefix('eat'));
