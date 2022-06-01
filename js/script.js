class carrito {
    constructor(producto, precio) {
        this.producto = producto;
        this.precio = precio;
    }
}

const carrito1= new carrito("crema", 500);
const carrito2 = new carrito("exfoliante", 600);
const carrito3 = new carrito ("crema para masajes", 750);

// let opcion = prompt("Elegi un producto: 1 Crema-500. \n 2 Exfoliante-600. \n 3 Crema para masajes-725. \n 4 Mascarilla Facial \n Presiona X para cancelar la operacion")

// while (opcion != 'X'){
//     switch (opcion) {
//     case '1':
//         let cantidad = parseFloat(prompt("Ingresa la cantidad"));
//         if(cantidad > 1){
//             resultado = 500 * cantidad;
//             alert("El total de tu compra es:" + resultado)
//         } else{
//             alert("introducí un numero valido -1 o más-")
//         }
//         break;

//     case '2':
//         let cantidad2 = parseFloat(prompt("Ingresa la cantidad"));

//         if(cantidad2 > 1){
//             resultado= 600 * cantidad2
//             alert("El total de tu compra es:" + resultado);
//         } else{
//             alert("introducí un numero valido -1 o más-")
//         }
//         break;
    
//     case '3':
//         let cantidad3 = parseFloat(prompt("Ingresa la cantidad"));
//         if(cantidad3 > 1){
//             resultado= 750 * cantidad3
//             alert("El total de tu compra es:" + resultado);
//         } else{
//             alert("introducí un numero valido -1 o más-")
//         }
//         break;

//     case "4":
//         alert("Sin stock")
//     break;

//     default:
//         break;
//     }
//  alert("Gracias por tu compra"); break;
// }

const productos = ["crema","exfoliante","crema para masajes"];
console.log(productos.length)

productos.push(new carrito("Mascarilla facial", 300));
console.log(productos.length)

//APLICANDO DOM

let titulo = document.getElementById('tituloProducto');
titulo.innerText = prompt("Introducí un nuevo nombre para el título");
console.log(titulo.innerText);

let productoDom = {
    id: 1,
    nombre: 'Crema',
    aroma: 'Lavanda',
    precio1: 500
};

let plantilla = `ID:${productoDom.id} \nProducto ${productoDom.nombre} \nAroma:${productoDom.aroma} \nPrecio:${productoDom.precio1}`;

let nuevaCard = document.createElement('div');
nuevaCard.innerHTML = `<h2>Soy una card creada desde DOM</h2>
<h4>${productoDom.nombre}</h4>
<p>Aroma:${productoDom.aroma}</p>
<img src="./galeria/belleza.png">
<p>${productoDom.precio1}</p>`

document.body.prepend(nuevaCard)
nuevaCard.className = "card"

//Aplicando Eventos (en formulario de contacto)

const formulario = document.getElementById('form');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    let inputUno = document.getElementById('input1').value;
    console.log(inputUno);
})





