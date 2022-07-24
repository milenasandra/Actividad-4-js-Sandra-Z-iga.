console.warn('Punto 5 actividad 4')

let huevo = prompt('¿Qué tipo de huevo desea llevar? 1 para "A" o 2 para "AA"?')
let cantHuevo = parseInt(prompt('¿Qué Cantidad de huevos que desea llevar?'))

if (huevo = 1 && cantHuevo < 101){
    alert(`El total a pagar es ${(220 * cantHuevo)}`)
}else if (huevo = 1 && cantHuevo > 100 && cantHuevo < 201){
    alert(`El total a pagar es ${(220 * cantHuevo) / 0.05}`)
}else if (huevo = 1 && cantHuevo > 201 && cantHuevo < 301){
    alert(`El total a pagar es ${(220 *cantHuevo) / 0.08}`)
}else if(huevo = 1 && cantHuevo >= 301){
    alert(`El total a pagar es ${(220 *cantHuevo) / 0.10}`)
}else if(huevo = 2 && cantHuevo < 101){
    alert(`El total a pagar es ${(250 * cantHuevo)}`)
}else if(huevo = 2 && cantHuevo > 100 && cantHuevo < 201){
    alert(`El total a pagar es ${(250* cantHuevo)/ 0.05}`)
}else if(huevo = 2 && cantHuevo > 201 && cantHuevo < 301){
    alert(`El total a pagar es ${(250 *cantHuevo)/ 0.08}`)
}else if(huevo = 2 && cantHuevo >= 301){
    alert(`El total a pagar es ${(250 * cantHuevo)/ 0.10}`)
}