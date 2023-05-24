const argv = require('process').argv

const operacion = argv[2]
const numeroA = +argv[3]
const numeroB = +argv[4]

/*const sumar = require  ('./modulos/sumar');
const restar = require ('./modulos/restar');
const dividir = require('./modulos/dividir');
const multiplicar = require('./modulos/multiplicar');*/

const calculadora = require ('./modulos/calculadora')


if(operacion === "sumar" || operacion ==="+"){
resultado = (calculadora.sumar(numeroA,numeroB))
}else if(operacion === "restar" || operacion ==="-"){
    resultado = (calculadora.restar(numeroA,numeroB))
}else if(operacion === "dividir" || operacion === "/"){
    console.log(calculadora.dividir(numeroA,numeroB))
}else if(operacion === "multiplicar" || operacion === "*"){
    resultado = (calculadora.multiplicar(numeroA,numeroB))
}else{
    resultado = ('Lo siento. No se ingresaron digitos validos')
}


