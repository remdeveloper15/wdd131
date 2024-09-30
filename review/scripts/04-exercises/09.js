let array = [{
    id: 1,
    name: "Nicolas",
}, {
    id:2, 
    name: "Felipe"
}, {
    id:3,
    name: "Chanchito",
}];

let pares = [
    [1, {id: 1, name: "Nicolas"}],
    [2, {id: 2, name: "Felipe"}],
    [3, {id: 3, name: "Chanchito"}],
]

function toPairs(arr) {

    let pairs = []

    for (let a in array) {
        let element = arr[a];
        pairs[a] = [element.id, element];
    }

    return pairs;
}

let result = toPairs(array);
console.log(result);