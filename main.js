const botoes =document.querySelectorAll(".botoes");

for(let i = 0 <botoes.length; j++){
    botoes[i].onclick = function(){
        for (let j= 0; j< botoes.length; jj++){
            botoes[j].classlist.remover("ativo")
        }
        botoes[i].classlist.add("ativo")
    }
}