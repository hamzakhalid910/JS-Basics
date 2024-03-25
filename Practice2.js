const work = async () => {
  /*
//Number 1

// console.log(array.reduce(sum));

// function sum(a, b) {
//     return a + b;
// }

// console.log(array.map(sum));
// console.log(sum);

// console.log(array);
// console.log(array.length);

// let a = "11";
// let b = "12";
// let result = a.concat(b);
// console.log(result);

let array = [1, [2, [3, 4], 50]];
console.log(array.length);
// console.log(array[1][1]);
temp = array.toString(array);
console.log(temp);
console.log(Number(temp[1]));
console.log(array.map(Number()));

function FlatenArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "[") {
    }
  }
}



let array = [1, [2, [3, 4], 50]];

function FlatenArray(array) {
  let tempArray = array.toString();
  console.log(tempArray);
  console.log(tempArray.length);
  let finalArray = [];
  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i] != ",") {
      for (let j = i + 1; j < 10; j++) {
        if (tempArray[j] != ",") {
          //   console.log(tempArray[i]);
          console.log(tempArray[j]);
          //   let concat = tempArray[i].concat(tempArray[j]);

          //   console.log(concat);
        }
      }

      finalArray.push(tempArray[i]);
    }
  }
  return finalArray;
}

console.log(FlatenArray(array));
*/

  //Number 1
  console.log("\n\n==========Question 1===============");

  let array = [1, [2, [3, 4], 50]];
  let nestedArray = [];

  function FlatenArray(array) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        FlatenArray(array[i]);
      } else {
        nestedArray.push(array[i]);
      }
    }
  }

  FlatenArray(array);
  console.log(nestedArray);

  // Number 2
  console.log("\n\n==========Question 2===============");
  function hasUniqueCharacters(string) {
    for (let j = 0; j < string.length; j++) {
      for (let i = j + 1; i < string.length; i++) {
        if (string[j] === string[i]) {
          return false;
        }
      }
    }
    return true;
  }

  console.log(hasUniqueCharacters("abcdefghijklmnoqrstuvwxyz"));

  //Number 3
  console.log("\n\n==========Question 3===============");

  function isAnagram(word1, word2) {
    if (word1.length != word2.length) {
      return false;
    }
    for (let i = 0; i < word1.length; i++) {
      console.log(word2[i]);
      if (!word1.includes(word2[i])) {
        return false;
      }
    }
    return true;
  }

  // let word1 = 'hamza';
  // let word2 = 'hammad';
  // console.log(word1[0], word2[0]);
  // console.log(word1.includes(word2[0]));

  console.log(isAnagram("listeen", "silennt"));

  //Nummber 4
  console.log("\n\n==========Question 4===============");

  function isBalancedParentheses(parentheses) {
    let openParentheses = 0;
    let closeParentheses = 0;
    for (let i = 0; i < parentheses.length; i++) {
      if (parentheses[i] === "(") {
        openParentheses++;
        console.log(`Value of open parentheses is ${openParentheses}`);
      } else if (parentheses[i] === ")") {
        closeParentheses++;
        console.log(`Value of close parentheses is ${closeParentheses}`);
      }
    }
    if (openParentheses === closeParentheses) {
      // console.log(`Value of close parentheses is ${closeParentheses}`);
      return true;
    } else {
      return false;
    }
  }

  let parentheses = "()(()";
  // console.log(parentheses);
  // console.log(parentheses[0]);
  // console.log(parentheses[1]);
  // console.log(parentheses.length);

  console.log(isBalancedParentheses(parentheses));

  // Number 5
  console.log("\n\n==========Question 5===============");

  const double = (a) => a * 2;

  let numbers = [1, 2, 3, 80];
  let doubleNumbers = numbers.map((number) => number * 2);
  console.log(doubleNumbers);

  // Number 6
  console.log("\n\n==========Question 6===============");

  function makeImmutable(object) {
    console.log(object);
    Object.freeze(object);
    return "Object is now Immutable";
  }

  let object = {
    name: "Hamza",
    class: "BSE",
  };

  console.log("Try to change name before freezing function");
  object.name = "Hammad";
  console.log(object);

  console.log("Called immutable function");
  console.log(makeImmutable(object));
  console.log("Try to change name after makeImmutable function");
  object.name = "Azaan";
  console.log(object);

  //Number 7
  console.log("\n\n==========Question 7===============");

  const fun = async () => {
    let apiData = await fetch("https://dummyjson.com/products/1");
    console.log(apiData.ok);
    if (apiData.ok) {
      console.log("SUCCESS");
    } else {
      console.log("UNSUCCESSFUL");
    }
  };

  await fun();

  //   Number 8
  console.log("\n\n==========Question 8===============");

  function delayedGreetings(callback, delay) {
    setTimeout(() => {
      // console.log("Delay Greet");
      console.log(callback());
    }, delay);
  }

  function greet() {
    return "Greet here";
  }
  delayedGreetings(greet, 2000);

  // Number 9
  console.log("\n\n==========Question 9===============");

  let array1 = [1, 2, 3, 4];

  function sumArray() {
    return array1.reduce(sum, {});
  }

  function sum(a, b) {
    console.log(a);
    let obj = { sum: (a.sum || 0) + b };
    console.log("return ", obj);
    return obj;
  }

  console.log(sumArray());

  // Number 10
  console.log("\n\n==========Question 10===============");

  let person1 = {
    name: "Hamza",
    age: 22,
    subject: { first: "OOP", second: "DSA" },
  };

  // Deep Copy using assign()

  // let person2 = Object.assign({}, person1);

  // person2.age = 23;
  // person2.subject.first = "C";

  //Stringify

  function deepCopy(object) {
    return JSON.parse(JSON.stringify(object));
  }

  let person2 = console.log(deepCopy(person1));
  console.log(person1);
};

work();
