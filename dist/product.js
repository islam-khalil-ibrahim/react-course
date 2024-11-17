"use strict";
console.log('------------task 4------------');
const products = [
    { name: 'phone', price: 4000 },
    { name: "book", price: 20 },
    { name: "Laptop", price: 500 }
];
const calc_total_price = (product) => {
    return product.reduce((total, product) => total + product.price, 0);
};
const totalPrice = calc_total_price(products);
console.log(`Total product price = ${totalPrice}`);
////////////////////////////////////
console.log('------------task 5------------');
const is_valid_email = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
const email1 = "islam@gmail.com";
console.log(`${email1} is valid ? ${is_valid_email(email1)}`); // Output: true
console.log(is_valid_email("invalid")); // Output: false
console.log(is_valid_email("is@@@domain.com")); // Output: false
console.log(is_valid_email("ali@domain")); // Output: false
console.log(is_valid_email("someone@gmail.ss.ss")); // Output: true
