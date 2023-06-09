/*

     Objetivo 1 - Quando clicarmos na seta de avançar temos que mostrar o próximo cartão da lista
            -passo 1- dar um jeito de pegar o elemento HTML da seta avançar

            -passo 2- dar um jeito de identificar o clique do usuário na seta avançar

            -passo 3- fazer aparecer o próximo cartão da lista

            -passo 4- buscar o cartão que está selecionado e esconder

    Objetivo 2 - Quando clicarmos na seta de avançar temos que mostrar o cartão da lista

            -passo 1- dar um jeito de pegar o elemento HTML da seta voltar

            -passo 2- dar um jeito de identificar o clique do usuário na seta voltar

            -passo 3- fazer aparecer o cartão anterior da lista

            -passo 4- buscar o cartão que está selecionado e esconder



*/

//-passo 1- dar um jeito de pegar o elemento HTML da seta avançar
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

//-passo 2- dar um jeito de identificar o clique do usuário na seta avançar

btnAvancar.addEventListener("click", function () {

   if(cartaoAtual === cartoes.length - 1) return

   //-passo 4- buscar o cartão que está selecionado e esconder
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");

  //-passo 3- fazer aparecer o próximo cartão da lista
  cartaoAtual++;
  console.log(cartaoAtual);
  cartoes[cartaoAtual].classList.add("selecionado");

});


/*Objetivo 2 - Quando clicarmos na seta de avançar temos que mostrar o cartão da lista

-passo 1- dar um jeito de pegar o elemento HTML da seta voltar

-passo 2- dar um jeito de identificar o clique do usuário na seta voltar

-passo 3- fazer aparecer o cartão anterior da lista

-passo 4- buscar o cartão que está selecionado e esconder

*/

btnVoltar.addEventListener("click", function () {

  if(cartaoAtual === 0) return;

  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");

 cartaoAtual--;
 console.log(cartaoAtual);
 cartoes[cartaoAtual].classList.add("selecionado");

 
});
