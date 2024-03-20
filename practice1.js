const GAME_STATES = Object.freeze({
  NOT_STARTED: "started",
  PLAYING: "playing",
  FINISHED: "finish",
});

GAME_STATES.FINISHED = "finsihing";
console.log(GAME_STATES.FINISHED);

// Map
let array = [1, 2, 3, 4];

function square(num) {
  return num * num;
}

let newArray = array.map(square);
console.log(newArray);

let objArray = array.map((n) => ({ value: n }));
console.log(objArray);

// Filter
filteredArray = array.filter((a) => a > 2);
console.log(filteredArray + typeof filteredArray);

// JOIN
join = filteredArray.join();
console.log(join + typeof join);

//Mutable and Immutable

let name1 = "hamza";
let name2 = name1;
console.log(name1, name2);
name1 = "Hammad";
console.log(name1, name2);

// THese are separate values and cant be Changed. So this is an
// example of immutable

let person1 = {
  name: "Hamza",
  age: 18,
};

let person2 = person1;
console.log(person1, person2);
person1.name = "Hammad";
console.log(person1, person2);
//This is an example of mutable means that objects are mutable.
//as we change value of one the other changes due to reference.
//Objects are mutable.

//Prmises
/*
p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("This is promise 1");

    resolve("its is resolved");
  }, 2000);
});

//
//   resolve("it is resolved");

p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("This is promise 2");
    resolve("it is resolved");
    // reject("its is rejeced");
  }, 2000);
});

console.log(p1);
console.log(p2);

p1.then((value) => {
  console.log(value);
});

p2.catch((error) => {
  console.log("Error catched here");
});
*/

//Promises

ItemSold = new Promise((resolve, reject) => {
  setTimeout(() => {
    customer = false;
    payment = false;
    if (customer === true) {
      resolve('Item Sold');
    }
    else if (payment === true) {
      resolve('Payment Received');
    }
    else {
      reject("Item was not sold");
    }
  }, 5000); // Removed unnecessary comma here
});

ItemSold.then((message) => {
  console.log('it is resolved' + message);
}
).catch((error => {
  console.log("This is error in cattch with " + error);
}))

console.log('I am outside');