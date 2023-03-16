
// Bloking  => Bloking mtd execute code synchronously

console.log("Hello world");
console.log("Learn  javaScript");
console.log("Hi Manjunath");


//Non-Bloking ==> executes the code Asynchronously

console.log("Exection ONE");
setTimeout(() => {
    console.log("Exection TWO");
}, 2000);
console.log("Exection THREE");