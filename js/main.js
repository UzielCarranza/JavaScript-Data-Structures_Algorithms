console.log("Fizzbuzz");
console.log("Given an integer n, return a string array answer (i -indexed) where  ");
console.log("answer[i] == \"FizzBuzz\" if i is divisible by 3 and 5.\n" +
    "answer[i] == \"Fizz\" if i is divisible by 3.\n" +
    "answer[i] == \"Buzz\" if i is divisible by 5.\n" +
    "answer[i] == i (as a string) if none of the above conditions are true");


const fizzBuzz = (n) => {
    // initialize array to hold values
    const answer = []

    //iterate over the number
    for (let i = 1; i <= n; i++) {
        //if i is divisible by 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            //add FizzBuzz to the array
            answer.push("FizzBuzz " + i)
        }
        //    else if its divisible by 3
        else if (i % 3 === 0) {
            //add Fizz to array
            answer.push("Fizz " + i)
        }
        //    else if is divisible by 5
        else if (i % 5 === 0) {
            //push Buzz to the array
            answer.push("Buzz " + i)
        } else {
            //else change the number to its string value
            answer.push(i.toString())
        }
    }

    //return final array
    return answer
}

console.log(fizzBuzz(15))

console.log("******************* classes in JavaScript *******************")

class movie {

    constructor(title, director, genre, releaseYear, rating) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }

    movie() {
    }
}


class DisplayMovieInformation extends movie {

//
    displayInformation() {
        console.log(`${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}.
         It received a rating of ${this.rating}`)
    }
}

const newMovie = new DisplayMovieInformation("IronMan", "John Doe", "Action", "2011", "9");
newMovie.displayInformation();


console.log("******************* classes in JavaScript *******************")


console.log("******************* REVERSE ARRAY *******************")


function reverseString(input) {
    // Step 1. Use the split() method to return a new array
    // Step 2. Use the reverse() method to reverse the new created array
    // Step 3. Use the join() method to join all elements of the array into a string
    //Step 4. Return the reversed string
    return input.split("").reverse().join("");
}

console.log(reverseString("words new "))


let url = `https://api.github.com/UzielCarranza`

async function getFetch(url) {
    const response = await fetch('https://api.github.com/users/UzielCarranza')
        .then(response => response.json())

    console.log(response)
}


getFetch(url);


console.log("******************* REVERSE ARRAY *******************")


console.log("******************* Two Sum *******************")

//given array of integers: nums and target
const twoSum = (array, targetNum) => {
    let result = [];

    //iterate over array of nums
    for (let i = 0; i <= array.length; i++) {
        //    iterate twice to get the second number
        for (let j = i + 1; j <= array.length; j++) {
            if (array[i] + array[j] === targetNum) {
                result.push(i);
                result.push(j)
            }
        }
    }
    console.log(result)
}

let arr = [23, 2, 3, 4];
twoSum(arr, 6);

//return indices of the two numbers that add up to the target value


console.log("******************* Two Sum *******************")


console.log("******************* contains duplicate *******************")

//given array of numbers

const containsDuplicates = (arrayOfNums) => {
//    iterate over array
    for (let i = 0; i <= arrayOfNums.length; i++) {
        for (let j = i + 1; j <= arrayOfNums.length; j++) {
            if (arrayOfNums[i] === arrayOfNums[j]) {
                return true
            }
        }
    }
    return false

}

console.log(containsDuplicates([1, 2, 3, 1]));
//return true if a value appears twice

//otherwise

//return false


console.log("******************* contains duplicate *******************")