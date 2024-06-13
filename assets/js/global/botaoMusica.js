const botao = document.getElementById("botao-musica");
const audio = document.getElementById("musica");
const volumeControl = document.getElementById("controle-volume");

let hideTimeout;

// Função para mostrar o controle de volume
const showVolumeControl = () => {
    clearTimeout(hideTimeout);
    volumeControl.style.display = 'block';
};

// Função para ocultar o controle de volume após um intervalo de tempo
const hideVolumeControl = (timeout = 1000) => {
    hideTimeout = setTimeout(() => {
        volumeControl.style.display = 'none';
    }, timeout);
};

// Evento de clique no botão para tocar/pausar a música
botao.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
        botao.innerHTML = '<span class="material-symbols-outlined">volume_up</span>';
    } else {
        audio.pause();
        botao.innerHTML = '<span class="material-symbols-outlined">no_sound</span>';
    }
});

// Eventos de mouse para mostrar/ocultar o controle de volume
botao.addEventListener("mouseover", showVolumeControl);
botao.addEventListener("mouseout", () => hideVolumeControl(1000));
volumeControl.addEventListener("mouseover", showVolumeControl);
volumeControl.addEventListener("mouseout", () => hideVolumeControl(1000));

// Eventos de toque para mostrar/ocultar o controle de volume em dispositivos de toque
botao.addEventListener("touchstart", showVolumeControl);
botao.addEventListener("touchend", () => hideVolumeControl(2000));
volumeControl.addEventListener("touchstart", showVolumeControl);
volumeControl.addEventListener("touchend", () => hideVolumeControl(2000));

// Evento de input para ajustar o volume da música
volumeControl.addEventListener("input", function() {
    audio.volume = volumeControl.value;
});
