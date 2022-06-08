let carts = document.querySelectorAll('.cart');

let products = [
    {
        name:'Masaje descontraturante',
        precio: 1000,
        inCart: 0
    },
    {
        name:'Pediluvios',
        precio: 700,
        inCart: 0
    },
    {
        name:'Linfaticos faciales',
        precio: 870,
        inCart: 0
    },
    {
        name:'Reductores',
        precio: 1200,
        inCart: 0
    }
]

for(let i=0; i < carts.length; i++){
    carts[i].addEventListener ('click', () => {
        cartNumbers();
    })
}

function cartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers, +1);

    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.card span').textContent = 1;
    }
}

console.log(carts.length);

//APLICANDO DOM

// let titulo = document.getElementById('tituloProducto');
// if(titulo){
//     titulo.innerText = prompt("Introducí un nuevo nombre para el título");
//     console.log(titulo.innerText); 
// }

// let plantilla = `ID:${productoDom.id} \nProducto ${productoDom.nombre} \nAroma:${productoDom.aroma} \nPrecio:${productoDom.precio1}`;

// let nuevaCard = document.createElement('div');
// nuevaCard.innerHTML = `<h2>Soy una card creada desde DOM</h2>
// <h4>${productoDom.nombre}</h4>
// <p>Aroma:${productoDom.aroma}</p>
// <img src="./galeria/belleza.png">
// <p>${productoDom.precio1}</p>`

// document.body.prepend(nuevaCard)
// nuevaCard.className = "card"

//Aplicando Eventos (en formulario de contacto)

const formulario = document.getElementById('form');

if(formulario){
    formulario.addEventListener('submit', function(e){
    e.preventDefault();
    let inputUno = document.getElementById('input1').value;
    console.log(inputUno);
    let inputDos = document.getElementById('input2').value;
    console.log(inputDos)
    let inputTres = document.getElementById('input3').value;
    console.log(inputTres)
})
let enviar = document.getElementById('enviar');
enviar.onclick = () =>{
    alert("Gracias por tu mensaje ,en breve te estaremos contactando.");
} 
}


