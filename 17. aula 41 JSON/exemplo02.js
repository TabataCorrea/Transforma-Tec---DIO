var frutas = '["uva", "maçã", "pera"]'

var frutasObj = JSON.parse(frutas)

console.log(frutasObj[0])

//array de objetos
var populacao = [

    //populacao[0]
    {"nome":"Ricardo","idade":27},

    //populacao[1]
    {"nome":"William","idade":29}
]


console.log("População: ",populacao)

//obtendo uma pessoa da populacao
console.log("Pessoa: ",populacao[0])

//obtendo uma propriedade de uma pessoa da populacao
console.log("Nome da pessoa:", populacao[1].nome)

