const d=document;

let displayOperador=d.getElementById('display_calcular')
    let displayResultado=d.getElementById('display_resultado')
    let buttons=d.querySelectorAll('.grid_calculadora button')

window.addEventListener('load',()=>{
    
    buttons.forEach(button=>{
        button.addEventListener('click',()=>{
            calculadora(button,displayOperador)
    })
})})


function calculadora(button,displayOperador){

    switch(button.value){
        case 'AC':
            borrarCompleto(displayOperador,displayResultado)
        break;

        case '+/-':
            negacionValor(displayResultado)
        break;

        case '=':
            calcular(displayOperador)
        break;

        case 'delete':
            borrarDigito(displayOperador)
        break;
        
        default:
            actualizar(displayOperador,button)
        break;
    }
}


function calcular(displayOperador){
    displayResultado.value=eval(displayOperador.value)
}


function actualizar(displayOperador,button){
    if(displayOperador.value==='0'){
        displayOperador.value=''
    }
    displayOperador.value+=button.value
}

function borrarCompleto(displayOperador,displayResultado){
    displayOperador.value=0
    displayResultado.value=''
}


function borrarDigito(displayOperador){
    if(displayOperador.value.length>1){
        let index=displayOperador.value.length-1
        let valor=displayOperador.value
        let borrar=valor.slice(0,index)
        displayOperador.value=borrar

    }else{
        displayOperador.value=0
    }   
}

function negacionValor(displayResultado){
   if(displayResultado.value!==' '){
    if(Math.sign(displayResultado.value)!==-1){
        displayResultado.value=`-${displayResultado.value}`
    }else{
        displayResultado.value= eval(displayResultado.value*-1)
    }
   }
}