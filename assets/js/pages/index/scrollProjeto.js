let isDragging = false;
let startX;
let scrollLeft;

const scrollableContainer = document.getElementById('projetos-conteudo');

scrollableContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - scrollableContainer.offsetLeft;
  scrollLeft = scrollableContainer.scrollLeft;
});

scrollableContainer.addEventListener('mouseleave', () => {
  isDragging = false;
});

scrollableContainer.addEventListener('mouseup', () => {
  isDragging = false;
});

scrollableContainer.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const x = e.pageX - scrollableContainer.offsetLeft;
  const walk = (x - startX) * 2; // Ajustar a sensibilidade
  scrollableContainer.scrollLeft = scrollLeft - walk;
});
