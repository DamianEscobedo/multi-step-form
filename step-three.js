let data = localStorage.getItem('data');
let datos = JSON.parse(data)

const form = document.forms.complementos

const datosPrevios = function(data){
    for (const prop in data.ons) {
        if(data.ons[prop] !== ''){
            form.elements[prop].checked = true;
            form.elements[prop].parentNode.parentNode.classList.add('active')
        }
    }
    
}

datosPrevios(datos)

let tipoPago = {
    mes: {
        servicio: ['servicio', '$1/mo'],
        almacenamiento: ['almacenamiento', '$2/mo'],
        personalizado: ['personalizado', '$2/mo'],
    },
    year: {
        servicio: ['servicio', '$10/year'],
        almacenamiento: ['almacenamiento', '$20/year'],
        personalizado: ['personalizado', '$20/year'],
    }
}

let precioFn = function(tipo){
   for (const prop in tipoPago[tipo]) {
        let clase = tipoPago[tipo][prop][0];
        let precio = tipoPago[tipo][prop][1];
        document.querySelector(`.ons-price.${clase}`).textContent = precio;
    }
}

precioFn(datos.tipo)

let inputFn = function(tipo){

    let onsOption = document.querySelectorAll('input[type="checkbox"]');
    onsOption.forEach( option => {
        option.addEventListener('click', function(){ 
            if(option.checked){
                option.value = tipoPago[tipo][option.name][0]
            }else{
                option.value = ''
            }
         let label = option.parentNode.parentNode
         label.classList.toggle("active");
        })
    })

}

inputFn(datos.tipo)


let btnNext = document.querySelector('.btn-next');


btnNext.addEventListener('click', function(){
    datos.ons = {
        servicio: form.elements.servicio.value,
        almacenamiento: form.elements.almacenamiento.value,
        personalizado: form.elements.personalizado.value
    }

    window.localStorage.setItem('data', JSON.stringify(datos));
    window.location="step-four.html";
})
