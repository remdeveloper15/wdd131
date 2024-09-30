//Shorth Circut

//All of them return a false value

//false
//0
//""
//null
//undefined
//NaN

//Aqui es algo complejo. Basicamente esta diciendo que si name no tiene valor, entonces que le ponga uno, en este caso Helaman.
let name = "";
let username = name || "Helaman";
console.log(username);

//Solo retorna el primero si es false
function fn1() {
    console.log("I'm function 1");
    return false
}

function fn2() {
    console.log("I'm function 2");
    return false
}

let x = fn1() && fn2();
