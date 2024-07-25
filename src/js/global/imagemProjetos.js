function abrirImagem(id) {
  document.getElementById('modal-imagem_' + id).classList.remove('hidden');
  document.getElementById('modal-imagem_' + id).classList.add('flex');
}

function fecharImagem(id) {
  setTimeout(function() {
    document.getElementById('modal-imagem_' + id).classList.add('hidden');
    document.getElementById('modal-imagem_' + id).classList.remove('flex');
  }, 50);
}

function clicarFora(event, id) {
  const modal = document.getElementById('modal-imagem_' + id);
  const imgContainer = modal.querySelector('img');

  if (!imgContainer.contains(event.target)) {
    fecharImagem(id);
  }
}
