const fs = require('fs');

// const readFile = () => {
//   fs.readFile(__filename, () => {
//     console.log('readedFile');
//     readFile();
//   });
//   for (let j = 0; j<1000000000; j++) {
//     let a = 1235667*j;
//   }
//   setTimeout(() => console.log('log'));
// }
//
// readFile();

const ломающийКоэффициент = 100000000;

for (let i = 0; i < 1000; i++) {
  fs.readFile(__filename, () => {
    console.log(i);
    for (let j = 0; j<ломающийКоэффициент; j++) {
      let a = i*j;
    }
    setTimeout(()=>console.log('set' + i))
  })
}
