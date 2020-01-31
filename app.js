var containers = document.getElementsByClassName('container');
for(let i = 0, max = containers.length; i < max; i++) {
    // Si el último parametro del AddEventListener es false observamos que en ningún momento pasa por la fase de captura y 
    // por tanto al pasar por la de propagación pasa desde el disparador hasta el document es decir desde el addEventListener 
    // mas interno al más externo. Si es true en ningun momento pasa por la fase de propagación por tanto al  pasar por la de
    //captura pasa desde el document hasta el disparador es decir desde el addEventListener mas externo al más interno
    //containers[i].addEventListener('click', MuestraFaseEvento, false);
    containers[i].addEventListener('click', MuestraFaseEvento, true);
    
}

function MuestraFaseEvento(e) {
    // metodo que devuelve la fase del evento. Si devuelve 1, está en la fase de captura, si devuelve 2, está en la fase
    // de destino y si devuelve 3 en la de propagación
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
