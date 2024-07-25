function copiarEmail() {
  let tempInput = document.createElement("input");
  tempInput.value = "samysilvadesousa@gmail.com";
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  // Chama a função para mostrar o toast
  aparecerAlert();
}

function aparecerAlert() {
  const alert = document.querySelector('#alert');
  alert.classList.add('show');
  setTimeout(() => {
      alert.classList.remove('show');
  }, 2000);
}