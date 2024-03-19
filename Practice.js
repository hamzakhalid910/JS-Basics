//Number 1

function checkNumber(number) {
    if (number % 2 == 0) {
        return even;
    }
    else {
        return 'odd';
    }
}

console.log(checkNumber(5));

//Number 1 

function checkNumber1(number) {
    if ((number & 1) == 0) {
        return 'even'
    }
    else {
        return 'odd'
    }
}

console.log(checkNumber1(2));

// Number 2

function factorial(number) {
    while (number != 1) {
        return number * factorial(number - 1);
    }
}


console.log(factorial(5));