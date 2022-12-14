// console.log("Fizzbuzz");
// console.log("Given an integer n, return a string array answer (i -indexed) where  ");
// console.log("answer[i] == \"FizzBuzz\" if i is divisible by 3 and 5.\n" +
//     "answer[i] == \"Fizz\" if i is divisible by 3.\n" +
//     "answer[i] == \"Buzz\" if i is divisible by 5.\n" +
//     "answer[i] == i (as a string) if none of the above conditions are true");
//
//
// const fizzBuzz = (n) => {
//     // initialize array to hold values
//     const answer = []
//
//     //iterate over the number
//     for (let i = 1; i <= n; i++) {
//         //if i is divisible by 3 and 5
//         if (i % 3 === 0 && i % 5 === 0) {
//             //add FizzBuzz to the array
//             answer.push("FizzBuzz " + i)
//         }
//         //    else if its divisible by 3
//         else if (i % 3 === 0) {
//             //add Fizz to array
//             answer.push("Fizz " + i)
//         }
//         //    else if is divisible by 5
//         else if (i % 5 === 0) {
//             //push Buzz to the array
//             answer.push("Buzz " + i)
//         } else {
//             //else change the number to its string value
//             answer.push(i.toString())
//         }
//     }
//
//     //return final array
//     return answer
// }
//
// console.log(fizzBuzz(15))
//
// console.log("******************* classes in JavaScript *******************")
//
// class movie {
//
//     constructor(title, director, genre, releaseYear, rating) {
//         this.title = title;
//         this.director = director;
//         this.genre = genre;
//         this.releaseYear = releaseYear;
//         this.rating = rating;
//     }
//
//     movie() {
//     }
// }
//
//
// class DisplayMovieInformation extends movie {
//
// //
//     displayInformation() {
//         console.log(`${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}.
//          It received a rating of ${this.rating}`)
//     }
// }
//
// const newMovie = new DisplayMovieInformation("IronMan", "John Doe", "Action", "2011", "9");
// newMovie.displayInformation();
//
//
// console.log("******************* classes in JavaScript *******************")
//
//
// console.log("******************* REVERSE ARRAY *******************")
//
//
// function reverseString(input) {
//     // Step 1. Use the split() method to return a new array
//     // Step 2. Use the reverse() method to reverse the new created array
//     // Step 3. Use the join() method to join all elements of the array into a string
//     //Step 4. Return the reversed string
//     return input.split("").reverse().join("");
// }
//
// console.log(reverseString("words new "))
//
//
// let url = `https://api.github.com/UzielCarranza`
//
// async function getFetch(url) {
//     const response = await fetch('https://api.github.com/users/UzielCarranza')
//         .then(response => response.json())
//
//     console.log(response)
// }
//
//
// getFetch(url);
//
//
// console.log("******************* REVERSE ARRAY *******************")
//
//
// console.log("******************* Two Sum *******************")
//
// //given array of integers: nums and target
// const twoSum = (array, targetNum) => {
//     let result = [];
//
//     //iterate over array of nums
//     for (let i = 0; i <= array.length; i++) {
//         //    iterate twice to get the second number
//         for (let j = i + 1; j <= array.length; j++) {
//             if (array[i] + array[j] === targetNum) {
//                 result.push(i);
//                 result.push(j)
//             }
//         }
//     }
//     console.log(result)
// }
//
// let arr = [23, 2, 3, 4];
// twoSum(arr, 6);
//
// //return indices of the two numbers that add up to the target value
//
//
// console.log("******************* Two Sum *******************")
//
//
// console.log("******************* contains duplicate *******************")
//
// //given array of numbers
//
// const containsDuplicates = (arrayOfNums) => {
// //    iterate over array
//     for (let i = 0; i <= arrayOfNums.length; i++) {
//         for (let j = i + 1; j <= arrayOfNums.length; j++) {
//             if (arrayOfNums[i] === arrayOfNums[j]) {
//                 return true
//             }
//         }
//     }
//     return false
//
// }
//
// console.log(containsDuplicates([1, 2, 3, 1]));
// //return true if a value appears twice
//
// //otherwise
//
// //return false
//
//
// console.log("******************* contains duplicate *******************")
//
//


// console.log("*******************  Best Time to Buy and Sell Stock *******************")
//
//
// // let use initialize Left and Right pointer to first and second position of array
// const maxProfit = (prices) => {
//     //buy stock
//     let left = 0;
//     //sell stock
//     let right = 1;
//     //max profits
//     let max_profit = 0;
//
//     //we start our while loop and we will run it till our Right pointer is less then the length of array
//     while (right < prices.length) {
//
//         //access the array by position of variable
//         if (prices[left] < prices[right]) {
//             let profit = prices[right] - prices[left];
//             max_profit = Math.max(max_profit, profit);
//         } else {
//             // give left the position within the array of the right pointer
//             left = right;
//         }
//         //add one to current position
//         right++;
//     }
//     //return max profits
//     return max_profit;
// };
//
// console.log(maxProfit([7,1,5,3,6,4]))
// console.log("******************* ENDS  Best Time to Buy and Sell Stock *******************")


console.log("******************* Product of Array Except Self *******************")
console.log("Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].\n" +
    "\n" +
    "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.\n" +
    "\n" +
    "You must write an algorithm that runs in O(n) time and without using the division operation.")

const productOfArray = (nums) => {
    //declare first array
    let leftArr = [];
    let leftMultiplication = 1;

    //for every iteration
    for (let i = 0; i < nums.length; i++) {
        leftArr[i] = leftMultiplication
        leftMultiplication = leftMultiplication *  nums[i];
    }
    console.log(leftArr, " arr")

    let rightArr = [];
    let rightMultiplication = 1;

    for (let i =nums.length-1 ; i >= 0; i--) {
        rightArr[i] = rightMultiplication;
        rightMultiplication *= nums[i];
        rightArr[i] *= leftArr[i]; //this additional step saves us from having another iteration. We can do the multiplication at the spot.
    }
    return rightArr;
}

console.log(productOfArray([1,2,3,4]))
//expected output [24,12,8,6]
//https://leetcode.com/problems/product-of-array-except-self/discuss/694266/Javascript-Solution-(No-Division)-(With-Explanation)
console.log("******************* ENDS Product of Array Except Self *******************")