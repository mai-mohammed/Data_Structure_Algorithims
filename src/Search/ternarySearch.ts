export default function ternarySearch(array: number[], target: number) {
    let left: number = 0;
    let right: number = array.length;
    let partitionSize: number = Math.floor(array.length / 3);

    while (left <= right) {
        let middle1 = left + partitionSize;
        let middle2 = right - partitionSize;

        if (array[middle1] === target) return middle1;
        if (array[middle2] === target) return middle2;

        if (array[middle1] > target) right = middle1 - 1;
        if (array[middle2] < target) left = middle1 + 1;


        if (array[middle1] < target && array[middle2] > target) {
            left = middle1 + 1;
            right = middle2 - 1;
        }
        return -1;
    }
}
