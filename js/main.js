class Productos{
    constructor(id,nombreProducto,imagenProducto,precioProducto){
        this.id=id;
        this.nombreProducto=nombreProducto;
        this.imagenProducto=imagenProducto;
        this.precioProducto=precioProducto
    }
}
const producto1 = new Productos(20201,'Trota de Ricota',"../imagenes/tortaDeRicota.jpg",900);
const producto2 = new Productos(20202,'Galletitas',"../imagenes/galletas.jpg",200);
const producto3 = new Productos(20203,'Chipa',"../imagenes/chipa.jpeg",250);
const producto4 = new Productos(20204,'Cremona',"../imagenes/cremona.jpeg" ,150);
const producto5 = new Productos(20205,'Biscochos de Grasa',"../imagenes/bizcochos.jpeg",125);
const producto6 = new Productos(20206,'Facturas',"../imagenes/facturas.jpg",400);
const producto7 = new Productos(20207,'Sanguches de Miga',"../imagenes/sanguchesDeMiga.jpeg",60);
const producto8 = new Productos(20208,'Pasta Frola',"../imagenes/pastafrola.jpg",900);
const producto9 = new Productos(20209,'Tarta de Coco',"../imagenes/tartaDeCoco.jpg",900);

const productos = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9];
let carrito = [];
const productosHTML = document.querySelector('#productos');   //Acá es donde vamos a mostrar el código de JS

productos.forEach((elemento)=>{
    const item=document.createElement('div') ;
    item.className = 'col';
    item.innerHTML=`
    <div class="card mb-4 rounded-3 shadow-sm producto bordeProducto">
      <div class="card-header py-3 ">
        <h4 class="my-0 ">${elemento.nombreProducto}</h4>
      </div>
      <div class="">
        <img src=${elemento.imagenProducto} alt="Cremona" class="articulo">
        <ul class="list-unstyled mt-3 mb-4">
          <h4>Precio x Un $${elemento.precioProducto}</h4>
          <div class="carrito">
          <button data-id="${elemento.id}" class="carrito-link botonCarrito"> Agregar al Carrito </button>
          </div>
        </ul>
      </div>
    </div>
    `;
    productosHTML.append(item);
})

const agregarProducto = (e) => { 
  const productoElegido = e.target.getAttribute('data-id') // Con target accedemos al button, y con getAttribute obtenemos accedemos al atributo 'data-id'
  const producto = productos.find((producto) => producto.id ==  productoElegido)  // Buscamos en el array con find si esta mi id
  carrito.push(producto)          //Agregamos el producto al carrito
  console.log(carrito)            //Muestro mi carrito 
}

const botonesCompra = document.querySelectorAll('.botonCarrito') //Accedemos al botn por medio de las clases en comun '.botonCarrito'
botonesCompra.forEach((botonCompra) => {
    botonCompra.addEventListener('click', agregarProducto) //Al escuchar el evento 'click' se ejecuta la funcion 'agregarProducto'
})

