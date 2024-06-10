function filtrarProjeto(tipo) {
  let projetos = document.querySelectorAll('.projeto-container');
  if (tipo === 'todos') {
    projetos.forEach(function(projeto) {
      projeto.classList.remove('hidden');
    });
  } else {
    projetos.forEach(function(projeto) {
      if (projeto.classList.contains(tipo)) {
        projeto.classList.remove('hidden');
      } else {
        projeto.classList.add('hidden');
      }
    });
  }
}