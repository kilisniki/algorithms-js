console.log(1);
Promise.resolve().then(()=> {console.log(2);});
new Promise((res) => { console.log(3); res();});
console.log(4);
