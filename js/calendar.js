/*---Mostrando el calendario de FullCalendar según documentación---*/
var calendarDiv = document.getElementById('calendar');

var calendar = new FullCalendar.Calendar(calendarDiv, {
    locales: 'es', 
    initialView: 'dayGridMonth', 
    headerToolbar: { 
        left: 'prev', 
        center: 'title', 
        right: 'next',

    },
    footerToolbar: {
        left: 'prevYear',    
        center: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth,today',
        right: 'nextYear'
    }, 
    buttonText: {
        today: 'Hoy',
        month: 'Mes',
        week: 'Semana',
        day: 'Día',
        list: 'Listado'
    }, 
    events: [
        {
            title: 'Reservado',
            description: 'Esta es una descripción de prueba', 
            start: '2022-07-20 12:00:00', 
            end: '2022-07-23 12:00:00', 
            color: 'red', 
            textColor: 'white', 
        }
    ], 
    dateClick: (info) => { 
        abrirModal('crear');

        var fecha = document.getElementById('fechaInicio');
        fecha.value = info.dateStr; 
     },

     eventClick: (info) => {
        document.getElementById('tituloEntrada').innerHTML = info.event.title;
        document.getElementById('titulo').value = info.event.title;
        fechaInicio = cortarFecha(info.event.startStr);
        document.getElementById('fechaInicio').value = fechaInicio[0];

        if(fechaInicio.length > 1){
            document.getElementById('horaInicio').value = fechaInicio[1];
        }

        if(info.event.extendedProps.description){
            document.getElementById('descripcion').value = info.event.extendedProps.description;
        }
        
        document.getElementById('color').value = info.event.backgroundColor;
        document.getElementById('textColor').value = info.event.textColor;

        abrirModal('editar');
    },
    editable: true, 
});

let botonCrear = document.getElementById('crear');
botonCrear.addEventListener('click', ()=> {
    recuperarCampos();
    calendar.addEvent(recuperarCampos());
    cerrarModal();
    vaciarCampos();

/*---Sweet alert al confirmar evento---*/

    Swal.fire({
        title: 'Gracias por confiar! :)',
        text: 'Nos mantendermos en contacto para darte información más detallada de tu reserva',
        imageUrl: './galeria/reductores.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })

});

var modal = document.getElementById('modal');

function abrirModal(){
    modal.style.cssText = "display: flex;";
    window.setTimeout(()=>{
        modal.style.cssText += "opacity: 1; transition: 0.5s";
    }, 10);
}

function recuperarCampos(){
    var nuevoEvento = [];
    nuevoEvento.title = document.getElementById('titulo').value;
    if(document.getElementById('horaInicio').value != ''){
        nuevoEvento.start = document.getElementById('fechaInicio').value + " " + document.getElementById('horaInicio').value;
    }else{
        nuevoEvento.start = document.getElementById('fechaInicio').value;
    }
    nuevoEvento.description = document.getElementById('descripcion').value;
    nuevoEvento.color = document.getElementById('color').value;
    nuevoEvento.textColor = document.getElementById('textColor').value;
    
    console.log(nuevoEvento);
    return nuevoEvento;
}

var botonCerrar = document.getElementById('cancelar');
botonCerrar.addEventListener('click', ()=>{
    cerrarModal();
});

function cerrarModal(){
    modal.style.cssText += 'opacity: 0; transition: 0.5s';
    window.setTimeout(()=>{
        modal.style.cssText = 'display: none';
    }, 500);
}

function vaciarCampos(){
    document.getElementById('titulo').value = '';
    document.getElementById('horaInicio').value = '';
    document.getElementById('descripcion').value = '';
}

calendar.render();
