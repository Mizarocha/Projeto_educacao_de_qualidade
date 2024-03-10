function mostrarAba(id) {
  var abas = document.querySelectorAll(".grid-section");
  for (var i = 0; i < abas.length; i++) {
    if (abas[i].id === id) {
      abas[i].style.display = "block";
    } else {
      abas[i].style.display = "none";
    }
  }
}

function iniciarFormulario() {
  mostrarAba();
}
