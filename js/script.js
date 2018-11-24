//zadanie.1
const firstWord = "Hello";
const secondWord = "Word";

const newWord = (firstWord = "Hello", secondWord = "Word") => {return`${firstWord} ${secondWord}`}
console.log(newWord(firstWord, secondWord));

//zadanie.2
const multiply = (a, b = 1) => a * b;
console.log(multiply(5));
console.log(multiply(5,8));


//zadanie.3
// average(1) // 1
// average(1, 3) // 2
// average(1, 3, 6, 6) // 4

const average = (...numbers) => numbers.reduce((prev, curr) => prev + curr) / numbers.length;
console.log(average(1, 3, 6, 6));
console.log(average(1, 3));


//zadanie 4.
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]

// arr.reduce((x, y) => x + y)
const average = arr => grades.reduce( ( x, y ) => x + y ) / grades.length;
console.log(average(...grades));


//zadanie 5.
const names = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstName, , lastName] = names;
console.log(`${firstName} ${lastName}`);