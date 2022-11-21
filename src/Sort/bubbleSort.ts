export default function bubbleSort(array: number[]) {
    let isSorted: boolean;

    for (let i = 0; i < array.length; i++) {
        isSorted = true;
        for (let j = 1; j < array.length - i; j++) {
            if (array[j] < array[j - 1]) {
                [array[j], array[j - 1]] = [array[j - 1], array[j]];
                isSorted = false;
            }
        }
        if (isSorted) return;
    }
}

