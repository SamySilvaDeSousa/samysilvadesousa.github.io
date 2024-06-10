const followDiv = document.getElementById('botao-direito');

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    followDiv.style.display = 'block';

    setTimeout(() => {
        followDiv.style.display = 'none';
    }, 2000);
});

document.addEventListener('mousemove', function (event) {

    followDiv.style.left = `${event.clientX + window.scrollX}px`;
    followDiv.style.top = `${event.clientY + window.scrollY}px`;
});
