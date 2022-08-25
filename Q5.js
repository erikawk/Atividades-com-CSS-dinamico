const tela = document.getElementById('tela');

var numMaior = 0; 

do{
    var num = Number.parseInt(prompt("Número: "))
    if (num > numMaior){
        numMaior = num; 
    }
    var confirm = Number.parseInt(prompt("Você deseja digitar mais um número?\n1 - Sim\n2 - Não "));
}while (confirm != 2);

tela.innerHTML = "Maior número entre os digitados: " + "<br>" + numMaior;