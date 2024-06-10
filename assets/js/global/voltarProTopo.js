document.addEventListener('DOMContentLoaded', function () {
  let voltarProTopo = document.getElementById('subir');

  window.onscroll = function () {
    let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      voltarProTopo.style.opacity = '1';
      voltarProTopo.style.pointerEvents = 'auto';

      if (screenWidth < 730) {
        voltarProTopo.style.display = 'none';
      } else {
        voltarProTopo.style.display = 'flex';
      }
    } else {
      voltarProTopo.style.opacity = '0';
      voltarProTopo.style.pointerEvents = 'none';
    }
  };

  voltarProTopo.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});
