let sombraCursor = document.querySelector('.sombra-cursor');

document.addEventListener('mousemove', function(e) {
  sombraCursor.style.left = `${e.clientX}px`;
  sombraCursor.style.top = `${e.clientY}px`;
});

function toggleGrow(event) {
  if (event.type === 'mouseover') {
    sombraCursor.classList.add('grow');
  } else {
    sombraCursor.classList.remove('grow');
  }
}

// Seleciona links e botões e adiciona os event listeners
let interactiveElements = Array.from(document.querySelectorAll('a, button'));

interactiveElements.forEach(element => {
  element.addEventListener('mouseover', toggleGrow);
  element.addEventListener('mouseleave', toggleGrow);
});

const botaoHighlight = document.querySelector('.cursor-highlight');

botaoHighlight.addEventListener('click', function() {
  sombraCursor.classList.toggle('hidden');
  
  // Alternar o ícone usando uma classe
  if (botaoHighlight.classList.contains('active')) {
    botaoHighlight.innerHTML = '<span class="material-symbols-outlined">highlight_mouse_cursor</span>';
  } else {
    botaoHighlight.innerHTML = '<span class="material-symbols-outlined">arrow_selector_tool</span>';
  }
  botaoHighlight.classList.toggle('active');

  document.querySelector('.cores').classList.remove('aberto');
});