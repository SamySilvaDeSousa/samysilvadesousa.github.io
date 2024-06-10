//SCRIPT DO FORMULÁRIO ↓

const submit = async (event) => {
  event.preventDefault();
  addLoading();

  const inputNome = document.getElementById('nome');
  const inputEmail = document.getElementById('email');
  const inputAssunto = document.getElementById('assunto');
  const inputMensagem = document.getElementById('mensagem');

  const nome = inputNome.value;
  const email = inputEmail.value;
  const assunto = inputAssunto.value;
  const mensagem = inputMensagem.value;

  const formData = new FormData();
  formData.append('Nome:', nome);
  formData.append('Email:', email);
  formData.append('Assunto:', assunto);
  formData.append('Mensagem:', mensagem);

  const response = await fetch('https://api.sheetmonkey.io/form/bHxUjmFzV4z4j3tgbS3D32', {
    method: 'POST',
    body: formData,
  }).then(() => removeLoading());

  document.querySelector('form').reset();

}

document.querySelector('form').addEventListener('submit', submit);

//SCRIPT DO FORMULÁRIO ↑

//SCRIPT DO BOTÃO DO FORMULÁRIO ↓

const button = document.getElementById('botao-form');

const addLoading = () => {
  button.innerHTML = '<span id="loading" class="material-symbols-outlined">refresh</span>';
}
const removeLoading = () => {
  button.innerHTML = '<span class="material-symbols-outlined" style=" transform: translateX(3px);">send</span>';
}

//SCRIPT DO BOTÃO DO FORMULÁRIO ↑