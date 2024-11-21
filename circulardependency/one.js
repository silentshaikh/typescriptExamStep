"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A = void 0;
class A {
    // private b:B;
    constructor() {
        // this.b = new B();
    }
    ;
    methodA() {
        console.log("Method in A");
    }
    ;
    callMethodB(b) {
        b.methodB();
    }
}
exports.A = A;
// import { funcB } from "./two.js";
//  export const funA = (funcB:() => void) => {
//     console.log("funA");
//     funcB();
// }
