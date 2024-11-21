// //Union Type
// interface Admin{
//     name:string,
//     id:number,
//     role:string,
// };
// interface User{
//     name:string,
//     id:number,
// };
// //in operator
// const checkAdminAndUser = (account:Admin|User) => {
//     if("role" in account){
//         console.log("Admin");
//     }else{
//         console.log("user");
//     }
// };
// checkAdminAndUser({name:"Sam",id:1,role:"Admin"})
// checkAdminAndUser({name:"Sam",id:1})

// //instance of
// class Car{
//     constructor(public name:string,public id:number) {}
// };
// let car:Car = new Car("Sam",1);
// if(car instanceof Car){
//     console.log("Yes");
// }else{
//     console.log("no");
// };
// let num:string|number= "Hello World";

// if(typeof num === "string"){
//     console.log(num.toUpperCase())
// }else if(typeof num === "number"){
//     console.log(num.toFixed(2))
// }

//Implicit Type Conversion
// let strs = "num = "+4;

//Question 1: Handling Multiple Input Types
// let valus:string | {name:string,age:number} = "Hello World";
function mulTypes(valus:string | {name:string,age:number}){
    if(typeof valus === "string"){
        console.log(valus.toLowerCase());
    }else{
        console.log(`name:${valus.name}, age:${valus.age}`);
    }
};
mulTypes("Hello World")

