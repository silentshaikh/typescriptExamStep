"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B = void 0;
class B {
    // private a:A;
    constructor() {
        // this.a = new A();
    }
    ;
    methodB() {
        console.log("Method in B");
    }
    ;
    callMethodA(a) {
        a.methodA();
    }
}
exports.B = B;
// import { funA } from "./one.js"
// export const funcB = () => {
//     console.log("funcB")
// }
