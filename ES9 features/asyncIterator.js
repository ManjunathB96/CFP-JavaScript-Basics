
//*****    Asynchronous iterator   ******* */

// Asynchronous iterator just like regular iterators except that the next() mth returns a promise 

//therefore await can be used with the for..of loop to run asynchronous operations in a serial manner 

let arr=[1,2,3,4,5]
async function process(arr) {
    for await (let i of arr) {
        console.log(i);
    }
}












