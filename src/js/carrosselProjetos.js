function criarCarrossel({ seletorContainer, seletorImagem, pastaImagens, nomesImagens }) {
  const container = document.querySelector(seletorContainer);
  const imagemCarrossel = document.querySelector(seletorImagem);

  if (!container || !imagemCarrossel) return;

  const botoesAnterior = container.querySelectorAll('.prev-button');
  const botoesProximo = container.querySelectorAll('.next-button');
  const pontos = container.querySelectorAll('.dot');

  // Detecta profundidade da URL para ajustar o caminho das imagens
  const profundidade = window.location.pathname.split('/').length - 1;
  const prefixo = profundidade > 1 ? '../'.repeat(profundidade - 1) : '';
  const imagens = nomesImagens.map(nome => `${prefixo}${pastaImagens}/${nome}`);

  let indiceAtual = 0;
  let intervaloAutoPlay;

  function atualizarCarrossel() {
    imagemCarrossel.style.backgroundImage = `url(${imagens[indiceAtual]})`;

    pontos.forEach((ponto, indice) => {
      ponto.classList.toggle('active', indice === indiceAtual);
    });

    iniciarAutoPlay();
  }

  function proximaImagem() {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    atualizarCarrossel();
  }

  function iniciarAutoPlay() {
    clearTimeout(intervaloAutoPlay);
    intervaloAutoPlay = setTimeout(proximaImagem, 8000);
  }

  function pausarAutoPlay() {
    clearTimeout(intervaloAutoPlay);
  }

  function retomarAutoPlay() {
    iniciarAutoPlay();
  }

  botoesAnterior.forEach(botao => {
    botao.addEventListener('click', () => {
      indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
      atualizarCarrossel();
    });
  });

  botoesProximo.forEach(botao => {
    botao.addEventListener('click', () => {
      indiceAtual = (indiceAtual + 1) % imagens.length;
      atualizarCarrossel();
    });
  });

  pontos.forEach(ponto => {
    ponto.addEventListener('click', () => {
      indiceAtual = parseInt(ponto.getAttribute('data-index'));
      atualizarCarrossel();
    });
  });

  imagemCarrossel.addEventListener('mouseenter', pausarAutoPlay);
  imagemCarrossel.addEventListener('mouseleave', retomarAutoPlay);

  atualizarCarrossel();
}

// Carrossel do DynDyn
criarCarrossel({
  seletorContainer: '#images-container',
  seletorImagem: '#carrossel--dyndyn',
  pastaImagens: '../src/assets/images',
  nomesImagens: [
    'DynDyn_Painel.png',
    'DynDyn_Transacoes.png',
    'DynDyn_Relatorios.png',
    'DynDyn_Contas.png',
    'DynDyn_Calculadoras.png'
  ]
});
// Carrossel do Trindade Advocacia
criarCarrossel({
  seletorContainer: '#images-container',
  seletorImagem: '#carrossel--trindade',
  pastaImagens: '../src/assets/images',
  nomesImagens: [
    'TrindadeAdvocacia_Home.png',
    'TrindadeAdvocacia_Sobre.png',
    'TrindadeAdvocacia_Servicos.png',
    'TrindadeAdvocacia_Equipe.png',
    'TrindadeAdvocacia_Contato.png'
  ]
});