// Criar o Canvas
function setup() {
    createCanvas(500, 400);
    trilhaSonora.loop();
  }
  
  // exibir/executar itens no canvas
  function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    movimentaVaca();
    resetaPosicao();
    verificaColisao();
    incluiPontos();
    marcaPonto();
  }
  
  
  
  
  
  
  