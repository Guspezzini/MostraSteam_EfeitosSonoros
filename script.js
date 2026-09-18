
let audio1 = new Audio("./sons/som1.mp3");
let audio2 = new Audio("./sons/som2.mp3");
let audio3 = new Audio("./sons/som3.mp3");


// Tocar o som
function tocarSom(numero) {

    let audio;

    // Para os outros sons
    audio1.pause();
    audio2.pause();
    audio3.pause();

    if (numero === 1) {
        audio = audio1;
    }

    if (numero === 2) {
        audio = audio2;
    }

    if (numero === 3) {
        audio = audio3;
    }

    audio.play();
}


// Pausar o som
function pausarSom(numero) {

    if (numero === 1) {
        audio1.pause();
    }

    if (numero === 2) {
        audio2.pause();
    }

    if (numero === 3) {
        audio3.pause();
    }
}


// Mudar o volume
function mudarVolume(numero, valor) {

    if (numero === 1) {
        audio1.volume = valor;
    }

    if (numero === 2) {
        audio2.volume = valor;
    }

    if (numero === 3) {
        audio3.volume = valor;
    }
}


// Mudar o momento do áudio
function mudarTempo(numero) {

    let audio;
    let barra;

    if (numero === 1) {
        audio = audio1;
        barra = document.getElementById("tempo1");
    }

    if (numero === 2) {
        audio = audio2;
        barra = document.getElementById("tempo2");
    }

    if (numero === 3) {
        audio = audio3;
        barra = document.getElementById("tempo3");
    }

    if (audio.duration) {
        audio.currentTime =
            audio.duration * (barra.value / 100);
    }
}


// Atualizar a barra de tempo
function atualizarTempo(audio, numero) {

    let barra = document.getElementById("tempo" + numero);

    let texto = document.getElementById(
        "tempoTexto" + numero
    );

    if (audio.duration) {

        barra.value =
            (audio.currentTime / audio.duration) * 100;

        texto.textContent =
            formatarTempo(audio.currentTime) +
            " / " +
            formatarTempo(audio.duration);
    }
}


// Transformar segundos em minutos
function formatarTempo(segundos) {

    if (isNaN(segundos)) {
        return "00:00";
    }

    let minutos = Math.floor(segundos / 60);

    let segundosRestantes =
        Math.floor(segundos % 60);

    return String(minutos).padStart(2, "0") +
        ":" +
        String(segundosRestantes).padStart(2, "0");
}


// Atualizar Som 1
audio1.addEventListener("timeupdate", function () {
    atualizarTempo(audio1, 1);
});


// Atualizar Som 2
audio2.addEventListener("timeupdate", function () {
    atualizarTempo(audio2, 2);
});


// Atualizar Som 3
audio3.addEventListener("timeupdate", function () {
    atualizarTempo(audio3, 3);
});
