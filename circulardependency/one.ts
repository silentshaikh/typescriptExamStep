import { B } from "./two.js";
export class A{
    // private b:B;
    constructor() {
        // this.b = new B();
    };
    methodA(){
        console.log("Method in A");
    };
    callMethodB(b:B){
        b.methodB();
    }
}
// import { funcB } from "./two.js";
//  export const funA = (funcB:() => void) => {
//     console.log("funA");
//     funcB();
// }