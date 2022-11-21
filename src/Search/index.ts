// Time complexity  best: O (1) worst: O(n)
import linearSearch from './linearSearch';

// Time complexity  always: O(log n)
// space complexity iterative: O(1) recursive: O(log n)
import iterativeBinarySearch, { recursiveBinarySearch } from './binarySearch';

// Time complexity always: O(log3 n)
// but binary search is better it has less conditions to check
import ternarySearch from './ternarySearch';


export { linearSearch, iterativeBinarySearch, recursiveBinarySearch, ternarySearch }
