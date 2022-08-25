const tela = document.getElementById('tela');
 
var F = 0;
var F1 = 1;
var F2 = 2;
var num;
 
 
while(F2 <= 50000){
    F = F + F2;
    num = F2;
    F2 += 2 * (F2 + F1);
    F1 += 2 * num;    
}
 
tela.innerHTML = F;
