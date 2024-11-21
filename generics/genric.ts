//Generics 
//Generics in Function
// <T> => Generic Type Paramter
const genFunc1 = <T,U>(a:T,b:U):T => {
    // console.log(a);
    if(typeof a === "string" && typeof b === "number"){
        return `${a.toUpperCase()} : ${b.toFixed()},` as any;
    }else{
        return (a as any)+(b as any);
    }
};
console.log(genFunc1<string,number>("Hello",56));

//Generics in Class
class Student<T>{
    userName:T;
    constructor(public id:number, userName:T) {
        this.userName = userName;
    }
};
let ourStudent:Student<string> = new Student<string>(1,"hello");
console.log(ourStudent)

class Teacher<T>{
    constructor(public name:T) {}
    getName():this{
       return  this
    };
};
let techr:Teacher<string> = new Teacher("Sam");
console.log(techr.getName().name) 

//Generics Constraints
const genContrit = <T extends string|number,U>(a:T,b:U):T => {
    if(typeof a ==="string"){
        return a.toUpperCase()  as any;
    }else{
        return a.toFixed(2) as any;
    }
};
console.log(genContrit(90,56));

interface StrUpper<T>{
    // toUpperCase:() => void;
    pop:() => T;
};
const genContrit2 = <T extends StrUpper<any>,>(a:T):T => {
   return a.pop() as any;
};
console.log(genContrit2([1,2,3,4]));

// function printArray<T>(arr: T[]): void {
//     arr.forEach(item => console.log(item));
// }

// printArray<number>([1, 2, 3]); // Output: 1 2 3
// printArray<string>(["a", "b", "c"]); // Output: a b c

// type NumTyp = {
//     toFixed:(num:number) => string;
// };
// const genContrit3 = <T extends NumTyp>(a:T):T => {
//     return a.toFixed(2) as any;
// };
// console.log(genContrit3(34.56789));

// Using Fetch API 

// interface apiBody{
    
//         albumId: number,
//         id: number,
//         title: string,
//         url: string,
//         thumbnailUrl: string,
      
// };
// interface Album{
//     userId:number,
//     id:number,
//     title:string,
// }
// interface UserId{
//     id:number;
// }
// const apiFunc = async <T extends UserId[]>(url:string):Promise<T|void> => {
//     try {
//         let apiFetch = await fetch(url);
//     let datas = await apiFetch.json();
//     console.log(datas)
//    return datas;
//     } catch (error) {
//         document.write("API NOT FOUND")
//     }
    
// };
// console.log(apiFunc<Album[]>(`https://jsonplaceholder.typicode.com/albums`).then((res) => {
//     if(res){
//         res.forEach((e) => {
//             document.write(e.title+ "<br>");
//         })
//     }
// }))
// async function dataGet <T>(id:T) {
//     let dataFet:apiBody[] | void  = (await apiFunc<apiBody[]>(`https://jsonplaceholder.typicode.com/photos`));
//     if(dataFet){
//         let filtData = dataFet.find((e) => e.id === id);
//     }
//     // console.log(filtData)
//     // console.log(dataFet.message);

// };
// dataGet<number>(1);

//Generics interface
interface Person<T,U>{
    name:T,
    id:U,
};
// interface Person<U,T>{
//     name:T,
//     id:U,
// }
// let obj:Person<string,number> = {
//     name:"Ben",
//     id:1
// };


// //Generics with keyof keyword
// interface Employee{
//     name:string,
//     id:number,
// }
// const genFunc2 = <S ,T extends keyof S>(obj:S,key:T):S[T] => {
//     return obj[key];
// };
// console.log(genFunc2<Employee,"id"|"name">({name:"Jerry",id:2},"name"))

// const genFunc3 =<T extends object>(obj:T):Array<keyof T> => {
//     return Object.keys(obj) as Array<keyof T>;
// };
// console.log(genFunc3({name:"Tom",id:120}));

// type Optional<T> = {
//     [P in keyof T]? : T[P];
// };
// let objs:Optional<Employee> = {
//     name:"ben",
//     id:34,
// };
// console.log(objs["name"]);
// interface Persons {
//     name: string;
//     age: number;
//     location: string;
//   }
  
//   // keyof creates a union type of keys
//   type PersonKeys = keyof Persons;
//   console.log()