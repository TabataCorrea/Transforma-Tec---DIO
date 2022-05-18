//variável de escopo global
let a = 10;

const pi = 3.141592653589793;

console.log("PI: ", pi)



function multiplica(variavel, fpi){

    const pi = fpi * 2

    console.log("PI dentro da função:", pi);

    //variável de escopo de função
    let a = variavel *2;
    console.log("dentro da função:", a);
}

multiplica(a, pi)
console.log("fora da função:", a);