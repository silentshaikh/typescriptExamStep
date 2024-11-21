"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { funA } from "./one.js";
// import { funcB} from "./two.js";
// funA(funcB);
//class
const one_js_1 = require("./one.js");
const two_js_1 = require("./two.js");
let ab = new one_js_1.A();
let ba = new two_js_1.B();
ab.callMethodB(ba);
ba.callMethodA(ab);
