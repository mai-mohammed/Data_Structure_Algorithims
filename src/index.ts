import Stack from "./stack";
import Queue from './queue';
import { bubbleSort, selectionSort, mergeSort } from './Sort';


console.log("------------------Stack--------------");
let testStack = new Stack<number>();
testStack.push(5);
testStack.push(4);
testStack.push(2);
testStack.push(7);
testStack.push(10);
testStack.print();
testStack.pop();
testStack.pop();
testStack.pop();
testStack.print();

console.log("------------------Queue--------------");
let testQueue = new Queue<number>();
testQueue.enqueue(5);
testQueue.enqueue(4);
testQueue.enqueue(2);
testQueue.enqueue(7);
testQueue.enqueue(10);
testQueue.print();
testQueue.dequeue();
testQueue.dequeue();
testQueue.dequeue();
testQueue.print();

console.log("-------------------- bubble sort ----------------------");
let testArray = [44, 3, 555, 6, 1, 22];
bubbleSort(testArray);
console.log(testArray);

console.log("-------------------- bubble sort ----------------------");
let testArray2 = [44, 3, 555, 6, 1, 22];
selectionSort(testArray2);
console.log(testArray2);

console.log("-------------------- bubble sort ----------------------");
let testArray3 = [44, 3, 555, 6, 1, 22];
mergeSort(testArray3);
console.log(testArray3);
