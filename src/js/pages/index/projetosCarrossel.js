document.getElementById('prev').addEventListener('click', function() {
  let container = document.getElementById('projetos-super-container');
  container.scrollBy({ top: 0, left: -520, behavior: 'smooth' });
});

document.getElementById('next').addEventListener('click', function() {
  let container = document.getElementById('projetos-super-container');
  container.scrollBy({ top: 0, left: 520, behavior: 'smooth' });
});