"use strict";
//Any
//Any does not provide type safety
let name1 = 56;
name1 = "hello";
name1 = {
    name: "Ashar",
};
name1 = [1, 2, 3, 4, 5, 6];
name1.slice();
name1 = true;
name1.slice();
//Unknown
//Unknown provide type safety
let unknownValue = "hello";
unknownValue.toUpperCase();
unknownValue = 45;
unknownValue = true;
unknownValue = [1, 2, 3, 4, 5, 6, 7];
unknownValue = {
    name: "Ahmed",
};
unknownValue.name;
unknownValue = 20;
unknownValue.toFixed();
let strData = name1;
