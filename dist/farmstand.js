"use strict";
const printProduct = (product) => {
    console.log(`${product.name} - ${product.price}:${product.quantity}`);
};
const product1 = {
    name: "Pen",
    price: 100,
    quantity: 2,
};
printProduct(product1);
