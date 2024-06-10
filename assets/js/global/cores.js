document.addEventListener('DOMContentLoaded', () => {
  // Recupera a cor do localStorage e aplica
  const corSalva = localStorage.getItem('corTema');
  if (corSalva) {
    ativarCor(corSalva);
  }
});

const config = document.querySelector('#config');

config.addEventListener('click', () => {
  document.querySelector('.cores').classList.toggle('aberto');
});

function ativarCor(cor) {
  const cores = {
    'azul': ['rgb(0, 170, 255)', 'white', 'rgb(0, 45, 111)', 'rgb(0, 20, 45)', 'rgb(0, 80, 135)', 'gray', 'rgb(0, 100, 22)'],
    'verde': ['rgb(0, 197, 0)', 'white', 'rgb(0, 62, 0)', 'rgb(0, 25, 1)', 'rgb(0, 100, 22)', 'gray', 'rgb(0, 80, 135)']
  };

  if (cor in cores) {
    const propriedades = ['--primary', '--secundary', '--tertiary', '--bg', '--sombra', '--sombra-2', '--sombra-3'];
    propriedades.forEach((propriedade, index) => {
      document.documentElement.style.setProperty(propriedade, cores[cor][index]);
    });

    // Atualizar favicon
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.href = `../../assets/files/svg/global/favicon-${cor}.svg`;
    } else {
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.href = `favicon-${cor}.ico`;
      document.head.appendChild(newFavicon);
    }

    document.querySelector('.cores').classList.remove('aberto');
    localStorage.setItem('corTema', cor);
  }
}
