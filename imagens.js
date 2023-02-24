let imagemDaEstrada;
let imagemDoJogador;
let imagemDoCarro1;

// sons
let trilhaSonora;
let colisaoSom;
let pontoSom;

// carregamento das imagens
function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoJogador = loadImage("imagens/ator-1.png");
  imagemDoCarro1 = loadImage("imagens/carro-1.png");
  imagemDoCarro2 = loadImage("imagens/carro-2.png");
  imagemDoCarro3 = loadImage("imagens/carro-3.png");
  imagemDoCarro4 = loadImage("imagens/carro-4.png");
  imagemDoCarro5 = loadImage("imagens/carro-5.png");
  trilhaSonora = loadSound("sons/trilha.mp3");
  colisaoSom = loadSound("sons/colidiu.mp3");
  pontoSom = loadSound("sons/pontos.wav");
  imagemCarros = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3, imagemDoCarro4, imagemDoCarro5]
}

