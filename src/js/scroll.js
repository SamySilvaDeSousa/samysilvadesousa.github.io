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
  velocidade = 0;
  ultimoX = e.pageX;
  cancelAnimationFrame(animacaoId);
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
  const deslocamento = (x - inicioX) * 1;
  containerRolagem.scrollLeft = scrollInicial - deslocamento;

  velocidade = (ultimoX - e.pageX) * 0.5;
  ultimoX = e.pageX;
});

function aplicarInercia() {
  if (Math.abs(velocidade) > 0.5) {
    containerRolagem.scrollLeft += velocidade;
    velocidade *= 0.97;
    animacaoId = requestAnimationFrame(aplicarInercia);
  }
}


const container = document.getElementById('wrapper');

function atualizarMascaraScroll() {
  const scrollEsquerda = container.scrollLeft;
  const scrollMaximo = container.scrollWidth - container.clientWidth;

  container.classList.remove('borrao-direito', 'borrao-esquerdo');

  if (scrollEsquerda <= 0) {
    container.classList.add('borrao-direito');
    container.classList.add('mascara-scroll');
  }

  if (scrollEsquerda >= scrollMaximo - 1) {
    container.classList.add('borrao-esquerdo');
  }
}

container.addEventListener('scroll', atualizarMascaraScroll);
window.addEventListener('load', atualizarMascaraScroll);