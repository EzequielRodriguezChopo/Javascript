class Productos {
  constructor(nombreProducto, stock, precio, esSinTacc) {
    this.nombreProducto = nombreProducto;
    this.stock = stock;
    this.precio = precio;
    this.esSinTacc = esSinTacc;
  }
}
class Usuarios {
  constructor(nombre, apellido, edad, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
  }
}

let primerLetraMayuscula = (user) => {
  return user.charAt(0).toUpperCase() + user.slice(1);
};

let producto1 = new Productos("medialuna", 16, 150, false);
let producto2 = new Productos("bizcocho", 35, 150, false);
let producto3 = new Productos("vigilante", 8, 250, false);
let producto4 = new Productos("alfajor", 40, 30, true);
let producto5 = new Productos("torta", 5, 1050, true);
let producto6 = new Productos("cremona", 12, 350, true);

let usuario1 = new Usuarios("ezequiel","rodriguez",34,"ezequiel.rodriguez@coderhoouse");
let usuario2 = new Usuarios("gonzalo","manoukian",31,"gonzalo.manoukian@coderhoouse");
let usuario3 = new Usuarios("nicolas","villaverde",34,"nicolas.villaverde@coderhoouse");
let usuario4 = new Usuarios("chopo","senda",34,"chopo.senda@coderhoouse");
let usuario5 = new Usuarios("camilo","lindarte",34,"camilo.lindarte@coderhoouse");
let usuario6 = new Usuarios("cristian","cuello",34,"cristian.cuello@coderhoouse");

let baseDatosUsuario = [
  usuario1.nombre,
  usuario2.nombre,
  usuario3.nombre,
  usuario4.nombre,
  usuario5.nombre,
  usuario6.nombre,
];
let opcionComprar;
let usuario;
let checkeoUsuario;
let productoAComprar;
let carrito = [];

opcionComprar = prompt("Desea comprar alguna factura? Si/No").toLowerCase(); //Ingresamos opcion de compra
while (opcionComprar != "si" && opcionComprar != "no") {
  opcionComprar = prompt("Ingrese una de estas opciones Si/No").toLowerCase(); //Que ingrese si o no
}

usuario = prompt("Ingrese su nombre por favor").toLowerCase();      //Comienza verificacion de usuario
for (let i = 0; i < 6; i++) {
  if (usuario == baseDatosUsuario[i]) {
    alert("Bienvenido " + primerLetraMayuscula(usuario));
    i = 6;
    checkeoUsuario = true;
  } else if (i == 5) {
    checkeoUsuario = false;
    alert("Usuario no registrado");
  }
}                                                                   //Terminamos la verificacion de usuario

while (opcionComprar == "si" && checkeoUsuario == true) {           //Si existe el usuario y quiere comprar puede acceder

  productoAComprar = prompt("Ingrese el producto que quiere comprar: Medialuna/Bizcocho/Vigilante/Alfajor/Torta/Cremona").toLowerCase();
  switch (productoAComprar) {
    case "medialuna":
      alert("Usted selecciono Medialuna, que tienen un costo de: " + producto1.precio + ", tenemos " + producto.stock);
      carrito.push(producto1.nombreProducto);
      break;
    case "bizcochos":
      alert("Usted selecciono Bizcochos, que tienen un costo de: " + producto2.precio + ", tenemos " + producto2.stock);
      carrito.push(producto2.nombreProducto);
      break;
    case "vigilante":
      alert("Usted selecciono Vigilantes, que tienen un costo de: " + producto3.precio + ", tenemos " + producto3.stock);
      carrito.push(producto3.nombreProducto);
      break;
    case "alfajor":
      alert("Usted selecciono Alfajores, que tienen un costo de: " + producto4.precio + ", tenemos " + producto4.stock);
      carrito.push(producto4.nombreProducto);
      break;
    case "torta":
      alert("Usted selecciono Torta, que tienen un costo de: " + producto5.precio + ", tenemos " + producto5.stock);
      carrito.push(producto5.nombreProducto);
      break;
    case "cremona":
      alert("Usted selecciono Cremona, que tienen un costo de: " + producto6.precio + ", tenemos " + producto6.stock);
      carrito.push(producto6.nombreProducto);
      break;

    default:
      alert("No poseemos el producto seleccionado");
      break;
  }
  opcionComprar = prompt("Desea comprar alguna factura? Si/No").toLowerCase();
  while (opcionComprar != "si" && opcionComprar != "no") {
    opcionComprar = prompt("Ingrese una de estas opciones Si/No").toLowerCase();
  }
}
console.log(carrito);
alert("Que tengas un buen día, usted ha comprado " + carrito);
