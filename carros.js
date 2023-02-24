// Carro
let yCarros = [40, 96, 150, 210, 261];
let velocidadeCarros = [2, 3.2, 2.5, 4, 2];
let xCarros = [600, 600, 600, 600, 600];


// size do carro
let t2 = 50;
let t3 = 40;

// funções do carro 1 
function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    image(imagemCarros[i], xCarros[i], yCarros[i], t2, t3);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function resetaPosicao(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
      if (passouATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouATela(xCarro){
  return xCarro < -60;
}
