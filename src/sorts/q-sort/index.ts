export function quickSort (array) {
  sort(array, 0, array.length-1);
}

function sort(array, min, max) {
  console.log('sort ', min, max);
  if (min < max) {
    const p = partitionHoar(array, min, max);
    sort(array, min, p - 1);
    sort(array, p, max);
  }
}

// функция которая разбивает массив на два.
// отдает индекс по которому разбивает
function partitionHoar (array, min, max) {
  const middle = Math.floor((min + max) / 2);
  let i = min;
  let j = max;
  while (i <= j) {
    // Слева оставляем только те элементы которые меньше array[middle]
    // обрати внимание что тут while а не if
    while (array[i] < array[middle]) i++;
    // Справа оставляем только те элементы которые  больше array[middle]
    while (array[j] > array[middle]) j--;
    console.log(i,j);
    // если мы здесь, значит дошли слева до элемента который больше чем серединный,
    // а справа меньше чем серединный
    // теперь мы их свайпаем
    if (i <= j) {
      const b = array[i];
      array[i] = array[j];
      array[j] = b;
      i++; j--;
    }
  }
  return i;
}

