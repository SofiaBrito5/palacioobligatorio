let contenedor = document.getElementById("contenedor-cards");

instrumentosIndex.forEach(function(instrumento) {
  contenedor.innerHTML += `
    <div class="card" data-nombre="${instrumento.nombre}">
      <img src="${instrumento.imagenes[0]}" alt="${instrumento.nombre}">
      <h3>${instrumento.nombre}</h3>
      <p>${instrumento.descripcion}</p>
    </div>
  `;
});

let contenedorofertas = document.getElementById("contenedor-ofertas");

ofertas.forEach(producto => {
  contenedorofertas.innerHTML += `
    <div class="card card-oferta" data-nombre="${producto.nombre}" style="position:relative;">
      <div class="discount-label">20% OFF</div>
      <img src="${producto.imagenes[0]}" alt="${producto.alt}">
      <h3>${producto.nombre}</h3>
      <p>Antes: ${producto.precioAntes}<br>Ahora: ${producto.precioAhora}</p>
    </div>
  `;
});

let productosConDescuento = [
  "Ukelele Mahalo Ma1tk Soprano Tiki",
  "Amplificador De Guitarra Marshall Mg10g",
  "Pack Guitarra Eléctrica Squier Affinity",
  "Guitarra Clásica Valencia Vc101 Niño 1/4 Rosa",
  "Guitarra Eléctrica Epiphone Les Paul Special Negra",
  "Guitarra Eléctrica Ibanez T0d10 Tim Henson",
  "Monitor De Estudio Activo",
  "Bandeja De Vinilo Pioneer Dj Plx500 Negra",
  "Reproductor Pioneer Xdj1000",
  "Guitarra Eléctrica Squier Mini Strato Rw Blk"
];



document.addEventListener("click", function(e) {
  let card = e.target.closest(".card");

  if (card) {
let nombre = card.getAttribute("data-nombre");

    // buscar dentro de instrumentosIndex y ofertas
    let producto =
      instrumentosIndex.find(i => i.nombre === nombre) ||
      ofertas.find(o => o.nombre === nombre);

    if (producto) {
      localStorage.setItem("productoSeleccionado", JSON.stringify(producto));
      window.location.href = "detalle.html";
    }
  }
});



/* slider */
let imagenesslider = [
  "img/slider1.jpg",
  "img/slider2.jpg",
  "img/ofertascosorojo.png",
];

let slider = document.querySelector("#slider");

let indice = 0;

function mostrarImg() {
  slider.classList.remove("aparecer");
  slider.classList.add("desvanecer");

  setTimeout(() => { //clases para transicion
    slider.src = imagenesslider[indice];

    slider.classList.remove("desvanecer");
    slider.classList.add("aparecer");
  }, 300);
}

function atras() {
  if (indice === 0) {
    indice = imagenesslider.length - 1;
  } else {
    indice--;
  }
  mostrarImg();
}

function avanzar() {
  if (indice === imagenesslider.length - 1) {
    indice = 0;
  } else {
    indice++;
  }
  mostrarImg();
}

document.querySelector("#anterior").addEventListener("click", atras);

document.querySelector("#siguiente").addEventListener("click", avanzar);

mostrarImg();

let intervalo;

function iniciarSlider() {
  intervalo = setInterval(() => { 
    if (indice === imagenesslider.length - 1) {
      indice = 0;
    } else {
      indice++;
    }
    mostrarImg();
  }, 5000);
}

function pausarSlider() {
  clearInterval(intervalo);
}

slider.addEventListener("mouseenter", pausarSlider);

slider.addEventListener("mouseleave", iniciarSlider);

iniciarSlider();

letmodal = document.getElementById('modal');
let closeBtn = document.getElementById('close-btn');
let form = document.getElementById('signin-form');
let passwordInput = document.getElementById('password');
let message = document.getElementById('message');

//botón X
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// validar color borde de la contraseña segun cantidad de caracteres que le pongan
passwordInput.addEventListener('input', () => {
  let length = passwordInput.value.length;

  if (length <=5) {
    passwordInput.style.borderColor = 'red';
  } else if (length <=10) {
    passwordInput.style.borderColor = 'yellow';
  } else {
    passwordInput.style.borderColor = 'green';
  }
});

// enviar formulario
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let email = document.getElementById('email').value;
  let password = passwordInput.value;

  if (password.length < 10) {
    message.textContent = "La contraseña es muy corta.";
    message.style.color = "red";
    passwordInput.focus();
  } else {
    message.textContent = `¡Bienvenido, ${email}!`;
    message.style.color = "green";

    setTimeout(() => {
      modal.style.display = 'none';
    }, 1500);

    form.reset();
    passwordInput.style.borderColor = 'gray';
  }
});








