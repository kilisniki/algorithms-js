
setTimeout(()=>console.log('setTimeout'), 0); // 4

const main = async () => {

  console.log('start main') // 1

  await (new Promise(res => {
    console.log('first promise resolve') // 2
    res();
  }))

  /*
  * Как это работает?
  * Получается, что функция которая передается в промис выполняется сразу,
  * Но дальнейший код - нет
  * где же он находится? Почему он не блокирует event loop?
  * Спойлер: смотри тему генераторов.
  * */
  await (new Promise(res => {
    console.log('new setTimeout planned') // 3
    setTimeout(res, 5000)
  }));

  console.log('end main'); // 5
}

main()
