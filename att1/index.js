function pesquisar(){
    var pesquisa = document.getElementById("pesquisa").value.toUpperCase();
    var nome = document.getElementsByClassName("nome");
    
    if(pesquisa == ""){
        alert("Insira um nome, por favor");
    }else{
        for (let i = 0; i < nome.length; i++){
            var res = nome[i].innerHTML.toUpperCase().match(pesquisa);
            if(res){
                nome[i].style.color = "green";
                nome[i].style.fontWeight = "bold";
            }else{
                // nome[i].style.fontWeight = "bold";
                nome[i].style.color = "red";
            }
        }
    }
}
