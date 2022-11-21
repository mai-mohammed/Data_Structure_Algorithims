export default function linearSearch(array: number[], target: number) {
    array.forEach((ele: number, index: number) => {
        if (ele === target) return index;
    });

    return -1;
}