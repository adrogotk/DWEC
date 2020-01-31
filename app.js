var containers = document.getElementsByClassName('container');
for(let i = 0, max = containers.length; i < max; i++) {
    //containers[i].addEventListener('click', MuestraFaseEvento, false);
    containers[i].addEventListener('click', MuestraFaseEvento, true);
    
}

function MuestraFaseEvento(e) {
    let fase = e.eventPhase;
   
    if (1 === fase) {
        fase = 'captura (capturing)';
    } else if (2 === fase) {
        fase = 'destino (target)';
    } else if (3 === fase) {
        fase = 'propagación (bubbling)';
    } 
console.log('Caja: ' + this.id + ' - ' + fase);
}