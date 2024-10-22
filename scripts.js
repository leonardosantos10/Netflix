let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")
let audio = document.querySelector(".audio")

// ligar o som//
botaoSom.addEventListener("click", ligaSom)


function ligaSom() {

    video.muted = !video.muted
}

   // ! = é igual a inverso / inverto tudo

// mostrar o modal 

botao.addEventListener("click", mostrarModal)
modal.addEventListener("click", esconderModal)

function mostrarModal() {

   modal.style.display = "block"
}

function esconderModal() {

    modal.style.display = "none"
}

// tocar tundom

window.addEventListener("click", tocarAudio)


function tocarAudio() {

   audio.play()
}
 