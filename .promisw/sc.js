// // promise => pending=>settled=>resloved ans rejected
let pr = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("lo")
        
    },  1000);
})
pr.then(res=>{
  console.log(res);
  
}).catch((err)=>{
    console.log(err);
    
}).finally(()=>{
    console.log("puju");
    
})
// const name="puju"
// let add=(name)=>{
    // return new Promise((resolve,reject)=>{
        // setTimeout(() => {
            // let se=Math.random()>0.5
            // if(se){
                // resolve("fed");
                // 
            // }
            // else{
                // reject("dd")
            // }
        // },  2000);
    // })
// }
// add(name).then((res)=>{
    // console.log(res);
    // 
// }).catch((err)=>{
    // console.log(err);
    // 
// }).finally(()=>{
    // console.log("ddddddd");
    // 

// })
//promise.all
//promise.allSetted
//promise.racw
// let p1=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve("hello")  
//     },2000);
// })
// let p2=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve("hell")  
//     },8000);
// })
// let p3=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       reject("fail")  
//     },200);
// })
// Promise.all([p1,p2,p3]).then((res)=>{
    // console.log(res);
    // 
// }).catch((err)=>{
    // console.log(err);
    // 
// })
// Promise.allSettled([p1,p2,p3]).then((res)=>{
    // console.log(res);
    // 
// }).catch((err)=>{
    // console.log(err);
    // 
// }).
// Promise.race([p1,p2,p3]).then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
    
// })