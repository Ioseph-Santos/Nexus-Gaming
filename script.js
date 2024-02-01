//-------------------------------------------------- Fazendo quadrados -------------------------------------------
// var container = document.querySelector(".header")
// var quadrados = [];
// for (var i = 0; i < 395; i++) {
//   var quadrado = document.createElement('div');
//   quadrado.classList.add('element');
//   container.appendChild(quadrado);
//   quadrados.push(quadrado);
// }
//---------------------------------------------------ANIMAÇÃO GRID MELHOR ATÉ AGORA ----------------------------------
// anime({
    
//     targets: quadrados,
//     scale: [
//       {value: .1, easing: 'easeOutSine', duration: 500},
//       {value: 1, easing: 'easeInOutQuad', duration: 1200}
//     ],
//     loop: true,
//     delay: anime.stagger(200, {grid: [79, 5], from: 'center'})

//   });
import anime from 'node_modules/animejs/lib/anime.es.js';
const anime = require('animejs');
  // ------------------------------------------------ Mudando de cor o nome -------------------------------------------
  var titulo = document.querySelector("#h1")
  var span = document.querySelector(".span")
  var colorsExamples = anime.timeline({
    easing: 'easeInOutQuad',
    
  })
  .add({ targets: titulo, translateY: -20 }, 0)
  .add({ targets: span, translateY: -20 }, 0);
  // ------------------------------------------------ Animando o nome E-sports ---------------------------------------
  var esports = document.querySelector(".break")
 function movimento(){
    anime({
      targets: esports,
      easing: 'easeInOutQuad',
      direction: 'alternate',
      translateX: 100,
      loop: true
    })
 }
 movimento()
 // ------------------------------------------------ Animação do time -------------------------------------------------
     // Obtém a referência da imagem
     var imagem = document.querySelector('.time');

     window.addEventListener('scroll', function() {

       var scrollY = window.scrollY;
      console.log(scrollY)

       if (scrollY > 420) {
        console.log('oi')

        imagem.style.marginTop = '50px'
       }
       if (scrollY<420){
        imagem.style.marginTop = '500px'
       }
     });
//-----------------------------------------------------Gira a faixa --------------------------------------------------
var bloco = document.querySelectorAll(".bloco1")
function mov(){
  anime({
    targets: bloco,
    translateX: '-500%', // Move 100% da largura da tela
    easing: 'easeInOutQuad', // Movimento linear
    duration: 5000, // Duração da animação em milissegundos
    
  });
  }
function mov2(){
  anime({
    targets: bloco,
    translateX: '0%', // Move 100% da largura da tela
    easing: 'easeInOutQuad', // Movimento linear
    duration: 5000, // Duração da animação em milissegundos
    
  });
}

setInterval(function(){
  mov()

  },3000)
setInterval(function(){
    mov2()
  
  },6000)
