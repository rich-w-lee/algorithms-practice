import { Trie } from './Trie';

const trie1 = new Trie();
trie1.insert('eat');
trie1.insert('ear');
trie1.insert('earn');
trie1.insert('bet');

console.log(trie1.search('eat'));
console.log(trie1.search('beat'));
