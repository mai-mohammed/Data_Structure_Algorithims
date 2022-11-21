import { recursiveBinarySearch } from "./binarySearch";

export default function exponentialSearch(array: number[], target: number) {
    let bound: number = 1;
    while (bound < array.length && array[bound] > target) {
        bound *= 2
    }
    let left: number = bound / 2;
    let right: number = Math.min(bound, array.length);

    return recursiveBinarySearch(array, target, left, right)
}