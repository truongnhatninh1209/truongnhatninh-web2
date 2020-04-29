const {readFileSync,writeFileSync} = require('fs');
const {sayHi} = require('./functions');
const name = readFileSync('./name.txt','utf-8');
sayHi(name);
const newName = name.toUpperCase();
writeFileSync('./new-Name.txt',newName);