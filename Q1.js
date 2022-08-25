const tela = document.getElementById('tela');

var numMaior = 0; 
var numMenor = 99999999; 

for (let i = 0; i < 3; i++){
    var num = Number(prompt("Número: "));
    if (num > numMaior){
        numMaior = num; 
    }

    if (num < numMenor){
        numMenor = num; 
    }
}

tela.innerHTML = "Número maior: " + numMaior + "<br>" + "\nNúmero menor: " + numMenor; 