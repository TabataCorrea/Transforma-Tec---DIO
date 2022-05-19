let carros = [
    {
        modelo: "Celta",
        cor: "Preto",
        ano: "2014"
    },
    {
        modelo: "Uno",
        cor: "Branco",
        ano: "2000"  
    },
    {
        modelo: "Brava",
        cor: "Cinza",
        ano: "1994" 
    },
    {
        modelo: "Corcel",
        cor: "Caramelo",
        ano: "1980" 
    }
]

console.log(typeof(carros))

carros.forEach (carro => {
    carro.cor = "azul"
    console.log (carro)
})