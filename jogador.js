// jogador
let t1 = 30;
let xJogador = 100;
let yJogador = 366;
let Hitou = false;
let meusPontos = 0;


// funções do jogador
function mostraAtor(){
  image(imagemDoJogador, xJogador, yJogador, t1, t1);
}

function movimentaVaca(){
  if (keyIsDown(UP_ARROW)){
    yJogador -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yJogador += 3;
    }
  }
  if (keyIsDown(LEFT_ARROW)){
    if(podeSeMover2()){
      xJogador -= 3;
    }
  }
  if (keyIsDown(RIGHT_ARROW)){
    if(podeSeMover3()){
      xJogador += 3;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    Hitou = collideRectCircle(xCarros[i], yCarros[i], t2, t3, xJogador, yJogador, 15)
    if (Hitou){
      Colidiu();
      colisaoSom.play();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}  
function Colidiu(){
  xJogador = 100;
  yJogador = 366;
}
  
function incluiPontos(){
  textAlign(CENTER)
  textSize(25);
  fill(201,27,94)
  text(meusPontos, width/5, 25)
}

function marcaPonto(){
  if  (yJogador < 15){
    Colidiu();
    meusPontos += 1;
    pontoSom.play();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yJogador < 366;
}

function podeSeMover2(){
  return xJogador > 0;
}

function podeSeMover3(){
  return xJogador < 450;
}
