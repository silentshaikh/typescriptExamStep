// import { funA } from "./one.js";
// import { funcB} from "./two.js";
// funA(funcB);
//class
import { A } from "./one.js";
import { B } from "./two.js";
let ab = new A();
let ba = new B();
ab.callMethodB(ba);
ba.callMethodA(ab)