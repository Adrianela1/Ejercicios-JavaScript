//Ejercicio 1
function puedeVotar(edad) {
    if (edad >= 18) {
        console.log("Puede votar");
    } else {
        console.log("No puede votar");
    }
}

//Ejercicio 2
function calcularPromedio(calificacion1, calificacion2, calificacion3, calificacion4) {
    var promedio = (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;
    
    if (promedio >= 7) {
        console.log("Aprobado");
    } else {
        console.log("Reprobado");
    }
}

// Ejercicio 4 XD
function esDivisiblePor7y8(numero) {
    if (numero % 7 === 0 && numero % 8 === 0) {
        console.log("Verdadero");
    } else {
        console.log("Falso");
    }
}

// Ejercicio 5
function esDivisiblePor4o9(numero) {
    if (numero % 4 === 0 || numero % 9 === 0) {
        console.log("Verdadero");
    } else {
        console.log("Falso");
    }
}

// Ejercicio 6
function calculadora(operacion, num1, num2) {
    switch (operacion) {
        case 'suma':
            console.log(num1 + num2);
            break;
        case 'resta':
            console.log(num1 - num2);
            break;
        case 'multiplicacion':
            console.log(num1 * num2);
            break;
        case 'division':
            console.log(num1 / num2);
            break;
        default:
            console.log("Operación no válida");
    }
}





