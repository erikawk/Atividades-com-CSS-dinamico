function procuraData() {
    //Dados: 
    var dataEspecifica = document.getElementById("dataEspecifica").value;
    var tabela = document.getElementsByTagName("td");
    
    //Procura pela data específica: 
    if(dataEspecifica <= 31){
        for (let i = 0; i < tabela.length; i++) {
            if (tabela[i].innerHTML == dataEspecifica) {
                tabela[i].style.backgroundColor = "pink"
            }
        }
    }else{
        alert("Dia inválido!")
    }
    
}

function procuraDiferencaDias(){
    //Dados:
    var dataInicio = document.getElementById("dataInicio").value;
    var dataFinal = document.getElementById("dataFinal").value;
    var tabela = document.getElementsByTagName("td");

    var diferencaDias = dataFinal - dataInicio;

    var diferencaElement = document.createElement('b');

    var mostraDiferenca = document.getElementById("mostraDiferenca");
    diferencaElement.append(diferencaDias);
    mostraDiferenca.appendChild(diferencaElement);

    for (let i = 0; i < tabela.length; i++) {
        if(dataInicio < dataFinal){
            if (i >= dataInicio && i <= dataFinal) {
                for(let i = dataInicio; i <= dataFinal; i++){
                    tabela[i].style.backgroundColor = "aqua"
                }
            }else{
                tabela[i].style.backgroundColor = "orange"
            }
        }else if(dataInicio >= dataFinal){
            alert("Dia inválido!")    
            break;    
        }
        
        
    }
    
}

// function procuraDataFinal(){
//     var dataFinal = document.getElementById("dataFinal").value;
// }