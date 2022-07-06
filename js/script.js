/*---Carrito de compras---*/

let carts = document.querySelectorAll('.comprar');
/*Array con productos */
let products = [
    {
        id:1,
        name:'Aceite esencial de rosas',
        precio: 720,
        tag: "aceite-esencial-rosas",
        inCart: 0
    },
    {
        id:2,
        name:'Crema aroma manzanilla',
        precio: 1000,
        tag: "crema-manzanilla",
        inCart: 0
    },
    {
        id:3,
        name:'Aceite esencial de jazmín',
        precio: 700,
        tag:"aceite-esencial-jazmin",
        inCart: 0
    }
]

/*---Programacion del boton de 'agregar al carrito'---*/

for(let i=0; i < carts.length; i++){
    carts[i].addEventListener ('click', (e) => {
        e.preventDefault();
        cartNumbers(products[i]);
        costoTotal(products[i]);

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se agregó al carrito',
            showConfirmButton: false,
            timer: 1500
          })
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

/*---Registrando los productos seleccionados---*/

function items(producto) {
    let itemsCarrito = localStorage.getItem('Productos en carrito');
    itemsCarrito = JSON.parse(itemsCarrito);
    console.log('Los items en el carrito son', itemsCarrito);

    if(itemsCarrito != null){
        if(itemsCarrito[producto.id] == undefined){
            itemsCarrito = {
                ...itemsCarrito,
                [producto.id]:producto
            }
        }
        itemsCarrito[producto.id].inCart += 1;
    } else {
        producto.inCart = 1;
        itemsCarrito = {
            [producto.id]:producto
        }
    }
    localStorage.setItem('Productos en carrito', JSON.stringify(itemsCarrito));
}

/*---Cálculo del costo total---*/

function costoTotal (producto){
    console.log(producto.precio)
    let precioTotalCarrito = localStorage.getItem("Precio");

    if(precioTotalCarrito != null){
        precioTotalCarrito = parseInt(precioTotalCarrito);
        localStorage.setItem("Precio", precioTotalCarrito + producto.precio);
    } else {
        localStorage.setItem("Precio",producto.precio);
    }
}

/*--- Creación de plantilla literal para visualizar los productos seleccionados en el html---*/
  
function abrirCarrito (){
    let itemsCarrito = localStorage.getItem('Productos en carrito');
    itemsCarrito = JSON.parse(itemsCarrito);
    let paginaCarrito = document.querySelector('.productosEnCarrito');
    let precioTotalCarrito = localStorage.getItem("Precio");
    if(itemsCarrito && paginaCarrito){
        paginaCarrito.innerHTML = ``;
        Object.values(itemsCarrito).map(item =>{
            paginaCarrito.innerHTML += `<div class= "productos">
            <div class= "foto"><p> ${item.name} </p>
            <img src = "./galeria/${item.tag}.jpg"> </div>
            <p class= "price"> ${item.precio} </p>
            <p class="cantidad2"> ${item.inCart} </p>
            <p class="total2"> $${item.inCart * item.precio} </p>
            </div>
            `;
        });

        paginaCarrito.innerHTML += 
        `<div class="productosEnCarrito">
            <h5 class="totalFinal">Total:</h5>
            <h5 class="totalFinal">$${precioTotalCarrito}</h5>
        </div>`;

    }
}

guardadoEnCarrito();
abrirCarrito();

//Formulario de contacto //----------------------------------------------------

const formulario = document.getElementById('form');

if(formulario){
    formulario.addEventListener('submit', function(e){
    e.preventDefault();
    let inputUno = document.getElementById('input1').value = this.ariaPlaceholder;
    let inputDos = document.getElementById('input2').value = this.ariaPlaceholder;
    let inputTres = document.getElementById('input3').value= this.ariaPlaceholder;

//API Email JS----------------------------------------------------------------
    
    const serviceID = 'default_service';
    const templateID = 'template_pc7ti8i';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'ENVIAR';
    }, (err) => {
      btn.value = 'ENVIAR';
      alert(JSON.stringify(err));
    });

//Sweet Alert-----------------------------------------------------------------

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tu mensaje fué enviado, en breve te estaremos contactando!',
        showConfirmButton: false,
        timer: 2500
      });
})
}