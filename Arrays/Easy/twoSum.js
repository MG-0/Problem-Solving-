
// First Solution worst case, because big o is o(n^2)
// function twoSum(nums, target) {

//     for (let i=0; i< nums.length; i++) {
//         for (let j=1; j< nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
    
// }
// console.log(twoSum([3, 2, 4], 6)); // o(n)^2


// Second Solution average case because the big o is o(n)
// function twoSumSecond (numbers, target1) {
//     let i = 0;
//     let j = 1 ;
//     while (i < numbers.length || j < numbers.length) {
//       if (numbers[i] + numbers[j] === target1) {
//         return [i, j];
//       }
//       i++;
//       j++;
//     }
// }
// console.log(twoSumSecond([3, 2, 4], 6)); // o(n)


// Third Way of Solution and Best case, Because Map faster and big o is o(1)

// function twoSumNumber(nums, target) {
//     const map = new Map();

//     for (let i=0; i< nums.length; i++) {
//         const completeNum = target - nums[i]; // 1 iteration 9 - 2 = 7 
//         if (map.has(completeNum)) { // map.has(7) = true
//             return [map.get(completeNum), i] // 7
//         }
//         map.set(nums[i], i) // 2 => 0 
//     }
// } // nums = [2,7,11,15], target = 9

// console.log(twoSumNumber([2, 7, 11, 15], 9));