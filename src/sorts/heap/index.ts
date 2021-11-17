export function heapSort (array) {
    const heapSize = array.length;

    for (let i = heapSize / 2 - 1; i >= 0; i-- ) {
        heapify(array, heapSize, i);
    }

    for (let i=heapSize-1; i>=0; i--)
    {
        // Перемещаем текущий корень в конец
        const b = array[0];
        array[0] = array[i];
        array[i] = b;

        // Вызываем процедуру heapify на уменьшенной куче
        heapify(array, i, 0);
    }
}

function heapify (array, heapSize, index) {
    let largest = index;
    const left = index * 2 + 1;
    const right = index * 2 + 2;

    if (left < heapSize && array[left] > array[largest]) largest = left;
    if (right < heapSize && array[right] > array[largest]) largest = right;

    if (largest != index) {
        const b = array[index];
        array[index] = array[largest];
        array[largest] = b;

        heapify(array, heapSize, largest)
    }
}
