import { A } from "./one.js";
export class B{
    // private a:A;
    constructor() {
        // this.a = new A();
    };
    methodB(){
        console.log("Method in B");
    };
    callMethodA(a:A){
        a.methodA();
    }
}
// import { funA } from "./one.js"
// export const funcB = () => {
//     console.log("funcB")
// }