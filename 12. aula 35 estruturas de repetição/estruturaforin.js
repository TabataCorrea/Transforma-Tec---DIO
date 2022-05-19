let usuario = {
    nome: 'Tabata',
    idade: 25,
    email: 'tabata@tabata.com'
}

console.log(usuario["email"])
console.log(usuario["nome"])
console.log(usuario.idade)

for (propriedade in usuario) {
    console.log("Propriedade do usuário: " + usuario[propriedade])
}