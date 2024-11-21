// //Promise
// // const ourPromise = () => {
// //     return new Promise((resolve,reject) => {
// //         let obj = {
// //             name:"Ahmed",
// //             rollNo:300,
// //         };
// //         if(obj){
// //             resolve(obj.name);
// //         }else{
// //             reject("API NOT FOUND");
// //         };
// //     });
// // };
// // //Promise Chaining
// // ourPromise().then((res) => {
// //     console.log(res);
// // }).catch((error) => {
// //     console.log(error);
// // })

// const ourPromiseCalc = (a:number) => {
//     return new Promise((resolve,reject) => {
//         let val :number = 5+a;
//     if(val){
//         resolve(val);
//     }else{
//         reject("Data not Found");
//     };
//     });
// };
// ourPromiseCalc(5).then((res) => {
//   return ourPromiseCalc(res as number);
// }).then((res1) => {
//     return ourPromiseCalc(res1 as number);
// }).then((res2) => {
//     return ourPromiseCalc(res2 as number);
// }).then((res3) => {
//     console.log(res3);
// }).catch((error) => {
//     console.log(error);
// });




let promise = () => {
    return new Promise((resolve,reject) => {
        let message = "Hello World";
        setTimeout(() => {
            if(message){
                resolve(message)
            }else{
                reject("Data not Found");
            }
        }, 2000);
    })
};
promise().then((res) => {
    return (res as string)+13;
}).then((res1) => {
    return res1;
}).catch(() => {
    console.log("Not Found")
}).then((res2) => {
    console.log(res2);
})
.catch((error) => {
    console.log(error);
});




