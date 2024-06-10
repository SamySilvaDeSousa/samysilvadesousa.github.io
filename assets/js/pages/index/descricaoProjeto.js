function abrirModal(overlayId) {
  document.getElementById(overlayId).style.display = 'flex';
}

function fecharModal(overlayId) {
  document.getElementById(overlayId).style.display = 'none';
}

window.onclick = function(event) {

  const overlayIds = ['descricao-overlay-1', 'descricao-overlay-2']; // Adicionar mais IDs conforme necessário
  overlayIds.forEach(overlayId => {
    let descricao = document.getElementById(overlayId);
    if (event.target === descricao) {
      descricao.style.display = 'none';
    }
  });
};