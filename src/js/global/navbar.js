const sections = [
  { icon: document.querySelector('#inicio-icon'), section: document.querySelector('#inicio') },
  { icon: document.querySelector('#sobremim-icon'), section: document.querySelector('#sobre') },
  { icon: document.querySelector('#tecno-icon'), section: document.querySelector('#tecnologias') },
  { icon: document.querySelector('#projetos-icon'), section: document.querySelector('#projetos') },
  { icon: document.querySelector('#contato-icon'), section: document.querySelector('#contato') },
  
  { icon: document.querySelector('#descricao-icon'), section: document.querySelector('#descricao') },
  { icon: document.querySelector('#paginas-icon'), section: document.querySelector('#paginas') }
];

const margem = 500;

function activateSectionIcon() {
  const scrollPosicao = window.scrollY + margem;

  sections.forEach(({ icon, section }) => {
    if (icon && section) {
      if (scrollPosicao >= section.offsetTop && scrollPosicao < section.offsetTop + section.offsetHeight) {
        icon.classList.add('ativo');
      } else {
        icon.classList.remove('ativo');
      }
    }
  });
}

window.addEventListener('scroll', activateSectionIcon);
