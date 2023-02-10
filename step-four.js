let data = localStorage.getItem('data');
let datos = JSON.parse(data)

let tipoPago = {
    mes: {
        plan: {
            arcade: ['Arcade (Monthly)', '$9/mo', 9,],
            advanced: ['Advanced (Monthly)', '$12/mo', 12],
            pro: ['Pro (Monthly)', '$15/mo', 15]
        },
        servicio: ['Servicio en línea', '$1/mo', 1],
        almacenamiento: ['Almacenamiento más grande', '$2/mo', 2],
        personalizado: ['Perfil personalizable', '$2/mo', 2],
        texto: ['month', 'mo']
    },
    year: {
        plan: {
            arcade: ['Arcade (Yearly)', '$90/yr', 90],
            advanced: ['Advanced (Yearly)', '$120/yr', 120],
            pro: ['Pro (Yearly)', '$150/yr', 150]
        },
        servicio: ['Servicio en línea', '$10/year', 10],
        almacenamiento: ['Almacenamiento más grande', '$20/year', 20],
        personalizado: ['Perfil personalizable', '$20/year', 20],
        texto: ['year', 'yr']
    }
}
let totalNum = 0;

const datosViewFn = function(data){


    document.querySelector(`.plan`).textContent = tipoPago[data.tipo].plan[data.plan][0]
    document.querySelector(`.plan-precio`).textContent = tipoPago[data.tipo].plan[data.plan][1]
    totalNum += tipoPago[data.tipo].plan[data.plan][2]

    let itemAll = '';
    for (const prop in data.ons) {

        if(data.ons[prop] !== ''){
            totalNum += tipoPago[data.tipo][prop][2]
            let item = `
            <div class="total-ons__item">
                <div class="ons-item">${tipoPago[data.tipo][prop][0]}</div>
                <div class="ons-precio">${tipoPago[data.tipo][prop][1]}</div>
            </div>
            `
            itemAll += item
        }
    }
    
    document.querySelector('.total-ons').innerHTML = itemAll
    document.querySelector('.final-tipo').textContent = tipoPago[data.tipo].texto[0]
    document.querySelector('.final-numero').textContent = `+$${totalNum}${tipoPago[data.tipo].texto[1]}`
}

datosViewFn(datos) 

