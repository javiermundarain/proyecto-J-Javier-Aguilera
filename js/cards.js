                //importante en html
const contenedorProductos = document.getElementById ('contenido-fichas')

const contenedorCarrito = document.getElementById ('carrito-contenedor')

const botonVaciar = document.getElementById ('vaciar-carrito')

const contadorCarrito = document.getElementById ('contadorCarrito')

const precioTotal = document.getElementById ('precioTotal')

const vaciar = document.getElementById("vaciar-carrito");

const moneda = document.getElementById ("moneda-fichas")

                //importante en html

let carrito = []

                //Aplicacion de JSON y SessionStorage
document.addEventListener ("DOMContentLoaded", () => {
        if (sessionStorage.getItem("carrito")){
            carrito = JSON.parse(sessionStorage.getItem ("carrito"))
            actualizarCarrito ()
        }
    })

                //Aplicacion de JSON y SessionStorage

                //Aplicacion de Vaciar Carrito
botonVaciar.addEventListener ("click", () =>{
    carrito.length = 0
    actualizarCarrito ()
})
                //Aplicacion de Vaciar Carrito


                //Aplicacion de Mensaje de Vaciar
    vaciar.addEventListener("click", ()  => {
        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se vacio el carrito correctamente',
        showConfirmButton: false,
        timer: 1500
    })
});
                //Aplicacion de Mensaje de Vaciar

                //Aplicacion de mi Stock
stockProductos.forEach((producto) => {
    const div = document.createElement ('div');
    div.classList.add('producto', 'col');
    div.innerHTML = `
    <img src="${producto.imagen}" alt="">
    <h2>${producto.nombre}</h2>
    <p>${producto.desc}</p>
    <p class="precioProducto">Precio: ${producto.precio}</p>
    <button class= "btn btn-dark" id= "agregar${producto.id}" class="boton-agregar">Agregar</button>
    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
    })

})
                //Aplicacion de mi Stock

                //Aplicacion de Funcionamiento al agregar
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
                //Aplicacion de Funcionamiento al agregar

                //Aplicacion de Elimar 1 solo elemnto del carrito
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find ((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice (indice, 1)
    actualizarCarrito ()
}

                //Aplicacion de Elimar 1 solo elemnto del carrito

                //Funcionamiento del Carrito
const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
    const div = document.createElement('div')
    div.innerHTML =`
    <p>${prod.nombre}</p>
    <p>Precio: ${prod.precio}</p>
    <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
    <button class= "btn btn-dark" onclick= "eliminarDelCarrito(${prod.id})">x</button>
    `
    contenedorCarrito.appendChild(div)

    sessionStorage.setItem ("carrito", JSON.stringify(carrito))
    })

    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
}
                //Funcionamiento del Carrito

                //llamada del fecht

    //const URL = 'https://open.er-api.com/v6/latest/USD'

    //fetch( URL )
    //.then( response => response.json() )
    //.then( data => { 
        //console.log( data )
        //console.log( 'Precio del Peso: ' + data.rates.ARS );
    //})

    //const mostrarData = (data) => {
        //console.log(data)
    //}

                //llamada del fecht