let array = [2, 5, 7, -5, -100, 55];

function getMenorMayot(array) {
    let menor = array[0];
    let mayor;

    for (let a of array) {
        menor = menor < a ? menor : a;
        mayor = mayor > a ? mayor : a;
    }

    return num = [menor, mayor];

}

let numeros = getMenorMayot(array);
console.log(numeros);