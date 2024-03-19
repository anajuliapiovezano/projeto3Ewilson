const botoes =document.querySelectorAll(".botoes");

for(let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function(){
        for (let j= 0; j< botoes.length; jj++){
            botoes[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo")
    }
}
