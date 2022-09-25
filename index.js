const fs = require('fs');

process.on('beforeExit',() => {
    console.log('Print Fifth');
});

fs.readFile(__filename , () => {
    console.log('Print Third');
});

setImmediate(() => {
console.log('Print Second');
});

console.log('Print First');

setTimeout(() => {
    console.log('Print Forth');
},1000);
