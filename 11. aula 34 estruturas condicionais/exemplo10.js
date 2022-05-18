let pessoas = [{
    nome:"Tábata",
    idade:25,
    naturalidade: "São Paulo"
},
{
    nome:"Rafael",
    idade:25,
    naturalidade: "Rio de Janeiro"
}]

//console.log(pessoas[0])
//console.log(pessoas[0].idade)
//console.log(pessoas[0].naturalidade)

//console.log(pessoas[1])
//console.log(pessoas[1].idade)
//console.log(pessoas[1].naturalidade)

if(pessoas[0].idade > pessoas[1].idade){
    console.log(pessoas[0].nome, "é mais velho que", pessoas[1].nome)
}else if(pessoas[0].idade < pessoas[1].idade){
    console.log(pessoas[0].nome, "é mais novo que", pessoas[1].nome)
}else{
    console.log(pessoas[0].nome, "tem a mesma idade que", pessoas[1].nome)
}