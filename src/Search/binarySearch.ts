export default function iterativeBinarySearch(array: number[], target: number): number {
    let left: number = 0;
    let right: number = array.length;
    while (left <= right) {
        let middle: number = Math.floor((left + right) / 2);
        if (array[middle] === target) return middle;

        if (array[middle] < target) left = middle + 1;

        if (array[middle] > target) right = middle - 1;
    }

    return -1;
}

export function recursiveBinarySearch(array: number[], target: number, left: number, right: number): number {
    if (left > right) return -1;

    let middle = Math.floor((left + right) / 2);

    if (array[middle] === target) return middle;

    if (array[middle] < target) return recursiveBinarySearch(array, target, middle + 1, right);

    if (array[middle] > target) return recursiveBinarySearch(array, target, left, middle - 1);

    return -1;
}