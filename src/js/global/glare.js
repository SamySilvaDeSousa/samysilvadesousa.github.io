const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const glare = card.querySelector('.glare');

  card.addEventListener('mousemove', (event) => {
    const { width, height, top, left } = card.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;

    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;

    glare.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, var(--tertiary), var(--tertiary-vanish) 60%)`;
  });

  card.addEventListener('mouseenter', () => {
    glare.style.opacity = 1;
  });

  card.addEventListener('mouseleave', () => {
    glare.style.opacity = 0;
  });
});