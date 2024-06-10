const grab = document.querySelector('.projetos-conteudo');

function handleGrabbingMouseDown() {
  grab.classList.add('grabbing');
}

function handleGrabbingMouseUp() {
  grab.classList.remove('grabbing');
}

function handleGrabbingMouseLeave() {
  grab.classList.remove('grabbing');
}

function updateGrabbingCursor() {
  if (window.innerWidth <= 1420) {
    grab.addEventListener('mousedown', handleGrabbingMouseDown);
    grab.addEventListener('mouseup', handleGrabbingMouseUp);
    grab.addEventListener('mouseleave', handleGrabbingMouseLeave);
  } else {
    grab.classList.remove('grabbing');
    grab.removeEventListener('mousedown', handleGrabbingMouseDown);
    grab.removeEventListener('mouseup', handleGrabbingMouseUp);
    grab.removeEventListener('mouseleave', handleGrabbingMouseLeave);
  }
}

window.addEventListener('load', updateGrabbingCursor);
window.addEventListener('resize', updateGrabbingCursor);
