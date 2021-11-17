import {binarySearchSimple} from "./index";

test('simple binary search test', () => {
    expect(binarySearchSimple([0,1,2], 0)).toBe(0);
    expect(binarySearchSimple([0,1,2,3,4], 1)).toBe(1);
    expect(binarySearchSimple([0,1,2,3,4,5], 2)).toBe(2);
    expect(binarySearchSimple([0,1,2,3,4,5,6], 3)).toBe(3);

    expect(binarySearchSimple([], 0)).toBe(null);

    expect(binarySearchSimple([1,2,2,2,2,3,5,8,9,11], 2)).toBe(1);
})
