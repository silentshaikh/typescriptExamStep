// //Enum

// //Numeric Enum
// enum Directions{
//     up,
//     down,
//     left,
//     right
// }

// //String Enum
// enum Fruits{
//     apple = "Apple",
//     banana = "banana",
//     orange = "orange",
// };

// //Reverse Mapping
// // its only in numeric enums
// let vals = Directions.left;
// console.log(Directions[vals]);
// console.log(Directions[0]);

// //const enum
// const enum Color{
//     red,
//     green,
//     blue
// };
// console.log(Color.blue)

//Enum is a set constant values


//String Enum
// enum Status{
//     admin = "admin",
//     user = "user",
// };
// let status1:Status = Status.admin;
// console.log(status1)
// if(status1 === Status.admin){
//     console.log(`${status1} can access the website`);
// }else{
//     console.log(`${status1} can not be access the website`)
// };


enum Fruit{
    apple = "apple",
    banana = "banana",
    orange = "orange",
};
// console.log(Fruit[0])
// let frit:Fruit = Fruit.banana;
// if(frit === Fruit.banana){
//     console.log("You Guess Right")
// }else{
//     console.log("You Guess Wrong")
// };

//Numeric Enum
enum Numbr{
    one = 1000, 
    two =500,
    three ,  
    four = 700,
};
console.log(Numbr.one);
console.log(Numbr.two);
console.log(Numbr.three);
console.log(Numbr.four);
let numb:Numbr = Numbr.one;
console.log(Numbr[numb]);
console.log(Numbr[1000]);