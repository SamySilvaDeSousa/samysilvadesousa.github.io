function dropdownFiltroTecnologias(tipo, fechar = false) {
  let filtros = document.querySelectorAll('.dropdown-filtro_tecnologias');

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
  } else if (fechar) {
    filtros.forEach(function(filtro) {
      filtro.classList.add('hidden');
      filtro.classList.remove('absolute');
    });
  }
}

function filtrarTecnologias(tipo) {
  let tecnologias = document.querySelectorAll('#tooltip-container_tecnologia');
  let button = document.getElementById('filtrar-dropdown_tecnologias');

  if (tipo === 'todos') {
    tecnologias.forEach(function(tecnologia) {
      tecnologia.classList.remove('hidden');
    });
    button.innerHTML = 'Todos<ion-icon name="caret-down-outline"></ion-icon>';
    let breve = document.querySelector('.embreve');
    breve.classList.add('hidden');
  } else {
    tecnologias.forEach(function(tecnologia) {
      if (tecnologia.classList.contains(tipo)) {
        tecnologia.classList.remove('hidden');
      } else {
        tecnologia.classList.add('hidden');
      }
    });
    switch(tipo) {
      case 'frontend':
        button.innerHTML = 'Front-End<ion-icon name="caret-down-outline"></ion-icon>';
        break;
      case 'backend':
        button.innerHTML = 'Back-End<ion-icon name="caret-down-outline"></ion-icon>';
        break;
      case 'banco':
        button.innerHTML = 'Banco de Dados<ion-icon name="caret-down-outline"></ion-icon>';
        break;
      case 'versionamento':
        button.innerHTML = 'Front-End<ion-icon name="caret-down-outline"></ion-icon>';
        break;
    }
  }

  setTimeout(function() {
    dropdownFiltroTecnologias('fechar', true);
  }, 200);
}