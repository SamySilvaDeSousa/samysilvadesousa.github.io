let arrastando = false;
let inicioX;
let scrollInicial;
let velocidade = 0;
let animacaoId;
let ultimoX;

const containerRolagem = document.getElementById("wrapper");

function telaGrande() {
  return window.innerWidth > 1024;
}

containerRolagem.addEventListener("mousedown", (e) => {
  if (!telaGrande()) return;
  arrastando = true;
  inicioX = e.pageX - containerRolagem.offsetLeft;
  scrollInicial = containerRolagem.scrollLeft;
  velocidade = 0; // Reseta a velocidade
  ultimoX = e.pageX; // Guarda a posição inicial do mouse
  cancelAnimationFrame(animacaoId); // Para qualquer inércia anterior
});

containerRolagem.addEventListener("mouseleave", () => {
  if (arrastando) {
    arrastando = false;
    aplicarInercia();
  }
});

containerRolagem.addEventListener("mouseup", () => {
  if (arrastando) {
    arrastando = false;
    aplicarInercia();
  }
});

containerRolagem.addEventListener("mousemove", (e) => {
  if (!arrastando || !telaGrande()) return;
  const x = e.pageX - containerRolagem.offsetLeft;
  const deslocamento = (x - inicioX) * 1; // Ajuste de sensibilidade
  containerRolagem.scrollLeft = scrollInicial - deslocamento;

  // Calcula a velocidade corretamente (direção da rolagem)
  velocidade = (ultimoX - e.pageX) * 0.5; // Ajuste fino da velocidade
  ultimoX = e.pageX; // Atualiza a posição do mouse
});

function aplicarInercia() {
  if (Math.abs(velocidade) > 0.5) {
    containerRolagem.scrollLeft += velocidade; // Aplica a velocidade na direção correta
    velocidade *= 0.97; // Reduz a velocidade gradualmente
    animacaoId = requestAnimationFrame(aplicarInercia);
  }
}


const container = document.getElementById('wrapper');

function atualizarMascaraScroll() {
  const scrollEsquerda = container.scrollLeft;
  const scrollMaximo = container.scrollWidth - container.clientWidth;

  // Remove todas
  container.classList.remove('borrao-direito', 'borrao-esquerdo');

  // Se estiver 100% à esquerda, tira o esfumado da ESQUERDA
  if (scrollEsquerda <= 0) {
    container.classList.add('borrao-direito');
    container.classList.add('mascara-scroll');
  }

  // Se estiver 100% à direita, tira o esfumado da DIREITA
  if (scrollEsquerda >= scrollMaximo - 1) {
    container.classList.add('borrao-esquerdo');
  }
}

container.addEventListener('scroll', atualizarMascaraScroll);
window.addEventListener('load', atualizarMascaraScroll);