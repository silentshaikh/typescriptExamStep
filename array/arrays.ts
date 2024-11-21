// //Array
// // let days:string[]= ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
// // let monday:string = "monday";
// // let tuesday:string = "tuesday";
// // let wednesday:string = "wednesday";
// //Array is mutable
// let numArr:number[] = [1,2,3,4,5,6,7];
// numArr = [7,8];
// let anyArr:any[] = [1,"Apple",true,undefined];
// // console.log(days[0]);
// //Property of Array
// // console.log(days.length);

// //Methods of Array
// // //pop()
// // console.log("Pop Method\n");
// // let popV =  days.pop();
// // console.log(days);
// // console.log(popV);
// // //push()
// // console.log("\n Push Method\n")
// // let pushArr = days.push("Sunday","Apple");
// // console.log(days);
// // console.log(pushArr);
// // //shift();
// // console.log("\n Shift Method\n")
// // let shiftArr =  days.shift();
// // console.log(days);
// // console.log(shiftArr);
// // //unshift();
// // console.log("\n unshift Method\n")
// // let unshiftArr =  days.unshift("Monday","Mon");
// // console.log(days);
// // console.log(unshiftArr);
// let days:string[]= ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

// //slice()
// let sliceArr = days.slice(0,5);
// // sliceArr.pop();
// console.log("Original Array",days);
// console.log("Copy Array",sliceArr);

// // concat()
// let numOne:number[] = [1,2,3,4,5];
// let numTwo:number[] = [6,7,8,9,10];
// let numFour:number[] = [11,12,13,14,15];
// let numThree:number[] = numOne.concat(numTwo,numFour);
// console.log(numThree);
// console.log(numOne);
// console.log(numTwo);

// //indexOf()
// let fruits:string[] = ["Apple","Banana","Orange","Kiwi","Orange","Pineapple"];
// let fruitIndex = fruits.indexOf("Orange");
// console.log("Index Of",fruitIndex);

// //lastIndexOf()
// let fruitLastIndexOf = fruits.lastIndexOf("Orange");
// console.log("Last Index Of",fruitLastIndexOf);

// //reverse()
// let alphabct = ['a','b','c','d','e','f','g','h','i'];
// alphabct.reverse();
// console.log(alphabct);

// //forEach
// //jab bhi function call hota ha to () bracket ke andr jo ata ha usko kiya bolte ha
// fruits.forEach((e,i,a) => {
//     console.log(e,i,a);
// });
// //foreach return kiya krta ha ashar

// //reduce()
// let numbArr = [10,20,30,40,50,60];
// let reduceArr = numbArr.reduce((prev,curr) => {
//     return prev+curr;
// },0);
// console.log("Addition :",reduceArr);

// let reduceArrMul = numbArr.reduce((prev,curr) => {
//     return prev*curr;
// },1);
// console.log("Multiplication :",reduceArrMul);

// let reduceArrDivis = numbArr.reduce((prev,curr) => {
//     return prev/curr;
// });
// console.log("Division :",reduceArrDivis);

// let arr = [1,2,3,4,7,[1,2,3,4,5,[6]],[7,8]];
// let flatArr = arr.flat(2);
// console.log(flatArr)
// let flatMap = arr.flatMap((e) => {
//     if(Array.isArray(e)){
//         return e.flatMap((e) => Array.isArray(e) ? e.map((e) => e*2): e*2)
//     }else{
//         return e*2;
//     };
// });
// console.log(flatMap);
let arr = [1,2,3,4,5,6,7,8,9]
let strToArr = Array.from(arr);
strToArr.pop();
console.log(strToArr);
console.log(arr);

