

let arr=[
   { 
      name :"jatin",
      password:"1515",
      phone:7470411400,
      age:10
    },

     { 
    name :"paras",
    password:"1515321",
    phone:747041,
    age:20
  },
  
   { 
    name :"aditiya",
    password:"151511",
    phone:140000,
    age:18

  }
  
]
let ul=document.getElementById("one");
let info=""
// arr.forEach(element => {
   // info+=`<li> students name  ${element.name} </li>`
   // info+=`<li>students password ${element.password} </li>`
   // info+=`<li>students phone ${element.phone} </li>`
// 
// });

 

// arr.filter(arr.age>=18){

// }

let res= arr.filter((current,index,arr)=>{
   current.age>=18
info+=`<li> students name  ${current.name} </li>`
info+=`<li>students password ${ current.password} </li>`
info+=`<li>students phone ${ current.phone} </li>`
      
   
   
})
ul.innerHTML=info

