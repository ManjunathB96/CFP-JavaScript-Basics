// node iife.js

//***************   Immeditely invoked function expression *******************/

//Note
//iife function runs as soon as it is defined/created


 
(function () {
    console.log("Hii am IIFE function ");
})();

(function (name) {
    console.log("My name is :",name);
})("Ram kumar");





