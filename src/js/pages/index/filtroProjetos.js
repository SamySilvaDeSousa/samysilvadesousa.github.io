function dropdownFiltroProjetos(tipo) {
  let filtros = document.querySelectorAll('.dropdown-filtro_projetos');

  if (tipo === 'filtrar') {
    filtros.forEach(function(filtro) {
      if (filtro.classList.contains('absolute')) {
        filtro.classList.add('hidden');
        filtro.classList.remove('absolute');
      } else {
        filtro.classList.remove('hidden');
        filtro.classList.add('absolute');
      }
    });
  } else {
    filtros.forEach(function(filtro) {
      filtro.classList.add('hidden');
      filtro.classList.remove('absolute');
    });
  }
}

function filtrarProjetos(tipo) {
  let projetos = document.querySelectorAll('#projeto-container');
  let button = document.getElementById('filtrar-dropdown_projetos');

  if (tipo === 'todos') {
    projetos.forEach(function(projeto) {
      projeto.classList.remove('hidden');
      projeto.classList.add('flex');
    });
    button.innerHTML = 'Todos<ion-icon name="caret-down-outline"></ion-icon>';
    let breve2 = document.querySelector('.embreve2');
    breve2.classList.remove('flex');
    breve2.classList.add('hidden');
    let breve3 = document.querySelector('.embreve3');
    breve3.classList.remove('flex');
    breve3.classList.add('hidden');
  } else {
    projetos.forEach(function(projeto) {
      if (projeto.classList.contains(tipo)) {
        projeto.classList.remove('hidden');
        projeto.classList.add('flex');
      } else {
        projeto.classList.remove('flex');
        projeto.classList.add('hidden');
      }
    });
    switch(tipo) {
      case 'frontend':
        button.innerHTML = 'Front-End<ion-icon name="caret-down-outline"></ion-icon>';
        break;
      case 'backend':
        button.innerHTML = 'Back-End<ion-icon name="caret-down-outline"></ion-icon>';
        break;
      case 'fullstack':
        button.innerHTML = 'Full-Stack<ion-icon name="caret-down-outline"></ion-icon>';
        break;
    }
  }

  setTimeout(function() {
    dropdownFiltroProjetos('fechar');
  }, 200);
}