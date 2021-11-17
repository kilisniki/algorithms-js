const fs = require('fs');

fs.readFile(__filename, () => {
  console.log('Read file');
  process.exit(0);
})

for (let i = 0; i<= 10000000; i++) {
  setTimeout(()=> { if (i === 10000000) console.log('1000')}, 0);
}
// не работает

console.log('start');
