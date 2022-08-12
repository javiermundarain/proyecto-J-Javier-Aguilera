    //creacion de constructor
class Ficha {
    constructor(titulo, imagen, descripcion, precio) {
        this.titulo = titulo;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.precio = precio;
        }
    }
                            
const ficha1 = new Ficha ("Poción de amor", "../js/contenido/amor.png", "Sirve para inducir amor infinito a la persona que la consuma", "80$")
const ficha2 = new Ficha ("Poción de clarividencia", "../js/contenido/clarividencia.png", "Sirve para predecir el futuro por una semana", "150$")
const ficha3 = new Ficha ("Poción de Muerte instantanea", "../js/contenido/muerte.png", "Induce la muerte de una forma discreta y sin dejar evidencia; Nota: nuestro pocion de resurrecion sirve si se aplica esta poción", "500$")
const ficha4 = new Ficha ("Poción de Resurreción", "../js/contenido/resurrecion.png", "Regresa de la muerte a cualquier persona despues de morir; Nota: maximo 3 dias para inducir desde la muerte del individuo", "900$")
                                 //creacion de constructor
                            
                            //aplicacion del constructor
const fichas = []                             
                            
fichas.push(ficha1);
fichas.push(ficha2);
fichas.push(ficha3);
fichas.push(ficha4);
                            
                            //aplicacion del constructor
                            
                            //funcion reaccion al boton
                            
function mostrarDescripcion(ficha) {
const contenidoFichas = document.getElementById ("contenido-fichas");
contenidoFichas.innerHTML = "";
                            
contenidoFichas.innerHTML = `
    <img src="${ficha.imagen}" alt="${ficha.titulo}">
    <h2>${ficha.titulo}</h2>
    <p>${ficha.descripcion}</p>
    <h3>${ficha.precio}</h3>
    <button id:add> comprar </button>
    `;
}
                        //funcion reaccion al boton
                            
                         //funcion reaccion al boton regresar
                                                        
function crearBotonRegresar(){
    const botonRegresar = document.createElement ("button");
    botonRegresar.classList.add ("boton-regresar");
    botonRegresar.innerText = "Atras";
    botonRegresar.addEventListener("click", () => {
        impFichas(fichas);
    })
    document.getElementById("contenido-fichas").prepend(botonRegresar);
}
                        //funcion reaccion al boton regresar
                            
                            
                        //Insercion del Dom y eventos
function impFichas(fichas) {
                            
    const contenidoFichas = document.getElementById ("contenido-fichas");
    contenidoFichas.innerHTML = "";
                            
    fichas.forEach(ficha => {
    const divFicha = document.createElement ("div");
    divFicha.classList.add("ficha");
    divFicha.innerHTML = `
    <img src="${ficha.imagen}" alt="${ficha.titulo}">
    <h2>${ficha.titulo}</h2>
    <h3>${ficha.precio}</h3>
    `;
                            //Aplicacion de Eventos
    const botonVerDescripcion = document.createElement ("button");
    botonVerDescripcion.innerText = "Ver Descripción";
    botonVerDescripcion.addEventListener ("click", () =>  {
    mostrarDescripcion(ficha);
    crearBotonRegresar ();
    })
    divFicha.appendChild(botonVerDescripcion)
                            
                    //Aplicacion de Eventos
                                                        
    contenidoFichas.appendChild(divFicha);
    });
}
            //Insercion del Dom y eventos
                            
impFichas(fichas);