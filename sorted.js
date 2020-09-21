let nums = [
  65, 82, 46, 62, 89, 88, 47, 68, 100, 79, 27, 83,
  36, 98, 33, 99, 64, 6, 30, 21, 19, 71, 37, 53,
  49, 86, 67, 45, 87, 63, 2, 97, 42, 3, 10, 91,
  48, 94, 32, 5, 43, 15, 41, 12, 44, 90, 96, 73,
  22, 58, 31, 66, 56, 69, 85, 40, 80, 1, 76, 75,
  93, 70, 51, 7, 26, 18, 23, 34, 72, 59, 35, 8,
  95, 28, 52, 20, 57, 14, 39, 17, 92, 38, 60, 78,
  55, 54, 9, 84, 24, 16, 4, 61, 77, 29, 50, 11,
  13, 81, 74, 25
]

// native javascript sort method
// nums.sort((a, b) => b - a)

// selection sort
// const selectionSort = () => {
//   for (let i = 0; i < nums.length; i++) {

//     let min = i

//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] < nums[min]) {
//         min = j
//       }
//     }

//     if (i !== min) {
//       const temp = nums[i]
//       nums[i] = nums[min]
//       nums[min] = temp
//     }
//   }

//   return nums
// }

// console.log(selectionSort())

// insertion sort
const insertionSort = () => {

  for (let i = 0; i < nums.length; i++) {
    let val = nums[i]
    let j

    for (j = i - 1; j > -1  && nums[j] > val; j--) {
      nums[j + 1] = nums[j]
    }

    nums[j + 1] = val
  }

  return nums
}

console.log(insertionSort())