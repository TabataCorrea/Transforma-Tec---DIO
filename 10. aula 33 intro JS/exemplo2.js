let globalVar = "Oi, global"

function global() {
    console.log(globalVar);
}

function global2() {
    let functionVar = "Oi, função"
    console.log(globalVar);
    console.log(functionVar);
}

global()
global2()
console.log(functionVar);