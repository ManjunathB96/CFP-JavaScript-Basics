//node revesearr.js

// let arr = [1, 2, 3, 4, 5];
// let temp1 = [];
// let temp2 = [];
// const len = arr.length;
// for (let i = len / 2; i >0; i--) {
//   temp1.push(i);
// }
// for (let j = arr.length; j > len / 2; j--) {
//   temp2.push(j);
// }
// console.log(temp1);
// console.log(temp2);

// let arr = [1, 2, 3, 4, 5];
// let temp = [];

// for (let i = arr.length; i >= 1; i--) {
//   temp.push(i);
// }

// console.log(temp);

// let arr1 = temp.slice(2, 5);
// console.log(arr1);

// let arr2 = temp.slice(0, 2);
// console.log(arr2);
// let result=arr1+','+arr2
// console.log(result);



const N = 5, K = 3
let arr = [1,2,3,4,5]
let j = 0
let arr1 = []
let k = 0
let arr2 = []
for(let i = 0; i<N; i++){
    if(arr[i] <= K){
        arr1[j++] = arr[i]
    }else{
        arr2[k++] = arr[i]
    }    
}
arr1.reverse()
arr2.reverse()
console.log(arr1);
console.log(arr2);

let result=arr1+','+arr2
console.log(result);