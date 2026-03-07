// let [name,height,place]=["jatin",5.3,"bhopal"]
// console.log(name,height,place);
// let {name,height,place}={name : "jatin",
        //  height :5.2,
        //  place :"mkmk"
// }
// 
// console.log(name);
// console.log(height);
// console.log(place);
// 
let obj={name : "ji",
    class:45,
    sum:function(){
        console.log("inside function");
        
    },
    ar:[656,454],
    str:"jakn",
    acc:{
   bal:366
    }

}
let ac={
    465:54,
    65:565,
    ...obj

}
// console.log(obj);
let arr=[15,15,16,65]
let arr2=[56,46,54,...arr]
console.log(arr2);


//arr me destructure nhi hota 
// obj.email="jattfact @ gamil .com"
// obj.place="indore"
// console.log(obj.ar);
// console.log(obj.str);
// console.log(obj.acc.bal);
// obj.sum()
//for in loop

for(let k in obj){
    console.log(k +":" +obj[k]);
    
}
// let arrofkeys=Object.keys(obj)
// console.log(arrofkeys);
let arrofvalue=Object.values(obj)
console.log(arrofvalue[0]);

 