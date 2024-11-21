// Enum are used to define a set of constant values
//Numeric Enum
var Dirextion;
(function (Dirextion) {
    Dirextion[Dirextion["up"] = 1] = "up";
    Dirextion[Dirextion["down"] = 2] = "down";
    Dirextion[Dirextion["right"] = 30] = "right";
    Dirextion[Dirextion["left"] = 31] = "left";
})(Dirextion || (Dirextion = {}));
;
console.log(Dirextion.up);
console.log(Dirextion.down);
console.log(Dirextion.right);
console.log(Dirextion.left);
//String Enum
var Status;
(function (Status) {
    Status["admin"] = "admin";
    Status["user"] = "user";
})(Status || (Status = {}));
;
var FruitEnum;
(function (FruitEnum) {
    FruitEnum["apple"] = "apple";
    FruitEnum["banana"] = "banana";
    FruitEnum["kiwi"] = "kiwi";
})(FruitEnum || (FruitEnum = {}));
var adminAndUser = 'AdMiN';
if (adminAndUser.toLowerCase() === Status.admin.toLowerCase()) {
    console.log("Admin");
}
else {
    console.log("User");
}
var Name;
(function (Name) {
    Name["ahmed"] = "ahmed";
    Name["anas"] = "anas";
    Name["sameer"] = "sameer";
})(Name || (Name = {}));
;
//Heterogenous Enum => An Enum mix with string and number
var StrAndNum;
(function (StrAndNum) {
    StrAndNum["yes"] = "yes";
    StrAndNum[StrAndNum["no"] = 1] = "no";
    StrAndNum[StrAndNum["a"] = 2] = "a";
    StrAndNum["test"] = "test";
})(StrAndNum || (StrAndNum = {}));
//Computed Enum => numeric enum ma kuch calculation peroform horhi ho
var Compute;
(function (Compute) {
    Compute[Compute["a"] = 2] = "a";
    Compute[Compute["square"] = 4] = "square";
    Compute[Compute["cude"] = 8] = "cude";
    Compute[Compute["add"] = 7] = "add";
    Compute[Compute["sub"] = 5] = "sub";
    Compute[Compute["mult"] = 50] = "mult";
    Compute[Compute["divi"] = 25] = "divi";
})(Compute || (Compute = {}));
console.log(Compute.a);
console.log(Compute.square);
console.log(Compute.cude);
console.log(Compute.add);
console.log(Compute.sub);
console.log(Compute.mult);
console.log(Compute.divi);
//Union Enum 
var Shape;
(function (Shape) {
    Shape["circle"] = "circle";
    Shape["square"] = "sqaure";
})(Shape || (Shape = {}));
;
;
;
var circle = {
    kind: Shape.circle,
    radius: 45,
};
var square = {
    kind: Shape.square,
    sideLenght: 30,
};
console.log(circle);
console.log(square);
