let data = localStorage.getItem('data');
let datos = JSON.parse(data)



let planOption = document.querySelectorAll('.plan-option')
let planOptionArry = [...planOption]

const formPlan = document.forms.plan;
let btnNext = document.querySelector('.btn-next');
let tipoPlan = document.querySelector('.switch input')
let planChange = document.querySelector('.plan-change')
let promoYearly = document.querySelectorAll('.promo-yearly')
let promoYearlyArry = [...promoYearly]

let tipo = 'mes';

let planObj = {
    year: {
        arcade: '90/yr',
        advanced: '120/yr',
        pro: '150/yr'
    },
    mes: {
        arcade: '9/mo',
        advanced: '12/mo',
        pro: '15/mo'
    }
}

let pricePro = document.querySelector('.plan-price.pro span');
let priceAdvance = document.querySelector('.plan-price.advanced span');
let priceArcade = document.querySelector('.plan-price.arcade span');

const datosPrevios = function(){

    for (let i = 0; i < planOptionArry.length; i++) {
        planOptionArry[i].classList.remove('active')
    }
    if(datos.plan){
        let inputSlect = document.querySelector(`input.${datos.plan}`);
        inputSlect.checked = true;
        inputSlect.parentNode.classList.add('active');

        if(datos.tipo === 'year'){
            tipoPlan.checked = true
            planChange.classList.add('active');

            datos.plan = formPlan.elements.plan.value;
            tipo = datos.tipo

        }else{
            planChange.classList.remove('active');
            tipoPlan.checked = false

            datos.plan = formPlan.elements.plan.value;
            tipo = datos.tipo

        }

    }
    
    
    
}

datosPrevios()



planOption.forEach( option => {
    option.addEventListener('click', function(){
        for (let i = 0; i < planOptionArry.length; i++) {
            planOptionArry[i].classList.remove('active')
            
        }
        option.classList.add('active')
    })
});



tipoPlan.addEventListener('change', (event) => {

    if(formPlan.planChange.checked){

        planChange.classList.add('active');

        for (let i = 0; i < promoYearlyArry.length; i++) {
            promoYearlyArry[i].classList.add('year');
        }
       
        tipo = 'year';
        pricePro.textContent = planObj.year.pro
        priceAdvance.textContent = planObj.year.advanced
        priceArcade.textContent = planObj.year.arcade
    }else{
        planChange.classList.remove('active');

        for (let i = 0; i < promoYearlyArry.length; i++) {
            promoYearlyArry[i].classList.remove('year');
            
        }

        tipo = 'mes';
        pricePro.textContent = planObj.mes.pro
        priceAdvance.textContent = planObj.mes.advanced
        priceArcade.textContent = planObj.mes.arcade
    }
})

btnNext.addEventListener('click', function(e) {

    datos.plan = formPlan.elements.plan.value;
    datos.tipo = tipo ;

    window.localStorage.setItem('data', JSON.stringify(datos));
    window.location="step-three.html";
    
})


