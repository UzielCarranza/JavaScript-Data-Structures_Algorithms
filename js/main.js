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

const newMovie = new DisplayMovieInformation("IronMan", "John Doe","Action", "2011", "9");
newMovie.displayInformation();
