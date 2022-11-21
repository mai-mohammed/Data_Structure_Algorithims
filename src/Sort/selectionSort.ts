export default function selectionSort(array: number[]) {

    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        [array[minIndex], array[i]] = [array[i], array[minIndex]];
    }
}
