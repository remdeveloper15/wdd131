function totalPrice(price, iva) {
    return price + price * iva;
}

let total = totalPrice(19.90, 0.15);
console.log(Math.round(total));