let array = [2, 5, 7, 15, -5, -100, 55, 20];

function positives(arr) {

    let number = 0;

    for (let a of array) { 
        if (a > number) {
            number++;
        }
    }

    return number

}

let result = positives(array);
console.log(result);