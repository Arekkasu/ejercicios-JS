function apicua (number) {

    if (!number || isNaN(number)) return "El valor ingresado no es un numero.";


    let Number_string = number.toString()
    let reverse_number = [...Number_string].reverse().join("")


    if ( number != reverse_number ) return `El numero ${number} no es apicua`


    return `${number} es apicua.`

    
}

console.log(apicua("212"))