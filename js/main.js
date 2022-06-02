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

let sumar = () => {
  sumaDeLaCompra = 0;
  carrito.forEach((productoComprados)=>{
    sumaDeLaCompra = productoComprados.precio + sumaDeLaCompra;
  })
  return sumaDeLaCompra
}

let productosAdquiridos = ()=>{
  listaProductosAdquiridos = carrito.map((productos)=>{
    return productos.nombreProducto;
  })
  return listaProductosAdquiridos
}

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
let sumaDeLaCompra;
let listaProductosAdquiridos;
let op

opcionComprar = prompt("Desea comprar alguna factura? Si/No").toLowerCase();        //Ingresamos opcion de compra
while (opcionComprar != "si" && opcionComprar != "no") {
  opcionComprar = prompt("Ingrese una de estas opciones Si/No").toLowerCase();      //Que ingrese si o no
}
if(opcionComprar=='si'){
  do{
    usuario = prompt("Ingrese su nombre por favor").toLowerCase();                    //Comienza verificacion de usuario
    checkeoUsuario=baseDatosUsuario.some((comprador)=>comprador==usuario);            //Terminamos la verificacion de usuario
    if (checkeoUsuario==true){
      alert('Bienvenido ' + primerLetraMayuscula(usuario));
      op='no';
    } else {
      alert('Usted no esta registado en nuestra base de datos');
      op = prompt('Desea ingresar su usuario de nuevo? Si/No').toLowerCase();
    }
  }while(op=='si')
  while (opcionComprar == "si" && checkeoUsuario == true) {                         //Si existe el usuario y quiere comprar puede acceder

    productoAComprar = prompt("Ingrese el producto que quiere comprar: Medialuna/Bizcocho/Vigilante/Alfajor/Torta/Cremona").toLowerCase();
    switch (productoAComprar) {
      case "medialuna":
        if(producto1.stock==-1){
          alert('No poseemos más stock del producto seleccionado');
          break;
        }
        alert("Usted selecciono Medialuna, que tienen un costo de: " + producto1.precio + ", quedan en stock: " + producto1.stock);
        producto1.stock=producto1.stock-1;                                        // Resto 1 al stock actual
        carrito.push(producto1);                                                  // Agrego un articulo a mi carrito
        break;
      case "bizcocho":
        if(producto2.stock==-1){
          alert('No poseemos más stock del producto seleccionado');
          break;
        }
        alert("Usted selecciono Bizcochos, que tienen un costo de: " + producto2.precio + ", quedan en stock: " + producto2.stock);
        producto2.stock=producto2.stock-1;                                        // Resto 1 al stock actual
        carrito.push(producto2);                                                  // Agrego un articulo a mi carrito
        break;
      case "vigilante":
        if(producto3.stock==-1){
          alert('No poseemos más stock del producto seleccionado');
          break;
        }
        alert("Usted selecciono Vigilantes, que tienen un costo de: " + producto3.precio + ", quedan en stock: " + producto3.stock);
        producto3.stock=producto3.stock-1;                                        // Resto 1 al stock actual
        carrito.push(producto3);                                                  // Agrego un articulo a mi carrito
        break;
      case "alfajor":
        if(producto4.stock==-1){
          alert('No poseemos más stock del producto seleccionado');
          break;
        }
        alert("Usted selecciono Alfajores, que tienen un costo de: " + producto4.precio + ", quedan en stock: " + producto4.stock);
        producto4.stock=producto4.stock-1;                                        // Resto 1 al stock actual
        carrito.push(producto4);                                                  // Agrego un articulo a mi carrito
        break;
      case "torta":
        if(producto5.stock==-1){
          alert('No poseemos más stock del producto seleccionado');
          break;
        }
        alert("Usted selecciono Torta, que tienen un costo de: " + producto5.precio + ", quedan en stock: " + producto5.stock);
        producto5.stock=producto5.stock-1;                                        // Resto 1 al stock actual
        carrito.push(producto5);                                                  // Agrego un articulo a mi carrito
        break;
      case "cremona":
        if(producto6.stock==-1){
          alert('No poseemos más stock del producto seleccionado');
          break;
        }
        alert("Usted selecciono Cremona, que tienen un costo de: " + producto6.precio + ", quedan en stock: " + producto6.stock);
        producto6.stock=producto6.stock-1;                                        // Resto 1 al stock actual
        carrito.push(producto6);                                                  // Agrego un articulo a mi carrito
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
}

carrito=carrito.map((prod)=>{
  return {nombreProducto:primerLetraMayuscula(prod.nombreProducto),precio:prod.precio}
})

console.log(carrito);

if(carrito==''){
  alert('Que tenga usted un buen día')
}else{
  alert("Que tengas un buen día, usted ha comprado " + productosAdquiridos() + ', con un precio total de $'+ sumar());
}