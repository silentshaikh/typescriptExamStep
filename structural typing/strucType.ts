//Structural Typing
//Hum do object unke structure ke through compare krware rhe the
// type Obj1 = {
//     name:string,
//     age:number,
//     address:string,
// };
// type Obj2 = {
//     name:string,
//     age:number,
//     address:string,
// }
// let obj1:Obj1 = {
//     name:"ben",
//     age:11,
//     address:"LA",
// };
// let obj2:Obj2 = {
//     name:"Tom",
//     age:9,
//     address:"Washignton"
// };
// obj2 = obj1;

//Union Type with Object
type CarName = {
    name:string,
};
type CarModel = {
    model:string,
};
type Car = CarName|CarModel;
let car:Car = {
    name:"Mercedez",
    model:"G-Wagon",
};
//Type Narrowing with Object using in operator
if("name" in car){
    console.log(car.name);
}else if("model" in car){
    console.log(car.model);
};

// if("name" in car && "model" in car){
//     console.log(car.name);
//     console.log(car.model);
// };