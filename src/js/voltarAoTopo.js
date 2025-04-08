document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("voltarAoTopo");

  window.addEventListener("scroll", function () {
      if (document.documentElement.scrollTop > 200) {
          button.style.opacity = "1";
          button.style.visibility = "visible";
      } else {
          button.style.opacity = "0";
          button.style.visibility = "hidden";
      }
  });

  // Voltar ao topo suavemente ao clicar
  button.addEventListener("click", function () {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });
});
