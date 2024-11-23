"use strict";
console.log('\n ------------task 4------------ \n');
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
console.log(` \n ------------task 5------------ \n`);
const is_valid_email = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
const email1 = "islam@gmail.com";
const email2 = "invalid";
const email3 = "is@@@domain.com";
const email4 = "ali@domain";
const email5 = "someone@gmail.ss.ss";
console.log(`___ ${email1} ___ is valid ? ${is_valid_email(email1)}`); // Output: true
console.log(`___ ${email2} ___ is valid ? ${is_valid_email(email2)}`); // Output: false
console.log(`___ ${email3} ___ is valid ? ${is_valid_email(email3)}`); // Output: false
console.log(`___ ${email4} ___  is valid ? ${is_valid_email(email4)}`); // Output: false
console.log(`___ ${email5} ___ is valid ? ${is_valid_email(email5)}`); // Output: true
