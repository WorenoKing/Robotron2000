const modelo = document.querySelector("[meta-modelos]");
const configure = document.querySelector("[meta-componentes]");
const fundos = document.querySelector("[meta-fundo]");


modelo.addEventListener("click", () => {
    document.querySelector("[meta-modelosPage]").style.display = "block";
    noneOpcoes();
})

configure.addEventListener("click", () => {
    document.querySelector("[meta-estatistica]").style.display = "block";
    document.querySelector("[meta-configPage]").style.display = "block";
    noneOpcoes();
})

fundos.addEventListener("click", () => {
    document.querySelector("[meta-fundosPage]").style.display = "block";
    noneOpcoes();
})

function back() {
    document.querySelector("[meta-modelosPage]").style.display = "none";
    document.querySelector("[meta-configPage]").style.display = "none";
    document.querySelector("[meta-estatistica]").style.display = "none";
    document.querySelector("[meta-fundosPage]").style.display = "none";
    document.querySelector("[meta-opcoes]").style.display = "block";
}



function noneOpcoes() {
    document.querySelector("[meta-opcoes]").style.display = "none";
}
