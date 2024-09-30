//Do first execute te process and then realizes the evaluation of the condition

let i = 2;

do {
    if (i % 2 == 0){
        console.log("Numero par", i);
        
    }
    i++;
} while (i < 2);

console.log("End of Bucle");