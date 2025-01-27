//Tus compañeros te pidieron que les copiaras unos documentos. 
// Sabes que hay 'n' compañeros y que el documento tiene 'm' páginas.
// Tu tarea es calcular cuántas páginas en blanco necesitas. Si n < 0 m < 0 devuelve 0.

function paperwork(n, m) {
    if (n < 0 || m < 0 ) {
        return 0;
    }else{
        let suma = n * m
        return suma;
    }
}
//milisegundos
function past(h, m, s){
    const miliseg = 1000
    const segundos = 60 
    const minutos = 60
    
    const milisegundoshoras = h * miliseg * segundos * minutos
    const milisegunosminutos = m * segundos * miliseg
    const milisegundos = s * miliseg
    
    return milisegundoshoras + milisegunosminutos + milisegundos
    
}
//devolver respuesta apropiada
  function greet (name, owner) {
    if (name === owner) {
        return("Hello boss");
    }else{
        return("Hello guest"); 
    }
}