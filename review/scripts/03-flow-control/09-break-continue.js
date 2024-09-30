//Cotinue salta el dato que elijas, en este caso se salto el 2
let i = 0;

while (i < 6) {    
    i++;

    if (i === 2) {
        continue;
    }

    if (i === 4){
        break;
    }
    console.log(i);
}