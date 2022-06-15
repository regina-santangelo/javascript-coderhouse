let carts = document.querySelectorAll('.comprar');

let products = [
    {
        id:1,
        name:'Aceite esencial de rosas',
        precio: 720,
        inCart: 0
    },
    {
        id:2,
        name:'Crema de manzanilla',
        precio: 1000,
        inCart: 0
    },
    {
        id:3,
        name:'Aceite esencial de jazmín',
        precio: 700,
        inCart: 0
    }
]

for(let i=0; i < carts.length; i++){
    carts[i].addEventListener ('click', (e) => {
        e.preventDefault();
        cartNumbers(products[i]);
    })
}

function guardadoEnCarrito (){
    let productNumbers = localStorage.getItem('cantidad');

    if(productNumbers){
        document.querySelector('.numCarrito').textContent = productNumbers;
    }
}

function cartNumbers (producto) {
    console.log('el producto es', producto);
    let productNumbers = localStorage.getItem('cantidad');
    productNumbers = parseInt(productNumbers);

    if (productNumbers){
        localStorage.setItem('cantidad', productNumbers + 1);
        document.querySelector('.numCarrito').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cantidad', 1);
        document.querySelector('.numCarrito').textContent =  1;
    }
}

guardadoEnCarrito();

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
//----------------------------------------------------

const formulario = document.getElementById('form');

if(formulario){
    formulario.addEventListener('submit', function(e){
    e.preventDefault();
    let inputUno = document.getElementById('input1').value= this.ariaPlaceholder;
    console.log(inputUno);
    let inputDos = document.getElementById('input2').value=this.ariaPlaceholder;
    console.log(inputDos);
    let inputTres = document.getElementById('input3').value=this.ariaPlaceholder;
    console.log(inputTres);
    
})

let enviar = document.getElementById('enviar');

enviar.addEventListener('click', ()=>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tu mensaje fué enviado, en breve te estaremos contactando!',
        showConfirmButton: false,
        timer: 2500
      })
})
reset(inputUno.value);
reset(inputTres.value);
}


