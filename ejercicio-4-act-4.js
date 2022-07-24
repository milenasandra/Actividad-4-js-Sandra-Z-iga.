console.warn("Ejercicio 4 ")
// 4. Hacer un algoritmo para implementar una calculadora de las cuatro
// operaciones básicas y que le permita al usuario elegir qué operación
// va a realizar; con palabras, es decir: sumar, restar, multiplicar o dividir.

   
let num1=prompt("Ingrese un número")
valor1= parseInt(num1)
let num2=prompt("Ingrese otro número")
valor2= parseInt(num2)

let suma= num1+num2
let resta= num1-num2
let multiplicar= num1*num2
let dividir = num1/num2

let procedimiento=parseInt(prompt("Ingrese la operación que desea realizar 1 para sumar, 2 para restar, 3 para multiplicar, 4 para dividir"))
if(procedimiento === 1){
    alert(`la suma es ${suma}`)
} else if(procedimiento === 2){
    alert(`la resta es ${resta}`)
} else if(procedimiento === 3){
    alert(`la multiplicacion es ${multiplicar}`)
} else if(procedimiento === 4){
    alert(`la division es  ${dividir}`)
}else {
    console.error('Ingrese una operación valida')
}