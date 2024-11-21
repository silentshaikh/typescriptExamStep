// Enum are used to define a set of constant values

//Numeric Enum
enum Dirextion{
    up =1 ,
    down ,
    right =30 ,
    left ,
};
console.log(Dirextion.up)
console.log(Dirextion.down)
console.log(Dirextion.right)
console.log(Dirextion.left)


//String Enum
enum Status{
    admin = "admin",
    user = "user",
};
enum FruitEnum{
    apple = "apple",
    banana = "banana",
    kiwi = "kiwi",
}
let adminAndUser = 'AdMiN';
if(adminAndUser.toLowerCase() === Status.admin.toLowerCase()){
    console.log("Admin")
}else{
    console.log("User");
}
enum Name{
    ahmed = "ahmed",
    anas = "anas",
    sameer = "sameer",
};

//Heterogenous Enum => An Enum mix with string and number
enum StrAndNum{
    yes = "yes",
    no = 1,
    a = 2,
    test = "test",
}

//Computed Enum => numeric enum ma kuch calculation peroform horhi ho
enum Compute{
    a = 2,
    square = a**2,
    cude = a**3,
    add = a+5,
    sub = add-2,
    mult = sub*10,
    divi = mult/2,
}
console.log(Compute.a)
console.log(Compute.square)
console.log(Compute.cude)
console.log(Compute.add)
console.log(Compute.sub)
console.log(Compute.mult)
console.log(Compute.divi);

//Union Enum 
enum Shape{
    circle = "circle",
    square = "sqaure",  
};
interface Circle{
    kind:Shape.circle,
    radius:number,
};
interface Square{
    kind:Shape.square,
    sideLenght:number,
};
let circle:Circle = {
    kind:Shape.circle,
    radius:45,
};
let square:Square={
    kind:Shape.square,
    sideLenght:30,
};
console.log(circle)
console.log(square)