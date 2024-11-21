// // //Type Assertion
// // let message:any = "hello World";
// // console.log((message as string).toLowerCase());
// // console.log((message as string).toUpperCase());


// // let ashar:string = "Ashar";
// // console.log((ashar as string).length)

// // interface Cat{
// //     meow:() => void;
// // };
// // interface Dog{
// //     bow:() => void;
// // };
// // type Animal = Cat|Dog;
// // let objN:Animal = {
// //     meow:function(){
// //         console.log("Meow");
// //     },
// //     bow:function(){
// //         console.log("bow");
// //     },
// // };
// // const func = () => {
// //     if("meow" in objN){
// //         objN.meow();
// //     }else if("bow" in objN){
// //         objN.bow();
// //     };
// // }
// // func();
// // let valAny:any = "hello World";
// // if(typeof valAny === "string"){
// //     console.log(valAny.toUpperCase());
// // }else{
// //     console.log(valAny);
// // };
// Error 4
console.log(a);
var a = 45;
//Error 3
// try {
//     throw new Error("Something went wrong");
// } catch (error) {
//     console.log(error)
// }
//Error 1
// const  promise = new Promise((resolve,reject) => {
//     resolve("Success");
// });
// promise.then(val => console.log(val))
// //Error 2
// function combine(inp:string | number){
//     return inp.toString();
// };
// console.log(combine(56));
// let vr = 54;
// //Error 5
// function outer(){
//     let count = 0;
//     return function inner(){
//         count++;
//         return count;
//     }
// };
// let funcOuter = outer();
// // let funcInner = funcOuter();
// console.log(funcOuter());
// console.log(funcOuter());
// console.log(funcOuter());

//Error 6
// let objss = {
//     name:"Sam",
//     id:3,
//     greet:() => {
//         console.log(this.name)
//     }
// }
const b = 5;
console.log(b)

