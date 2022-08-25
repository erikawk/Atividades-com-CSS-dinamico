const tela = document.getElementById('tela');

var soma = 0; 
for (let i = 0; i < 3; i++){
    var num = Number.parseInt(prompt((i+1) + "º número: "))
    soma = soma + num; 
}

var media = soma / 3;

tela.innerHTML = "Média aritmética dos números digitados: " + "<br>" + media;