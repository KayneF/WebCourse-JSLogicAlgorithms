/**
 *  Escreva uma função que recebe 2 números e retorne o maior deles
 */ 

function max1(x, y) { // if else
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

function max2(x, y) { // cadeia if
    if (x > y) {
        return x;
    }  
    if (x < y) {
        return y;
    }
}

function max3(x, y) { // if return
    if (x > y) { return x; }
    return y;
}

function max4(x, y) {
    return x > y ? x : y; // ternária
}

const max5 = (x, y) => { // arrow function
    return x > y ? x : y; 
};

const max6 = (x, y) => x > y ? x : y; // arrow function (one liner)

console.log(max1(10, 20));
console.log(max2(10, 20));
console.log(max3(10, 20));
console.log(max4(10, 20));
console.log(max5(10, 20));
console.log(max6(10, 20));
