export default function mergeSort(array: number[]) {
    if (array.length === 1) { return; }
    let middle = Math.floor(array.length / 2);

    let left: number[] = [];
    let right: number[] = [];

    for (let i = 0; i < middle; i++) {
        left[i] = array[i];
    }
    for (let i = middle; i < array.length; i++) {
        right[i - middle] = array[i];
    }

    mergeSort(left);
    mergeSort(right);

    merging(left, right, array);
}

function merging(left: number[], right: number[], result: number[]) {
    let i: number = 0; // left index
    let j: number = 0; // right index
    let k: number = 0; // result index

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result[k++] = left[i++];
        } else {
            result[k++] = right[j++];
        }
    }

    while (i < left.length) {
        result[k++] = left[i++];
    }

    while (j < right.length) {
        result[k++] = right[j++];
    }
}