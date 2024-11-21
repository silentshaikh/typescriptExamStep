// // function callWorld(){
// //     console.log("Hello World");
// //     return 34;
// // };
// // console.log(typeof callWorld);

// // let apis = "hello";
// // if(apis){
// //     console.log("yes");
// // }else{
// //     console.log("no");
// // };

// //Optional Parameter 
// // let funcOptinal = (a:string,b?:number) =>  {
// //     return `Name: ${a} , Age:${b}`;
// // };
// // let funcOne:string = funcOptinal("Ahmed",20); 
// // console.log("Optional Parameter");
// // console.log(funcOne);

// // //Default Parameter
// // let funcDefault = (a:string,b:number=20) =>  {
// //     return `Name :${a} , Age:${b}`;
// // };
// // let funcTwo:string = funcDefault("Ahmed");
// // console.log("Default Parameter");
// // console.log(funcTwo);

// // //Rest Parameter
// // console.log(`Rest Parameter`)
// // let funcRest = (b:number,c:number,...a:number[]) => {
// //     // console.log(a);
// //     let reduceRestParam = a.reduce((prev,curr) => {
// //         return prev+curr;
// //     },0);
// //     console.log(reduceRestParam)
// // };
// // funcRest(10,20,30,40,50,60,70,80,90,100);

// //Function Overload
// function funcOverload(a:string,b:number,c:number):string;
// function funcOverload(a:number,b:string):string;
// function funcOverload(a:any,b:any,c?:any):any{
//     if(c){
//         return a+b+c;
//     }else{
//         return a+b;
//     }
// };
// console.log(funcOverload("hello",5,5).toUpperCase());

// //Closures

// function parentFunc(){
//     let ab:number = 5;
//     return function(b:number):(c:number) => number{
//         return function(c:number):number{
//             return ab+b+c;
//         }
//     }
// };
// let parensFunc = parentFunc();
// let childFunc = parensFunc(5);
// let grandChildFunc = childFunc(5);
// console.log(grandChildFunc);


// global scope
let globlScope = 45;

function loclScope(){
    let localScope =40;  //Local Scope
};


//Recursive Function
// function recursivFunc(count:number){
//     if(count<=10 && count >=0){
//         console.log(count);
//         recursivFunc(++count);
//     };
// };
// recursivFunc(0);

// for(let i=0; i<=10; i++){
//     console.log(i);
// };

// function factorilFive(num:number){
//     if(num<1){
//         return 1;
//     }else{
//         return num * factorilFive(num-1);
//     };
// };
// console.log(factorilFive(5));
// 5! => 5*4*3*2*1 => 120


//Hoisting
// Function Hoisting

// sayHello();
// function sayHello(){
//     console.log("hello");
// };

//Function Expression
// funcExpres();
// let funcExpres = function(){
//     console.log("Function Expression");
// } 

// console.log(funcVar);
// var funcVar = () => {
//     console.log("Var Keyword Function");
//     return "hello World";
// };

//Arrow Function
// func1();
// let func1 = () => {
//     console.log("Func1");
// };
// func1();


//Variable Hoisting
// console.log(ab);
// var ab = 56;
// console.log(bs)
// let bs = 90;
// let funcAno = function sayHello(){
//     console.log("hello");
//     sayHello()
// };
// funcAno();

//Tail Recursion
// function tailRecursion(n:number, accumulator:number = 1) {
//     if (n <= 1) {
//         return accumulator;
//     }
//     return tailRecursion(n - 1, n * accumulator);
// }

// console.log(tailRecursion(5));


// let findFibonacciTailRec = (n: number, a: number = 0, b: number = 1): number => {
//     if (n === 0) {
//         return a;
//     }
//     if (n === 1) {
//         return b;
//     }
//     return findFibonacciTailRec(n - 1, b, a + b);
// };


// regular recursion

// let findFibonci = (n:number,):number => {
//     if(n<=1){
//         return n;
//     }else{
//         return findFibonci(n-1) + findFibonci(n-2);
//     } 
// };
// console.log(findFibonci(4));