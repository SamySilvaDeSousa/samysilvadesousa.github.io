const botao = document.getElementById("botao-musica");
const audio = document.getElementById("musica");
const volumeControl = document.getElementById("controle-volume");

let hideTimeout;

botao.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
        botao.innerHTML = '<span class="material-symbols-outlined">volume_up</span>';
    } else {
        audio.pause();
        botao.innerHTML = '<span class="material-symbols-outlined">no_sound</span>';
    }
});

const showVolumeControl = () => {
    clearTimeout(hideTimeout);
    volumeControl.style.display = 'block';
};

const hideVolumeControl = () => {
    hideTimeout = setTimeout(() => {
        volumeControl.style.display = 'none';
    }, 1000);
};

botao.addEventListener("mouseover", showVolumeControl);
botao.addEventListener("mouseout", hideVolumeControl);
volumeControl.addEventListener("mouseover", showVolumeControl);
volumeControl.addEventListener("mouseout", hideVolumeControl);

volumeControl.addEventListener("input", function() {
    audio.volume = volumeControl.value;
});
