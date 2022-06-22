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
    // console.log('el producto es', producto);
    let productNumbers = localStorage.getItem('cantidad');
    productNumbers = parseInt(productNumbers);

    if (productNumbers){
        localStorage.setItem('cantidad', productNumbers + 1);
        document.querySelector('.numCarrito').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cantidad', 1);
        document.querySelector('.numCarrito').textContent =  1;
    }

    items(producto);
}

function items(producto) {
    let itemsCarrito = localStorage.getItem('Productos en carrito');
    itemsCarrito = JSON.parse(itemsCarrito);
    console.log('Los items en el carrito son', itemsCarrito);

    producto.inCart = 1;

    itemsCarrito = {
        [producto.id]:producto
    }

    localStorage.setItem('Productos en carrito', JSON.stringify(itemsCarrito));
}

guardadoEnCarrito();

//Aplicando Eventos (en formulario de contacto)
//----------------------------------------------------

const formulario = document.getElementById('form');

if(formulario){
    formulario.addEventListener('submit', function(e){
    e.preventDefault();
    let inputUno = document.getElementById('input1').value;
    console.log(inputUno);
    let inputDos = document.getElementById('input2').value;
    console.log(inputDos);
    let inputTres = document.getElementById('input3').value;
    console.log(inputTres);
    
    const serviceID = 'default_service';
    const templateID = 'template_pc7ti8i';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'ENVIAR';
    }, (err) => {
      btn.value = 'ENVIAR';
      alert(JSON.stringify(err));
    });
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
}
reset(inputUno.value);
reset(inputTres.value);





