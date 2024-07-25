document.addEventListener('DOMContentLoaded', function() {
  var logo = document.getElementById('logo');
  var logoFooter = document.getElementById('logo-footer');

  if (logo) {
    logo.addEventListener('click', function() {
      var audio = new Audio('../src/assets/audio/buzina.mp3');
      audio.volume = 0.25;
      audio.play();
    });
  }

  if (logoFooter) {
    logoFooter.addEventListener('click', function() {
      var audio = new Audio('../src/assets/audio/buzina.mp3');
      audio.volume = 0.25;
      audio.play();
    });
  }
});
