function makeTransaction(quantity, pricePerDroid) {
    let totalPrice = quantity*pricePerDroid;
    return `You orderded ${quantity} droids worth ${totalPrice} credits!`;
}


console.log(makeTransaction(5, 3000)); 
console.log(makeTransaction(3, 1000)); 
console.log(makeTransaction(10, 500));


console.log(makeTransaction(5, 100))



