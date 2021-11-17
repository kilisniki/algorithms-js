const { memoryUsage } = require('process');


const a = [];
console.log(memoryUsage().heapUsed/1000);
for (let i = 0; i< 100000000; i++) {
  // const str = 'str'; хранит в sting heap
  // const str = 1;
  const str = {};
  a.push(str);
}
console.log(memoryUsage().heapUsed/1000);
