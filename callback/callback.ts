//Syncronous Behaviour
// console.log(1);
// console.log(2);
// alert("Alert");
// console.log(3)
// console.log(4)



//Asyncronous Behaviour

//Callback

// const parenFunc= (callback:() => void) => {
//     console.log("Cooking Start");
//     setTimeout(() => {
//         callback();
//     },3000);

// };
// parenFunc(() => {
//     console.log("Cooking End");
// });
// console.log(" We are in Quarter 2");


const calBackFunc = (cb:(a:string) => void) => {
    interface Stud{
        name:string,
        rollNo:number
    }
    let apiFetch:Stud = {
        name:"Ahmed",
        rollNo:34,
    };
    setTimeout(() => {
        if(apiFetch){
            cb(apiFetch.name);
        }else{
            console.log("API not Found");
        }
    }, 4000);

};
calBackFunc(() => {
    
})



