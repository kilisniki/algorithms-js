// асинхронная функция верхнего уровня (которая помечена как async),
// по сути является генератором, который нужно правильно запустить
function* КакаяТоАсинхроннаяФункция () {
  const response = yield fetch('https://api.openweathermap.org/data/2.5/weather?zip=90813&APPID=5dd3e57156e6ebba767abb71509b53a0');
  const data = yield response.json();
  console.log(data)
  // return data; // в этом нет смысла потому что конечный результат не попадет наружу
};

// Создание функции которая умеет запускать асинхронные функции
const запускаторАсинхронныхФункций = (someGeneratorFunction) => {
  const createdGenerator = someGeneratorFunction();

  function promiseIterate(value) {
    const nextPromise = createdGenerator.next(value); // первый раз вернет Promise<Response>, второй - Promise<JSON>
    // if (nextPromise.value instanceof Promise) ... проверка здесь не нужна
    // потому что прикол асинхронных функций в том, что каждый await - это yield который возвращает промис
    if (nextPromise.done) return; // здесь нет return nextPromise.value потому что функция запускаторАсинхронныхФункций по флоу выполнится после первого запуска promiseIterate() раньше чем генератор вернет

    nextPromise.value
      .then(promiseIterate); // говорим, что после того как промис разрешится, вызвать у функцию then с вычисленным значением
    // Фаза 1: когда выполнится запрос до сервера, то будет вызван promiseIterate(Response)
    // response Это объект - экземпляр класса Response у которого есть асинхронный метод json
    // когда вызовется promiseIterate(Response), продолжится цепочка вызова генератора createdGenerator
    // второй вызов next(value) (при чем value это будет Response)
    // 1. сохранит value в переменной response
    // 2. дойдет до следующего yield, который вызовет response.json, тем самым отдаст новый Promise в функцию promiseIterate
    // и мы опять говорим, что после того, как этот промис разрешится, вызови функцию promiseIterate
    // Фаза 2: когда .json() выполнится, будет вызван метод promiseIterate(json)
    // третий вызов next(value) заключительный для этого генератора, генератор createdGenerator выдаст значение
    // { value: json, done: true }
  }

  promiseIterate(); // Фаза 0: первый раз запускаем обход генератора
  // после этого запускаторАсинхронныхФункций выполнится, соответственно управление передастся наружу
}

запускаторАсинхронныхФункций(КакаяТоАсинхроннаяФункция);
