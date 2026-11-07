function mostrarPublicacoes() {
    document.getElementById("publicacoes").style.display = "block";
    document.getElementById("resumos").style.display = "none";
    document.getElementById("btn-pub").classList.add("ativo");
    document.getElementById("btn-res").classList.remove("ativo");
}

function mostrarResumos() {
    document.getElementById("resumos").style.display = "block";
    document.getElementById("publicacoes").style.display = "none";
    document.getElementById("btn-res").classList.add("ativo");
    document.getElementById("btn-pub").classList.remove("ativo");
}
