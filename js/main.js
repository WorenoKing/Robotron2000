const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
let tipo = ""

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})


function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")
    
    
    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1
        tipo = "-"
        if(peca.value <= 0) return peca.value = "00"
        
    } else {
        peca.value = parseInt(peca.value) + 1
        return tipo = "+"
        
    }
}


function atualizaEstatisticas(peca) {
    estatisticas.forEach( (elemento) => {
        if(tipo === "+"){
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        } else if(tipo === "-") {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        }
    }) 
}

// Link de redirecionamento para á página "game".

// Para achar o link do jogo, arraste o aqruivo "areaPlay.HTML" e solte no navegador. Copie a url e cole no "href" abaixo.
document.querySelector("[data-play]").addEventListener("click", () => {
    window.location.href = "file:///D:/workspace/estudos/Alura%20-%20JavaScript/RoboTron-js/robotron-2000-projeto_inicial/areaPlay.html"
})
