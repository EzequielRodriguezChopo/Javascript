//const productos = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9];
let carrito = JSON.parse(localStorage.getItem('Producto')) || []


fetch('../data/productos.json')
    .then((res) => res.json())
    .then((data) => {
        renderizarProductos(data)
    })

const renderizarProductos = (productos) =>{
  console.log(productos)
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
  localStorage.setItem('Producto',JSON.stringify(carrito));
  imprimirCarrito();
  Swal.fire("Haz agregado un elemeto al carrito", "¿Te gustaria seguir comprando?", "success");;
}
const botonesCompra = document.querySelectorAll('.botonCarrito') //Accedemos al botn por medio de las clases en comun '.botonCarrito'
botonesCompra.forEach((botonCompra) => {
    botonCompra.addEventListener('click', agregarProducto) //Al escuchar el evento 'click' se ejecuta la funcion 'agregarProducto'
})
}
  
const eliminarArticulo = () => {
  const botonX = document.querySelectorAll("#botonX");
  botonX.forEach((button) => {
    button.addEventListener("click", (e) => {
    const item = e.target.getAttribute(`data-id`);
    carrito = carrito.filter((e) => e.id != item);
    e.target.parentElement.remove();
    localStorage.setItem("Producto", JSON.stringify(carrito));
    Swal.fire(`Haz eliminado el producto del carrito satisfactoriamente`, "¿Te gustaria seguir comprando?", "success");
   });
  });
   
 };
 
const imprimirCarrito = () => {
  console.log(carrito);
  cartContainer.innerHTML = ''
  carrito.forEach((elemento) => {
      const cartRow = document.createElement('div')
      cartRow.className = 'cartRow  mb-4 rounded-3 shadow-sm producto bordeProducto'
      cartRow.innerHTML = 
      `
      <div class="cartImg ">
      <img src=${elemento.imagenProducto}>
      </div>
      <div class="cartTitle"><span> ${elemento.nombreProducto} </span></div>
      <div class="cartPrice"><span>$${elemento.precioProducto}</span></div>
      <button data-id="${elemento.id}" id="botonX" class="boton4 bordeProducto">X</button> 
      `
      cartContainer.append(cartRow)
  })
  eliminarArticulo();
}

const vaciarTodo = () =>{
  localStorage.clear();
  carrito=[];
  console.log('Carrito ha sido vaciado');
  imprimirCarrito()
  Swal.fire(
    'Haz vaciado el carrito satisfactoriamente',
    '¿Te gustaria realizar una nueva compra?',
    'success'
  );
}

const vaciarCarrito = document.querySelector('.botonVaciarCarrito');  //Acedo al boton Eliminar Carrito
vaciarCarrito.addEventListener('click', vaciarTodo)

const botonVaciar=document.createElement('div') ;
botonVaciar.className = 'col botonVaciar';
botonVaciar.innerHTML=`
      <button data-id="" class="carrito-link botonCarrito"> Vaciar Carrito </button>
`;
vaciarCarrito.append(botonVaciar);

const guardadoLocalStorage= JSON.parse(localStorage.getItem('Producto'))
console.log('Localsotrage');
console.log(guardadoLocalStorage);

// Imprimo el carrito cada vez que se actualiza el array

const cartContainer = document.querySelector('#cartContainer')

 if(localStorage.getItem('Producto')){
  carrito = JSON.parse(localStorage.getItem('Producto'))
  imprimirCarrito();
}

