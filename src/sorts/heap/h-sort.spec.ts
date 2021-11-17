import { heapSort } from "./index";

test('h-sort test', () => {
    let array;
    let sortedArray = [1, 2, 3, 4, 4, 4, 5, 6];

    heapSort(array = [1, 2, 3, 4, 4, 4, 5, 6]);
    expect(array).toEqual(sortedArray);

    heapSort(array = [6, 5, 4, 4, 4, 3, 2, 1]);
    expect(array).toEqual(sortedArray);

    heapSort(array = [1, 6, 2, 5, 3, 4, 4, 4]);
    expect(array).toEqual(sortedArray);
})
