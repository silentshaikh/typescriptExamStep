"use strict";
class Students {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    getStudNorm() {
        console.log(this.name);
    }
    ;
    getStudArow() {
        console.log(this.name);
    }
    ;
}
;
let student = new Students("Tom", 1);
student.getStudNorm();
student.getStudArow();
console.log(window);
