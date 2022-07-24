console.warn('Ejercicio 3 actividad 4')
// Un maestro desea saber qué porcentaje de hombres y qué porcentaje 
// de mujeres hay en un grupo de estudiantes.

let numHombres=parseInt(prompt(`Ingrese la cantidad de hombres que hay`))
let numMujeres=parseInt(prompt(`Ingrese la cantidad de mujeres que hay`))
const totalEstudiantes= numHombres+numMujeres
let porcentajeHombres= ((numHombres*100)/totalEstudiantes)
let porcentajeMujeres= ((numMujeres*100)/totalEstudiantes)
    

alert(`el porcentaje de hombres es ${Math.round(porcentajeHombres)}% y
 el porcentaje de mujeres es ${Math.round(porcentajeMujeres)}%`)