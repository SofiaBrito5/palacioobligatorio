
function actualizarContadorFinDeMes() {
  let ahora = new Date();
  
  let finDeMes = new Date(ahora.getFullYear(), ahora.getMonth() + 1, 0, 23, 59, 59);
  
  let diferencia = finDeMes.getTime() - ahora.getTime();

  if (diferencia <= 0) {
    document.getElementById("contador-ofertas").textContent = "¡Oferta finalizada!";
    return;
  }

  let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  let horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
 let segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById("contador-ofertas").textContent =
    `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

setInterval(actualizarContadorFinDeMes, 1000);
actualizarContadorFinDeMes();

let instrumentosIndex = [
  {
    nombre: "Guitarra Eléctrica Kramer Focus Vt221s Violeta",
    precio: "USD250,00",
    precioAntes:"",
    precioAhora:"",
    descripcion: "Guitarra eléctrica con cuerpo de tilo y mástil de arce, diseñada para un tono brillante y sustain prolongado.",
    imagenes: ["img/guitarrakramer.jpg", "img/guitarrakramer2.webp", "img/guitarrakramer3.webp"],
    textoPersonalizado: "Con pastillas humbucker duales que ofrecen un sonido potente y versátil, perfecta para géneros rock y blues.",
  },
  {
    nombre: "Piano Digital Artesia Vivace Black",
    precio: "USD300,00",
    precioAntes:"",
    precioAhora:"",
    descripcion: "Piano digital con 88 teclas con acción de martillo graduada y tecnología de muestreo avanzado para un sonido realista.",
    imagenes: ["img/teclado.webp", "img/teclado2.webp", "img/teclado3.webp"],
    textoPersonalizado: "Incluye 139 voces digitales, pedal de sustain y conectividad MIDI para integrar con software musical.",
  },
  {
    nombre: "Bajo Eléctrico Gibson Non-reverse",
    precio: "USD290,00",
    precioAntes:"",
    precioAhora:"",
    descripcion: "Bajo eléctrico con cuerpo de caoba y pastillas diseñadas para un bajo profundo y definido con gran presencia.",
    imagenes: ["img/bajoelecgibson.webp", "img/bajoelecgibson2.webp", "img/bajoelecgibson3.webp"],
    textoPersonalizado: "Ideal para estilos funk y rock, su diseño ergonómico permite una cómoda ejecución en largas sesiones.",
  },
  {
    nombre: "Batería Pearl Decade Maple Fusion Red 5 Cuerpos Con Hardware",
    precio: "USD400,00",
    precioAntes:"",
    precioAhora:"",
    descripcion: "Batería acústica con cascos de maple para un sonido cálido y resonante, incluye herrajes profesionales.",
    imagenes: ["img/bateria.webp", "img/bateria2.webp", "img/bateria3.webp"],
    textoPersonalizado: "Incluye toms de 10, 12 y 16 pulgadas, bombo de 22 pulgadas y caja de 14 pulgadas, perfecta para estudios y escenarios.",
  },
  {
    nombre: "Violín Cervini Hv50 1/2 Con Estuche",
    precio: "USD150,00",
    precioAntes:"",
    precioAhora:"",
    descripcion: "Violín tamaño 1/2 ideal para estudiantes, con cuerpo de madera laminada y estuche con acolchado interior.",
    imagenes: ["img/violin.webp", "img/violin2.webp", "img/violin3.webp"],
    textoPersonalizado: "Incluye arco de pernambuco y cordal ajustable, garantizando una buena afinación y tono para principiantes.",
  },
  {
    nombre: "Trompeta Lincoln Jytr1401 Laqueado",
    precio: "USD200,00",
    precioAntes:"",
    precioAhora:"",
    descripcion: "Trompeta con acabado laqueado y válvulas de latón de alta calidad para un sonido brillante y claro.",
    imagenes: ["img/trompeta.webp", "img/trompeta2.webp", "img/trompeta3.webp"],
    textoPersonalizado: "Diseñada para estudiantes y profesionales, ofrece resistencia y un tacto suave para una fácil ejecución.",
  },
  {
    nombre: "Saxo Alto Yamaha Yas26 Standard",
    precio: "USD220,00",
    precioAntes:"",
    precioAhora:"",
    descripcion: "Saxo alto para principiantes con llave de afinación ajustable y campana de latón para un sonido cálido.",
    imagenes: ["img/saxofon.webp", "img/saxofon2.webp", "img/saxofon3.webp"],
    textoPersonalizado: "Perfecto para estudiantes, cuenta con un diseño ergonómico y acabado resistente a la corrosión.",
  },
  {
    nombre: "Sintetizador Novation Mini",
    precio: "USD290,00",
    precioAntes:"",
    precioAhora:"",
    descripcion: "Sintetizador compacto con 25 teclas sensibles a la velocidad y motor de sonido analógico digital híbrido.",
    imagenes: ["img/sintetizador.webp", "img/sintetizador2.webp", "img/sintetizador3.webp"],
    textoPersonalizado: "Ofrece múltiples presets, control MIDI completo y pads para crear ritmos en vivo, ideal para productores.",
  },
];



let instrumentosCatalogo = [
 {
    nombre: "Guitarra Eléctrica Kramer Focus Vt221s Violeta",
    descripcion: "Guitarra eléctrica con cuerpo de tilo y mástil de arce, diseñada para un tono brillante y sustain prolongado.",
    precio: "USD250,00",
    precioAntes:"",
    precioAhora:"",
    imagenes: ["img/guitarrakramer.jpg", "img/guitarrakramer2.webp", "img/guitarrakramer3.webp"],
    categoria: "guitarra",
    textoPersonalizado: "Con pastillas humbucker duales que ofrecen un sonido potente y versátil, perfecta para géneros rock y blues."
  },
  {
    nombre: "Piano Digital Artesia Vivace Black",
     precio: "USD300,00",
    precioAntes:"",
    precioAhora:"",
    descripcion: "Piano digital con 88 teclas con acción de martillo graduada y tecnología de muestreo avanzado para un sonido realista.",
    imagenes: ["img/teclado.webp", "img/teclado2.webp", "img/teclado3.webp"],
    categoria: "teclado",
    textoPersonalizado: "Incluye 139 voces digitales, pedal de sustain y conectividad MIDI para integrar con software musical.",
  },
  {
    nombre: "Bajo Eléctrico Gibson Non-reverse",
     precio: "USD290,00",
    precioAntes:"",
    precioAhora:"",
    descripcion: "Bajo eléctrico con cuerpo de caoba y pastillas diseñadas para un bajo profundo y definido con gran presencia.",
    imagenes: ["img/bajoelecgibson.webp", "img/bajoelecgibson2.webp", "img/bajoelecgibson3.webp"],
    categoria: "bajo",
    textoPersonalizado: "Ideal para estilos funk y rock, su diseño ergonómico permite una cómoda ejecución en largas sesiones.",
  },
  {
    nombre: "Batería Pearl Decade Maple Fusion Red 5 Cuerpos Con Hardware",
    precio: "USD400,00",
    precioAntes:"",
    precioAhora:"",
    descripcion: "Batería acústica con cascos de maple para un sonido cálido y resonante, incluye herrajes profesionales.",
    imagenes: ["img/bateria.webp", "img/bateria2.webp", "img/bateria3.webp"],
    categoria: "bateria",
    textoPersonalizado: "Incluye toms de 10, 12 y 16 pulgadas, bombo de 22 pulgadas y caja de 14 pulgadas, perfecta para estudios y escenarios.",
  },
  {
    nombre: "Violín Cervini Hv50 1/2 Con Estuche",
    precio: "USD150,00",
    precioAntes:"",
    precioAhora:"",
    descripcion: "Violín tamaño 1/2 ideal para estudiantes, con cuerpo de madera laminada y estuche con acolchado interior.",
    imagenes: ["img/violin.webp", "img/violin2.webp", "img/violin3.webp"],
    categoria: "otrascuerdas",
    textoPersonalizado: "Incluye arco de pernambuco y cordal ajustable, garantizando una buena afinación y tono para principiantes.",
  },
  {
    nombre: "Trompeta Lincoln Jytr1401 Laqueado",
     precio: "USD200,00",
    precioAntes:"",
    precioAhora:"",
    descripcion: "Trompeta con acabado laqueado y válvulas de latón de alta calidad para un sonido brillante y claro.",
    imagenes: ["img/trompeta.webp", "img/trompeta2.webp", "img/trompeta3.webp"],
    categoria: "aire",
    textoPersonalizado: "Diseñada para estudiantes y profesionales, ofrece resistencia y un tacto suave para una fácil ejecución.",
  },
  {
    nombre: "Saxo Alto Yamaha Yas26 Standard",
    precio: "USD220,00",
    precioAntes:"",
    precioAhora:"",
    descripcion: "Saxo alto para principiantes con llave de afinación ajustable y campana de latón para un sonido cálido.",
    imagenes: ["img/saxofon.webp", "img/saxofon2.webp", "img/saxofon3.webp"],
    categoria: "aire",
    textoPersonalizado: "Perfecto para estudiantes, cuenta con un diseño ergonómico y acabado resistente a la corrosión.",
  },
  {
    nombre: "Sintetizador Novation Mini 23AA",
    precio: "USD290,00",
    precioAntes:"",
    precioAhora:"",
    descripcion: "Sintetizador compacto hermano de Mini con 30 teclas sensibles a la velocidad y motor de sonido analógico digital híbrido.",
    imagenes: ["img/sintetizador.webp", "img/sintetizador2.webp", "img/sintetizador3.webp"],
    categoria: "otros",
    textoPersonalizado: "Ofrece múltiples presets, control MIDI completo y pads para crear ritmos en vivo, ideal para productores.",
  },
  {
    nombre: "Guitarra Eléctrica Squier Mini Strat Lrl Rojo",
    precio: "USD150,00",
    precioAntes:"",
    precioAhora:"",
    descripcion: "Guitarra eléctrica de cuerpo compacto, ideal para jóvenes músicos con un sonido claro y brillante.",
    imagenes: ["img/guitarrasquier.webp", "img/guitarrasquier2.webp", "img/guitarrasquier3.webp"],
    categoria: "guitarra",
    textoPersonalizado: "Perfecta para principiantes y músicos en movimiento, con acabado en color rojo vibrante.",
  },
  {
    nombre: "Piano Digital Nord Piano 5 88",
    precio: "USD290,00",
    precioAntes:"",
    precioAhora:"",
    descripcion: "Piano digital profesional con tecnología de modelado acústico y 88 teclas con respuesta realista.",
    imagenes: ["img/pianonord.webp", "img/pianonord2.webp", "img/pianonord3.webp"],
    categoria: "teclado",
    textoPersonalizado: "Ideal para estudios y presentaciones, con banco de sonidos expansible y conexión USB.",
  },
  {
    nombre: "Bajo Eléctrico Ibanez Tmb100 Talman Bk",
    precio: "USD260,00",
    precioAntes:"",
    precioAhora:"",
    descripcion: "Bajo con cuerpo estilizado y pastillas dinámicas para un sonido versátil en cualquier género musical.",
    imagenes: ["img/bajoibanez.webp", "img/bajoibanez2.webp", "img/bajoibanez3.webp"],
    categoria: "bajo",
    textoPersonalizado: "Cuenta con mástil rápido y cómodo, ideal para bajistas que buscan precisión y potencia.",
  },
  {
    nombre: "Bateria Electronica Alesis Strike Multipad",
    precio: "USD300,00",
    precioAntes:"",
    precioAhora:"",
    descripcion: "Batería electrónica con pads sensibles y una amplia biblioteca de sonidos integrados.",
    imagenes: ["img/bateriaelect.webp", "img/bateriaelect2.webp", "img/bateriaelect3.webp"],
    categoria: "bateria",
    textoPersonalizado: "Permite conexión USB y grabación directa, ideal para estudios y presentaciones digitales.",
  },
  {
    nombre: "Violín Electrico Memphis Ftmve088",
    precio: "USD290,00",
    precioAntes:"",
    precioAhora:"",
    descripcion: "Violín eléctrico con cuerpo de madera maciza y sistema de captación activo para un sonido limpio.",
    imagenes: ["img/violinelect.webp", "img/violinelect2.webp", "img/violinelect3.webp"],
    categoria: "otrascuerdas",
    textoPersonalizado: "Incluye estuche rígido y arco profesional, perfecto para actuaciones en vivo y grabaciones.",
  },
  {
    nombre: "Trompeta Yamaha Ytr 2330 L",
    precio: "USD190,00",
    precioAntes:"",
    precioAhora:"",
    descripcion: "Trompeta de nivel intermedio con latón pulido y válvulas de pistón resistentes al desgaste.",
    imagenes: ["img/trompeta.webp", "img/trompeta2.webp", "img/trompeta3.webp"],
    categoria: "aire",
    textoPersonalizado: "Brinda un sonido claro y brillante, adecuada para estudiantes avanzados y músicos profesionales.",
  },
  {
    nombre: "Saxo Alto Yamaha Yas280 Nuevo",
    precio: "USD240,00",
    precioAntes:"",
    precioAhora:"",
    descripcion: "Saxo alto con llave de octava ajustable y diseño ergonómico para un tono cálido y flexible.",
    imagenes: ["img/saxofon.webp", "img/saxofon2.webp", "img/saxofon3.webp"],
    categoria: "aire",
    textoPersonalizado: "Cuenta con acabado resistente y mecanismo de alta precisión para facilitar la ejecución.",
  },
  {
    nombre: "Sintetizador Novation Mini",
    precio: "USD599,00",
    precioAntes:"",
    precioAhora:"",
    descripcion: "Sintetizador portátil con motor analógico digital híbrido y control MIDI para producción creativa.",
    imagenes: ["img/sintetizador.webp", "img/sintetizador2.webp", "img/sintetizador3.webp"],
    categoria: "otros",
    textoPersonalizado: "Perfecto para músicos electrónicos que buscan versatilidad y portabilidad en un solo instrumento.",
  },
   {
      nombre: "Ukelele Mahalo Ma1tk Soprano Tiki",
      precioAntes: "USD40,00",
      precioAhora: "USD35,00",
      imagenes: ["img/ukelele.webp", "img/ukelele2.webp", "img/ukelele3.webp"],
      alt: "Ukelele",
      descripcion: "Un ukelele soprano con un diseño tropical que destaca por su sonido brillante y cuerpo compacto.",
      textoPersonalizado: "Tamaño: Soprano | Material: Caoba | Acabado: Tiki"
    },
    {
      nombre: "Amplificador De Guitarra Marshall Mg10g",
      precioAntes: "USD200,00",
      precioAhora: "USD119,00",
      imagenes: ["img/ampli.webp", "img/ampli2.webp", "img/ampli3.webp"],
      alt: "Amplificador",
      descripcion: "Amplificador compacto y potente, perfecto para prácticas en casa y pequeños conciertos.",
      textoPersonalizado: "Potencia: 10W | Canales: Limpio y Overdrive | Entrada: Guitarra, Aux"
    },
    {
      nombre: "Pack Guitarra Eléctrica Squier Affinity",
      precioAntes: "USD350,00",
      precioAhora: "USD280,00",
      imagenes: ["img/pack.webp", "img/pack2.webp", "img/pack3.webp"],
      alt: "Guitarra Eléctrica Pack",
      descripcion: "Incluye guitarra, amplificador y accesorios para comenzar a tocar inmediatamente.",
      textoPersonalizado: "Guitarra HSS | Amplificador 10W | Accesorios incluidos",
      categoria: "guitarra"
    },
    {
      nombre: "Guitarra Clásica Valencia Vc101 Niño 1/4 Rosa",
      precioAntes: "USD100,00",
      precioAhora: "USD80,00",
      imagenes: ["img/guitarranene.webp", "img/guitarranene2.webp", "img/guitarranene3.webp"],
      alt: "Guitarra Nene",
      descripcion: "Diseñada especialmente para niños, con tamaño reducido y acabado en rosa pastel.",
      textoPersonalizado: "Tamaño: 1/4 | Color: Rosa | Cuerdas: Nylon",
      categoria: "guitarra"
    },
    {
      nombre: "Guitarra Eléctrica Epiphone Les Paul Special Negra",
      precioAntes: "USD375,00",
      precioAhora: "USD200,00",
      imagenes: ["img/epiphone.webp", "img/epiphone2.webp", "img/epiphone3.webp"],
      alt: "Guitarra Epiphone",
      descripcion: "Clásica guitarra eléctrica con cuerpo sólido y acabado negro brillante.",
      textoPersonalizado: "Cuerpo: Caoba | Pastillas: Humbuckers | Color: Negro",
      categoria: "guitarra"
    },
    {
      nombre: "Guitarra Eléctrica Ibanez T0d10 Tim Henson",
      precioAntes: "USD349,00",
      precioAhora: "USD200,00",
      imagenes: ["img/guitarratim.webp", "img/guitarratim2.webp", "img/guitarratim3.webp"],
      alt: "Guitarra Eléctrica",
      descripcion: "Modelo signature con diseño moderno y versatilidad sonora.",
      textoPersonalizado: "Modelo: Tim Henson Signature | Pastillas: DiMarzio | Color: Azul",
      categoria: "guitarra"
    },
    {
      nombre: "Monitor De Estudio Activo",
      precioAntes: "USD250,00",
      precioAhora: "USD200,00",
      imagenes: ["img/monitor.webp", "img/monitor2.webp", "img/monitor3.webp"],
      alt: "Monitor De Estudio Activo",
      descripcion: "Calidad de sonido precisa y equilibrada para producción y mezcla.",
      textoPersonalizado: "Potencia: 50W | Respuesta: 50Hz-20kHz | Conectividad: XLR, RCA",
      categoria: "otros"
    },
    {
      nombre: "Bandeja De Vinilo Pioneer Dj Plx500 Negra",
      precioAntes: "USD669,00",
      precioAhora: "USD405,00",
      imagenes: ["img/bandeja.webp", "img/bandeja2.webp", "img/bandeja3.webp"],
      alt: "Colgante Guitarra Eléctrica",
      descripcion: "Tocadiscos profesional con diseño clásico y excelente rendimiento.",
      textoPersonalizado: "Velocidades: 33/45 RPM | Motor: Direct Drive | Salidas: RCA",
      categoria: "otros"
    },
    {
      nombre: "Reproductor Pioneer Xdj1000",
      precioAntes: "USD1999,00",
      precioAhora: "USD1645,00",
      imagenes: ["img/pioneer.webp", "img/pioneer2.webp", "img/pioneer3.webp"],
      alt: "Reproductor de vinilo",
      descripcion: "Equipo profesional para DJs, con pantalla táctil y gran conectividad.",
      especificaciones: "Pantalla táctil: 7\" | Compatibilidad: USB, Rekordbox | Entradas: XLR",
      categoria: "otros"
    },
    {
      nombre: "Guitarra Eléctrica Squier Mini Strato Rw Blk",
      precioAntes: "USD399,00",
      precioAhora: "USD280,00",
      imagenes: ["img/guitarrablack.webp","img/guitarrablack2.webp","img/guitarrablack3.webp"],
      alt: "Guitarra Eléctrica",
      descripcion: "Versátil guitarra eléctrica en formato mini, ideal para viajes y principiantes.",
      textoPersonalizado: "Tamaño: Mini Strat | Pastillas: Single Coil | Color: Negro",
      categoria: "guitarra"
    }
    ]


// Lista de productos en oferta

let ofertas= [
    {
      nombre: "Ukelele Mahalo Ma1tk Soprano Tiki",
      precioAntes: "USD40,00",
      precioAhora: "USD35,00",
      imagenes: ["img/ukelele.webp", "img/ukelele2.webp", "img/ukelele3.webp"],
      alt: "Ukelele",
      descripcion: "Un ukelele soprano con un diseño tropical que destaca por su sonido brillante y cuerpo compacto.",
      textoPersonalizado: "Tamaño: Soprano | Material: Caoba | Acabado: Tiki"
    },
    {
      nombre: "Amplificador De Guitarra Marshall Mg10g",
      precioAntes: "USD200,00",
      precioAhora: "USD119,00",
      imagenes: ["img/ampli.webp", "img/ampli2.webp", "img/ampli3.webp"],
      alt: "Amplificador",
      descripcion: "Amplificador compacto y potente, perfecto para prácticas en casa y pequeños conciertos.",
      textoPersonalizado: "Potencia: 10W | Canales: Limpio y Overdrive | Entrada: Guitarra, Aux"
    },
    {
      nombre: "Pack Guitarra Eléctrica Squier Affinity",
      precioAntes: "USD350,00",
      precioAhora: "USD280,00",
      imagenes: ["img/pack.webp", "img/pack2.webp", "img/pack3.webp"],
      alt: "Guitarra Eléctrica Pack",
      descripcion: "Incluye guitarra, amplificador y accesorios para comenzar a tocar inmediatamente.",
      textoPersonalizado: "Guitarra HSS | Amplificador 10W | Accesorios incluidos"
    },
    {
      nombre: "Guitarra Clásica Valencia Vc101 Niño 1/4 Rosa",
      precioAntes: "USD100,00",
      precioAhora: "USD80,00",
      imagenes: ["img/guitarranene.webp", "img/guitarranene2.webp", "img/guitarranene3.webp"],
      alt: "Guitarra Nene",
      descripcion: "Diseñada especialmente para niños, con tamaño reducido y acabado en rosa pastel.",
      textoPersonalizado: "Tamaño: 1/4 | Color: Rosa | Cuerdas: Nylon"
    },
    {
      nombre: "Guitarra Eléctrica Epiphone Les Paul Special Negra",
      precioAntes: "USD375,00",
      precioAhora: "USD200,00",
      imagenes: ["img/epiphone.webp", "img/epiphone2.webp", "img/epiphone3.webp"],
      alt: "Guitarra Epiphone",
      descripcion: "Clásica guitarra eléctrica con cuerpo sólido y acabado negro brillante.",
      textoPersonalizado: "Cuerpo: Caoba | Pastillas: Humbuckers | Color: Negro"
    },
    {
      nombre: "Guitarra Eléctrica Ibanez T0d10 Tim Henson",
      precioAntes: "USD349,00",
      precioAhora: "USD200,00",
      imagenes: ["img/guitarratim.webp", "img/guitarratim2.webp", "img/guitarratim3.webp"],
      alt: "Guitarra Eléctrica",
      descripcion: "Modelo signature con diseño moderno y versatilidad sonora.",
      textoPersonalizado: "Modelo: Tim Henson Signature | Pastillas: DiMarzio | Color: Azul"
    },
    {
      nombre: "Monitor De Estudio Activo",
      precioAntes: "USD250,00",
      precioAhora: "USD200,00",
      imagenes: ["img/monitor.webp", "img/monitor2.webp", "img/monitor3.webp"],
      alt: "Monitor De Estudio Activo",
      descripcion: "Calidad de sonido precisa y equilibrada para producción y mezcla.",
      textoPersonalizado: "Potencia: 50W | Respuesta: 50Hz-20kHz | Conectividad: XLR, RCA"
    },
    {
      nombre: "Bandeja De Vinilo Pioneer Dj Plx500 Negra",
      precioAntes: "USD669,00",
      precioAhora: "USD405,00",
      imagenes: ["img/bandeja.webp", "img/bandeja2.webp", "img/bandeja3.webp"],
      alt: "Colgante Guitarra Eléctrica",
      descripcion: "Tocadiscos profesional con diseño clásico y excelente rendimiento.",
      textoPersonalizado: "Velocidades: 33/45 RPM | Motor: Direct Drive | Salidas: RCA"
    },
    {
      nombre: "Reproductor Pioneer Xdj1000",
      precioAntes: "USD1999,00",
      precioAhora: "USD1645,00",
      imagenes: ["img/pioneer.webp", "img/pioneer2.webp", "img/pioneer3.webp"],
      alt: "Reproductor de vinilo",
      descripcion: "Equipo profesional para DJs, con pantalla táctil y gran conectividad.",
      especificaciones: "Pantalla táctil: 7\" | Compatibilidad: USB, Rekordbox | Entradas: XLR"
    },
    {
      nombre: "Guitarra Eléctrica Squier Mini Strato Rw Blk",
      precioAntes: "USD399,00",
      precioAhora: "USD280,00",
      imagenes: ["img/guitarrablack.webp","img/guitarrablack2.webp","img/guitarrablack3.webp"],
      alt: "Guitarra Eléctrica",
      descripcion: "Versátil guitarra eléctrica en formato mini, ideal para viajes y principiantes.",
      textoPersonalizado: "Tamaño: Mini Strat | Pastillas: Single Coil | Color: Negro"
    }
  ];







