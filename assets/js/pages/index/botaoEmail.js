function copiarEmail() {
  let tempInput = document.createElement("input");
  tempInput.value = "samysilvadesousa@gmail.com";
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  // Chama a função para mostrar o toast
  aparecerToast();
}

function aparecerToast() {
  const toast = document.querySelector('.toast');
  toast.classList.add('show');
  setTimeout(() => {
      toast.classList.remove('show');
  }, 2000);
}