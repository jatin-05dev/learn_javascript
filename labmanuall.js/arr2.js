// let arr=[15,"opss",89,true,65,"fruits",45,954,'m',56,48,48,26,54]
// for(let i=0;i<arr.length;i++){
//    console.log(arr[i])
// }
// console.log(arr)


// let arr=[]
// for(let i=0;i<5;i++){
    // arr[i]=parseInt(prompt("enter anumber"))
// 
// }
// console.log(arr)


// let arr=[15,14,12,15,45,54,54,5]
// for(let a of arr){
    // console.log(a)
// }
// for(let a in arr){
    // console.log(a)
// }


// arr.splice(2,4,"jatin")
//last me add krna he 
//arr.splice(-1,00,"kik")
//arr.splice(sruorys.lemntgth,0,"kik")
// console.log(arr);
// 
// ek arr me changes krne hoto for  each
//foreach loop
//cannot return value 
// let fruits=new Array("jatin","lp",65,65)
// console.log(fruits)
//  fruits.forEach((element,index,arr) => {
    // console.log(`${element} ${index} ${arr}`)
//  });
//  let data=arr.forEach((element,index,arr) => {
//    return `${element} ${index} ${arr}`
// });
// console.log(data)
//map new arr return krta he 
// let ar=arr.map((element,index,arr)=>{
    // return `${element} ${index}` })
    // console.log(ar)
    // eke arr se kuch change krna hi ti map
//  hw table by for ech and map
// let arr=["jatin","paras","jiva","game"]
// console.log(arr.indexOf(5))
// console.log(arr.indexOf(5,2))
// console.log(arr.lastIndexOf(5,4))
// 
// 
// console.log(arr.includes(15))
//filter

// const re=arr.findIndex((curr)=>{
    // return curr>5
// })
// const re=arr.find((curr)=>{
    // return curr>5
// })
// console.log(re);

// const re=arr.filter((curr)=>{

    // return curr>1

// })

// console.log(re);
//    
// let slice=arr.slice(0,2)
// console.log(slice);
// 

//program q
// let ar=[8,5,4,12,2,1,3,7,6]
// let newar=ar.slice(1,9)
// for(let i=0;i<newar.length;i++){
    // if(newar[i]%2==0){
        // console.log(newar[i]);
        // 
    // }
// }
// let arr=[1,2,3,4,5,6,7,8,9,10]
// 
// arr.forEach((element)=>{
    // console.log(element*2);
    // 
// })
// 
// let newarr=arr.map((ele)=>{
// return ele*2
    // 
// })
// 
// console.log(newarr);
// 
//to do challlenges
// 
// let month=["january","february","march"]
//  month.splice(month.length,0,"dec")

// month.push("ji")

//  console.log(month);
 // splice method return array
//  const up= month.indexOf("february")
//  month.splice(up,1,"fl")
//  console.log(month);
// month.splice(up,1)
// console.log(month);

// const product=[
    // {name:"laptop",price:5565},
    // {name:"kok",price:565},
    // {name:"frozen",price:546},
// ]
// const filetrepro=product.filter((ele)=>{
    // return ele.price<=1000
// })
// console.log(filetrepro);

//unique elelment

let number=[1,2,3,4,10,5,6]
// let uni=number.fill((ele,ind,arr)=>
    // {
//    
//    return arr.indexOf(ele)==ind
//    
// })
// console.log(uni);
// console.log([...new Set(number)]);
//number se kam nhi krta 
//aplplbet

// number.sort()

// console.log(number);


// let sor=number.sort((a,b)=>{
//   if(a>b) return -1
//    if(b>a) return 1
// 
// })
// 
// console.log(sor);
// let re=number.map((ele)=>{
    // if(ele%2==0){
        // return ele*ele
    // }
// }).filter((ele)=> ele!=undefined)
// 
// console.log(re);
//reduce method

let total=number.reduce((ac,ele ,"index","arr")=>{
    return ac+ele
},0)
console.log(total);



