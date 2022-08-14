let stockProductos = [
    {id: 1, nombre: "Poción de amor", imagen: "../js/contenido/amor.png", desc: "Sirve para inducir amor infinito a la persona que la consuma", cantidad: 1, precio: 80},
    {id: 2, nombre: "Poción de clarividencia", imagen: "../js/contenido/clarividencia.png", desc: "Sirve para predecir el futuro por una semana", cantidad: 1, precio: 150},
    {id: 3, nombre: "Poción de Muerte instantanea", imagen: "../js/contenido/muerte.png", desc: "Induce la muerte de una forma discreta y sin dejar evidencia; Nota: nuestro pocion de resurrecion sirve si se aplica esta poción", cantidad: 1, precio: 500},
    {id: 4, nombre: "Poción de Resurreción", imagen: "../js/contenido/resurrecion.png", desc: "Regresa de la muerte a cualquier persona despues de morir; Nota: maximo 3 dias para inducir desde la muerte del individuo", cantidad: 1, precio: 900},
]
                //importante en html
const contenedorProductos = document.getElementById ('contenido-fichas')

const contenedorCarrito = document.getElementById ('carrito-contenedor')

const botonVaciar = document.getElementById ('vaciar-carrito')

const contadorCarrito = document.getElementById ('contadorCarrito')

const precioTotal = document.getElementById ('precioTotal')

                //importante en html

                //modal
  function openmodal(selector){
    const el = document.querySelector(selector);
    el.classList.add("modal-opened");
}

function closemodal(selector){
    const el = document.querySelector(selector);
    el.classList.remove("modal-opened");
}
                //modal

let carrito = []

    document.addEventListener ("DOMContentLoaded", () => {
        if (sessionStorage.getItem("carrito")){
            carrito = JSON.parse(sessionStorage.getItem ("carrito"))
            actualizarCarrito ()
        }
    })

botonVaciar.addEventListener ("click", () =>{
    carrito.length = 0
    actualizarCarrito ()
})

stockProductos.forEach((producto) => {
    const div = document.createElement ('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src="${producto.imagen}" alt="">
    <h2>${producto.nombre}</h2>
    <p>${producto.desc}</p>
    <p class="precioProducto">Precio: ${producto.precio}</p>
    <button id= "agregar${producto.id}" class="boton-agregar">Agregar</button>
    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
    })

})

const agregarAlCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId)

    if (existe) {
        const prod = carrito.map (prod => {
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else {

    const item = stockProductos.find((prod) => prod.id === prodId)
    carrito.push(item)
    console.log(carrito);
}
    actualizarCarrito ()
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find ((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice (indice, 1)
    actualizarCarrito ()
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
    const div = document.createElement('div')
    div.innerHTML =`
    <p>${prod.nombre}</p>
    <p>Precio: ${prod.precio}</p>
    <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
    <button onclick= "eliminarDelCarrito(${prod.id})"></button>
    `
    contenedorCarrito.appendChild(div)

    sessionStorage.setItem ("carrito", JSON.stringify(carrito))
    })

    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)
}