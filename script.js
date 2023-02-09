let data = localStorage.getItem('data');
let datos = {}

let nextStep = document.querySelector('.btn-next');
const form = document.forms.datos

const datosPrevios = function(data){
    form.elements.nombre.value = data.name
    form.elements.telefono.value = data.tel
    form.elements.correo.value = data.mail
}

if(data === null){
    datos = {}
}else{
    datos = JSON.parse(data)
    datosPrevios(datos)
}

let nameContainer = document.querySelector('.input-container.name');
let mailContainer = document.querySelector('.input-container.mail');
let telContainer = document.querySelector('.input-container.tel');
let inputs = document.querySelectorAll('.input-container .input')
let inputsContainer = document.querySelectorAll('.input-container')
let btnNext = document.querySelector('.btn-next')

nextStep.addEventListener('click', function (e) {
    
    let send = 1;
    datos.name = form.elements.nombre.value,
    datos.tel = form.elements.telefono.value,
    datos.mail = form.elements.correo.value
    for (const prop in datos) {
        if(datos[prop] === ''){
            let refrenciaInput = {
                name: nameContainer,
                tel: telContainer,
                mail: mailContainer
            }
            refrenciaInput[prop].classList.add('required')
            send = 0
        }
    }

    if(send === 1){
        window.localStorage.setItem('data', JSON.stringify(datos));
        window.location="step-two.html";
    }else{
        return 
    }

})


inputs.forEach( input => {
    input.addEventListener('click', function() {
        this.parentNode.classList.remove('required');
    })
})




