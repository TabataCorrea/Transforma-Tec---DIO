let opcao = 0;
let aumento = 5;

let streaming = [
    {
        nome:"Amazon Prime",
        mensalidade: 32.00,
    },
    {
        nome:"HBO Max",
        mensalidade: 42.00,
    },
    {
        nome:"Disney Plus",
        mensalidade: 50.00,
    }
];

switch(opcao){
    case 0:
        streaming[0].mensalidade += aumento; //37
        console.log(streaming[0]);
        break;
    case 1:
        streaming[1].mensalidade += aumento;
        console.log(streaming[1]);
        break;
    case 2:
        streaming[2].mensalidade += aumento;
        console.log(streaming[2]);
        break; 
    default:
        console.log("Opção não encontrada.")
        console.log(streaming)

}