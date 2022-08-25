
var texto = prompt("Digite um texto: ")

    var textoInverso = '';
    for (var i = texto.length - 1; i >= 0; i--) {
        textoInverso += texto[i];
    }

tela.innerHTML = textoInverso; 
