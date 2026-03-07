// let person={
    // name:"jatin",
    // class:6,
    // "is'Student":true,
    // greet:function greet(){
        // console.log("puju");
        // 
    // }
    //  greet:function (){
    //  console.log("puju");
    //  
//  }
// }
//console.log(person."is'Student");se nhi hoga
// console.log(person["is'Student"]);
// console.log(person[`is'Student`]);
// console.log(person["is'Student"]);
// console.log(person["name"]);
// console.log(person['is'Student']);
// ..dstructure
//object se methods ho jati he 
// person["class"]=20
// person.class=25
// console.log(person);
// console.log(person.greet());
// console.log(person.greet);
// person.greet()
//dynamic
// let idtype="stuid"
// let student={
    // [idtype]:"a66dvrg",
    // name:"jatin",
    // age:55,
    // isstudent:true,
    // greet:function(){
        // console.log(`hey ,my ${idtype} is ${student[idtype]} and my name is ${student.name}.`);
        // 
    // }
// }

// student.greet()
//pass by vaur pass by refrence 

// let a=10
// const modi=(x)=>(x=100)
// const modi=(a)=>(a=100)
// console.log(modi(a));
// console.log(a);
// pass by refrence
// let obj={id:36 ,name :"jatin"}
// let obj1=obj
// obj1.name="puju"
// console.log(obj1);
// console.log(obj);

// 
// obj1.name="puju"
// console.log(obj1);
//cocat be object object ata ,he se space 
//object assign

// let obj={id:36 ,name :"jatin"}
// let obj1=Object.assign({},obj)
// obj1.name="puju"
// console.log(obj);
//comparision by refrencec 

//  const obj1={name:"jatin"}
//   const obj2={name:"puju"}
//   const obj3=obj1
//   const isEqual=obj1==obj3 ? true:false
//   console.log(isEqual);
// const isEqual=obj1==obj2 ? true:false
// console.log(isEqual);
//key double code number and bool nhi bs
//Json.strigify se object ko json me and json.parse se original obj me 
 //this keyword
// in function refer to global
//on obj this refer to an object 
// function callme(){
    // console.log(this);
// 
    // 
// } 
// callme()
//alone this refer to global obj
//fat arrow object global window ko
// ("use strict se rule folow hota he ")
// method

// const product ={
    // id :5,
    // name:"puju",
    // price:6000,
    // stock:"one"
// }
// let keys=Object.keys(product)
// console.log(keys);
// let values=Object.values(product)
// console.log(values);
// let entries=Object.entries(product)
// console.log(entries);
// console.log(product.hasOwnProperty("name"));
// const target={z:2,b:6}
// const source={c:2,v:6}
// ek hi key source 
// const merge=Object.assign({},target,source)
// console.log(merge);
// Object.freeze(product)

//inter view question 

// const product ={
//  id :5,
//  name:"puju",
//  price:6000,
//  stock:"one"
// }
// const target={z:2,b:6}
// const source={c:2,v:6}
// ek hi key source 
// const merge=Object.assign({},target,source)

let con={
    name:"kzc",
    class:96,

}
 function con5(jw){
   console.log(jw[name]);
   
}
 con5(jw)
