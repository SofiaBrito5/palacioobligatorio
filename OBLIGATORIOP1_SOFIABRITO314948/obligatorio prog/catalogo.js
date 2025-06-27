
//elementos
let filtroCategoria = document.getElementById("filtro-categoria");
let contenedor = document.getElementById("contenedor-cards");
let buscador = document.getElementById("buscador");

// verificación por si los datos no se cargan bien
if (typeof instrumentosCatalogo === "undefined") {
  console.error("Error: instrumentosCatalogo no está definido en datos.js");
}

//instrumentos en pantalla
function mostrarInstrumentos(lista) {
  contenedor.innerHTML = ""; // limpia todo antes por las dudas

  lista.forEach(instrumento => {
    contenedor.innerHTML += `
      <div class="card card-instrumento" data-nombre="${instrumento.nombre}">
        <img src="${instrumento.imagenes[0]}" alt="${instrumento.nombre}">
        <h3>${instrumento.nombre}</h3>
        <p>${instrumento.descripcion}</p>
      </div>
    `;
  });
}

// mostrar todos 
mostrarInstrumentos(instrumentosCatalogo);

// filtrado en tiempo real según texto que sea ingresado en el buscador
function aplicarFiltros() {
  let texto = buscador.value.toLowerCase();
  let categoria = filtroCategoria.value;

  let filtrados = instrumentosCatalogo.filter(instrumento => {
    let coincideTexto = instrumento.nombre.toLowerCase().includes(texto);
    let coincideCategoria = categoria === "todas" || instrumento.categoria === categoria;
    return coincideTexto && coincideCategoria;
  });

  mostrarInstrumentos(filtrados);
}

// eventos de los filtros
buscador.addEventListener("input", aplicarFiltros);
filtroCategoria.addEventListener("change", aplicarFiltros);

// redirección de cards
document.addEventListener("click", function (e) {
  let card = e.target.closest(".card-instrumento");

  if (card) {
    let nombre = card.getAttribute("data-nombre");
    let instrumentoSeleccionado = instrumentosCatalogo.find(i => i.nombre === nombre);

    if (instrumentoSeleccionado) {
      localStorage.setItem("productoSeleccionado", JSON.stringify(instrumentoSeleccionado));
      window.location.href = "detalle.html";
    }
  }
});
// clicks en cualquier otra card por las dudas
document.addEventListener("click", function(e) {
  let card = e.target.closest(".card");

  if (card) {
    let nombre = card.getAttribute("data-nombre");

    // buscar instrumentos si estan en normal o en ofertas
    let producto =
      (instrumentos?.find(i => i.nombre === nombre)) ||
      (ofertas?.find(o => o.nombre === nombre));

    if (producto) {
      localStorage.setItem("productoSeleccionado", JSON.stringify(producto));
      window.location.href = "detalle.html";
    }
  }
});



