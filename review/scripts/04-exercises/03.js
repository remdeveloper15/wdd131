function getByIndex(arr, idx) {
    if (idx < 0 || arr.length <= idx) {
        return "That's not a valid element"
    }

    return arr[idx];
}

let result = getByIndex([1, 2], 4)
console.log(result);