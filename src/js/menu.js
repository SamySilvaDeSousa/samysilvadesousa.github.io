const button = document.querySelector('#menu__button');
const menu = document.querySelector('#menu');
const img = document.querySelector('#menu__img');

// Função para detectar caminho relativo correto
function getImagePath(fileName) {
  // Verifica se a URL atual tem subpastas
  const depth = window.location.pathname.split('/').length - 1;
  const prefix = depth > 1 ? '../' : ''; // usa '../' se estiver em subpasta
  return `${prefix}src/assets/images/${fileName}`;
}

button.addEventListener('click', function () {
  const isHidden = menu.style.opacity === "0" || menu.style.opacity === "";

  if (isHidden) {
    menu.style.opacity = "1";
    menu.style.visibility = "visible";

    img.src = getImagePath('Close.svg');
    img.alt = 'Fechar o Menu';
    img.style.width = '20px';
    img.style.height = '20px';
  } else {
    menu.style.opacity = "0";
    setTimeout(() => {
      menu.style.visibility = "hidden";
    }, 300);

    img.src = getImagePath('Menu.svg');
    img.alt = 'Abrir o Menu';
    img.style.width = '56px';
    img.style.height = '56px';
  }
});
