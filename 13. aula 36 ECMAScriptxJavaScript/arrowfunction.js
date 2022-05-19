function multiplicar2(x,y){

    return x*y;
}

let result = multiplicar2(4,5)

console.log("Resultado da função convencional: ", result)


// Declaração de arrow function
const multiplicar = (x, y = 1) => {

    return x * y;

}

let result2 = multiplicar(3, 2) // 6

console.log("Resultado da arrow function: ", result2)


//Declaração de arrow function otimizada

/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns {number} result
 */

const multiplicar3 = (x, y) => x * y;

let result3 = multiplicar3(6,7)

console.log("Resultado da segunda arrow function: ", result3)