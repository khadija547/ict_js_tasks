let cart = ["Shoes", "Bag", "Watch"];
let backup = cart;
backup.push("Cap");
console.log("cart:", cart);       // Shoes, Bag, Watch, Cap  (changed!)
console.log("backup:", backup);   // Shoes, Bag, Watch, Cap

let a = 10;
let b = a;
b = 50;
console.log("a =", a);            // 10  (not changed)
console.log("b =", b);            // 50


backup = [...cart];               // spread operator makes a NEW array
backup.push("Laptop");
console.log("cart:", cart);       // Shoes, Bag, Watch, Cap
console.log("backup:", backup);   // Shoes, Bag, Watch, Cap, Laptop
//A number is a primitive type. let b = a copies the value into a new memory location, so changing b does not touch a. An array is a reference type. let backup = cart does not copy the array; it copies the address of it, so both names point to the same memory location. Changing one changes the other. [...cart] makes a brand-new array in a new memory location, so now they are independent.