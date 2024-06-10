const sections = [
  { icon: document.querySelector('.inicio-icon'), section: document.querySelector('#inicio') },
  { icon: document.querySelector('.sobremim-icon'), section: document.querySelector('#sobre') },
  { icon: document.querySelector('.tecnologias-icon'), section: document.querySelector('#tecnologias') },
  { icon: document.querySelector('.projetos-icon'), section: document.querySelector('#projetos') },
  { icon: document.querySelector('.contato-icon'), section: document.querySelector('#contato') }
];

const margem = 500;

function activateSectionIcon() {
  const scrollPosicao = window.scrollY + margem;

  sections.forEach(({ icon, section }) => {
    if (scrollPosicao >= section.offsetTop && scrollPosicao < section.offsetTop + section.offsetHeight) {
      icon.classList.add('ativo');
    } else {
      icon.classList.remove('ativo');
    }
  });
}

window.addEventListener('scroll', activateSectionIcon);