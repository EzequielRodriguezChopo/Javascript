class Productos{
    constructor(nombreProducto,imagenProducto,precioProducto){
        this.nombreProducto=nombreProducto;
        this.imagenProducto=imagenProducto;
        this.precioProducto=precioProducto
    }
}
const producto1 = new Productos('Trota de Ricota',"../imagenes/tortaDeRicota.jpg",900);
const producto2 = new Productos('Galletitas',"../imagenes/galletas.jpg",200);
const producto3 = new Productos('Chipa',"../imagenes/chipa.jpeg",250);
const producto4 = new Productos('Cremona',"../imagenes/cremona.jpeg" ,150);
const producto5 = new Productos('Biscochos de Grasa',"../imagenes/bizcochos.jpeg",125);
const producto6 = new Productos('Facturas',"../imagenes/facturas.jpg",400);
const producto7 = new Productos('Sanguches de Miga',"../imagenes/sanguchesDeMiga.jpeg",60);
const producto8 = new Productos('Pasta Frola',"../imagenes/pastafrola.jpg",900);
const producto9 = new Productos('Tarta de Coco',"../imagenes/tartaDeCoco.jpg",900);

const productos = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9];

const productosHTML = document.getElementById('productos');

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
            <a href="../paginas/productos.html" class="carrito-link botonCarrito">
              Agregar al Carrito
            </a>
          </div>
        </ul>
      </div>
    </div>
    `;
    productosHTML.append(item);
})