// comece a criar a sua função add na linha abaixo
function add(number1, number2){
    let addamount = number1 + number2

    return addamount

}
// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');
console.log(add(3, 5))

// comece a criar a sua função multiply na linha abaixo
function multiply(number1, number2){
    let amount = 0

    for(let counter = 0; counter < number1; counter++){
        amount = add(number2, amount)   

        
    }

    return amount
} 

// descomente a linha seguinte para testar sua função
 console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');
 console.log(multiply(4, 6))

// comece a criar a sua função power na linha abaixo
function power(number1, number2){
    let amount = 1

    for (let counter = 0; counter < number2; counter++){
        amount = multiply(number1, amount)

        
    }

    return amount
}   

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');
console.log(power(3, 4))

// comece a criar a sua função factorial na linha abaixo

function factorial(number){
    let amount = 1

    for(let counter = 1; counter < number; counter++){
        amount = multiply(number, factorial(number-1))

    }

    return amount;
}
// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');
console.log(factorial(5))

/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(){
  
}




// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
