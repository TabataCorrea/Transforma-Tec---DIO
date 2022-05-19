var pessoa = {
    //propriedade : valor
    "nome" : "Tábata",
    "idade" : 25,
}

//obtendo dados do JSON

console.log("Dados da pessoa: ", pessoa)

//obtendo uma proriedade do objeto pessoa
var idade = pessoa.idade;

console.log("Idade da pessoa:", idade)

pessoa.nome = "Caroline"

console.log("Novo nome da pessoa:", pessoa.nome)