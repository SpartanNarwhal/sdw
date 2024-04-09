// //Create a variable for each of the folloing dat types, numbers, string, boonlean, object
// const numbersValue = 42;
// const stringValue = 'Hello, World';
// const boonleanValue1 = true;
// const boonleanValue2 = false;

// //funtion to demonstrate the use of each dat type
// function demonstrateDataTypes() {
// console.log(numbersValue);
// console.log(stringValue);
// console.log(boonleanValue1);
// console.log(boonleanValue2);
// console.log(object);
// }
// //execute the function
// function demonstrateDataTypes() {
//     let mathResult= 5+5;
//     console.log(numbersValue);
//     console.log(stringValue);
//     console.log(boonleanValue1);
//     console.log(boonleanValue2);
//     console.log(object);
//     console.log(`Math Result: ${mathResult + 20}`);
//     console.log("Math Result: " + mathResult);
// }

// demonstrateDataTypes();
// var countNumbersWithUniqueDigits = function (n) {
//     const maxNumber = Math.pow(10, n);
//     console.log(`maxNumber: ${maxNumber}`);
//     let count = 0;
//     let total = 0;
//     do {
//         if (count > 10) {
//             let firstDigit = count.toString().substring(0, 1);
//             if (count.toString().indexOf(firstDigit) === count.toString().length) {
//                 count++;
//                 continue;
//             }
//         }
//         count++;
//         console.log(count)
//         total++;
//     } while (count < maxNumber);
//     return total;
// };

// var compose = function(functions) {
//    return function(x) {
//     return functions.reduceRight((acc, fn) => fn(acc), x);
//    };
// };
// const fn1 = compose([x => x + 1, x => x * x, x => 2 * x]);
// console.log(fn1(4)); // Output: 65

// const fn2 = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
// console.log(fn2(1)); // Output: 1000

// const fn3 = compose([]);
// console.log(fn3(42));
// * const fn = compose([x => x + 1, x => 2 * x])
// * fn(4) // 9
// */
// async function sleep(millisGlobal) {
//     return new Promise(resolve => {
//       setTimeout(resolve, millisGlobal);
//     });
// }
// async function example() {
//    console.log("Start");
//    await sleep(60000); // Pause for 1 minute
//    console.log("After 1 minute");
// }
// example();

// var millisGlobal = 1000; // 1000 millisecond = 1 second
// async function sleep(millisGlobal) {
// return new Promise(resolve => {
//    const interval = 1000
//    const steps = millisGlobal / interval;
//    let count = 0;

//    function logAndContinue() {
//       count++
//       console.log("Return to game area in:" + count);
//       if (count <= steps) {
//          setTimeout(logAndContinue, interval);
//       } else {
//          resolve();
//      }
//  }

//  logAndContinue();
// });
// }

// async function example() {
//    console.log("WARNING");
//    await sleep(10000);
// }
//    example();

// const arr = [1,2,3];
// function plusone(n, index) {
//    return n + index;
// }
// function map(arr, fn) {
//    let transformedArray = [];
//       for (let i = 0; i < arr.lenght; i++) {
//       const transformedValue = fn(arr[i], i);
//       transformedArray.push(transformedValue);
//    }
//    return transformedArray;
// }

// const newArray = map(arr, plusone);
// console.log(newArray);

// const arr = [1, 3, 5, 6];
// const target = 4;
// var searchInsert = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//    if(nums[i] >= target) {
//     return (i);
//    };
//   }
//   return (nums.length + 1)
// };
// console.log(searchInsert(arr,target


//To Be Or Not To Be function

// function expect(val) {
//   return {
//     toBe: function (otherVal) {
//       if (val === otherVal) {
//         throw new Error("True");
//       }
//       return true;
//     },
//     notToBe: function (otherVal) {
//       if (val !== otherVal) {
//           throw new Error("Not True");
//       }
//       return true;
//     }
//   };
// }
// try {
//   expect(5).toBe(5); // Passes
//   expect(5).notToBe(null); // Passes
// } catch (error) {
//   console.error(error.message); // Output: Not Equal
// }
// Had functions for "toBe" and "notToBe" swapped returning opposite Errors with given examples


//CustomSort functuion practice
function customSort(arr, fn) {
    return arr.sort((a, b ) => fn(a) - fn(b));
}
const arr = [5, 4, 1, 2, 3]
const fn = (x) => x;

const sortedArr = customSort(arr, fn);
console.log(sortedArr);
