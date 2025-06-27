let productoGuardado = localStorage.getItem("productoSeleccionado");

if (productoGuardado) {
  let producto = JSON.parse(productoGuardado);

  document.querySelector("#nombre").textContent = producto.nombre;
  document.querySelector("#imagenes").src = producto.imagenes[0];
  document.querySelector("#descripcion").innerHTML = producto.descripcion;
  document.querySelector("#textoPersonalizado").innerHTML = producto.textoPersonalizado;
  document.getElementById("precio").textContent = producto.precio;
  document.querySelector("#precioAntes").innerHTML = producto.precioAntes;
  document.querySelector("#precioAhora").innerHTML = producto.precioAhora;

   //etiqueta 20% OFF si el producto está en oferta
  let etiquetaOff = document.createElement("div");
  etiquetaOff.textContent = "20% OFF";
  etiquetaOff.classList.add("etiqueta-off"); 
  //mostrar si el producto está en oferta
  if (ofertas.some(p => p.nombre === producto.nombre)) {

let contenedorImagen = document.querySelector("#galeria");

// limpia todo asi no se duplica
let etiquetasExistentes = contenedorImagen.querySelectorAll(".etiqueta-off");
etiquetasExistentes.forEach(e => e.remove());

if (ofertas.some(p => p.nombre === producto.nombre)) {
  let etiquetaOff = document.createElement("div");
  etiquetaOff.textContent = "20% OFF";
  etiquetaOff.classList.add("etiqueta-off");

  contenedorImagen.style.position = "relative"; 
  contenedorImagen.appendChild(etiquetaOff);
}

  //miniaturas
  let miniaturasContainer = document.querySelector(".miniaturas");
  miniaturasContainer.innerHTML = ""; 

  producto.imagenes.forEach((img, index) => {
    let mini = document.createElement("img");
    mini.src = img;
    mini.alt = `Miniatura ${index + 1}`;
    mini.classList.add("miniatura");

    //cambiar imagen principal
    mini.addEventListener("click", () => {
      document.querySelector("#imagenes").src = img;
    });

    miniaturasContainer.appendChild(mini);
  });

} else {
  console.error("No se encontró el producto en localStorage");
}}

document.getElementById("btnDescuento").addEventListener("click", function () {
  let popup = document.getElementById("popupDescuento");
  let codigo = Math.random().toString(36).substring(2, 8).toUpperCase(); // Código tipo: 4F8D2C
  document.getElementById("codigoDescuento").textContent = codigo;
  popup.classList.remove("oculto");
});

