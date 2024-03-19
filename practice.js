function checkNumber(number) {
  if (number % 2 === 0) {
    console.log("Number is even");
  } else {
    console.log("Number is Odd");
  }
}

console.log(checkNumber(3));

//Number 2
function factorial(number) {
  if (number != 1) {
    return number * factorial(number - 1);
  }
  return number;
}

console.log(factorial(5));

//number 3

let people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];

let { name: name1, age: age1 } = people[0];
let { name: name2, age: age2 } = people[1];
let { name: name3, age: age3 } = people[2];

console.log(name1);
console.log(name2);

//Number 4

function reverse(name) {
  let reverse = "";
  for (i = name.length - 1; i >= 0; i--) {
    reverse = reverse + name[i];
  }
  return reverse;
}

console.log(reverse("hamza"));

//Number 5

function sumof(number) {
  let sum = 0;
  for (let z = 0; z < number.length; z++) {
    sum = sum + number[z];
  }
  return sum;
}

number = [1, 2, 3, 4];
console.log(sumof(number));

//Number 6

function maxArray(a) {
  let max = 0;
  for (let i = 0; i < a.length; i++) {
    max++;
  }
  return max;
}
let a = [1, 2, 3, 4];
console.log(maxArray(a));

//Number 7

function leapYear(days) {
  if (days % 4 === 0 || days % 100 != 0) {
    if (days % 400 === 0 && days % 100 === 0) {
      return "Leap Year";
    }
    return "Leap Year without division by 100";
  } else {
    return "Normal Year";
  }
}

console.log(leapYear(366));

//Number 8

function fibonacci(number) {
  let temp = false;
  for (let i = 0; i < number.length; i++) {
    if (number[i] === number[i - 1] + number[i - 2]) {
      temp = true;
    } else {
      temp = false;
    }
  }
  if (temp === true) {
    console.log("Its a Fibonacci Series");
  } else {
    console.log("It is not a fabinacci series");
  }
}
let array = [1, 2, 3, 5, 8];
fibonacci(array);

function detectNth(i) {
  if (array[i] === array[i - 1] + array[i - 2]) {
    return `${i} is a perefect finacci index`;
  } else {
    return `${i} is not perefect finacci index`;
  }
}
console.log(detectNth(3));

//Number 9

function countVowels(word) {
  let temp = 0;
  let lowercase = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (
      word[i] === "a" ||
      word[i] === "e" ||
      word[i] === "i" ||
      word[i] === "o" ||
      word[i] === "u"
    ) {
      temp++;
    }
  }
  return temp;
}
console.log(`Number of vowels are ${countVowels("Hamza")}`);

//Number 10
function assending(arr) {
  let temp = [];
  let index = 0;
  for (let i = arr.length; i >= 0; i--) {
    console.log(arr[i]);
    temp[index] = arr[i];
    index++;
  }
  return temp;
}

let arr = [1, 2, 3, 4, 5];
console.log(assending(arr));

//Number 11
function captilize(string) {
  let sentence = string;
  for (let i = 0; i <= sentence.length; i++) {
    if (sentence[i] === " ") {
      console.log(`This is space at index at ${i}`);
      console.log(sentence[i + 1]);
      sentence[i + 1] = sentence[i + 1].toUpperCase();
      console.log(sentence[i + 1].toUpperCase());
      console.log(sentence[i + 1]);
    }
  }
}
let sentence = "This is a sentence";

captilize("this is a sentence");

//Number 12
