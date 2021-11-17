// Таймер никогда не будет выполнен
// Потому что очередь микротасок никогда не опустеет
// Бесконечный асинхронный цикл
setTimeout(() => { console.log('setTimeout')}, 0);

function prom () {
  Promise.resolve().then(prom)
}

prom();

