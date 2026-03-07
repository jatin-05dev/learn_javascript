//mouse event 
//  let on=document.getElementById("hi").onclick=()=>{
   //  alert("hello")
//  }
//  
//   document.getElementById("hi").onclick=function(){
//   alert("hello")
//   }
// let hi=document.getElementById("hi")
//  function change (){
//   hi.classList.add("hi")
// }
// document.getElementById("hi").addEventListener("click",function(){
// 
// })
// 
// addEventListener("mouseup",change)

//keyboard event 
// let my=document.getElementById("my")
// let handlekey=(e)=>{
//   console.log("key preesed",e.key)
   // console.log("key code",e.code)
   //  console.log("event type",e.type)
   //  document.querySelector(".keypressed").textContent=`kaeypress : ${e.key}`
   //   document.querySelector(".keycode").textContent=`kaeypress : ${e.code}`
      // document.querySelector(".charcode").textContent=`kaeypress : ${e.key.charCodeAt(0)}`
      //  document.querySelector(".eventtpe").textContent=`kaeypress : ${e.type}`
   // 
// 
   // 
      // 
      // }
// my.addEventListener("keyup",handlekey)
// input.
const  input=(e)=>{
   console.log(e);
   
   console.log(e.target.value);
   console.log(e.target.name);
   console.log(e.inputType);
   console.log(e.type)
   // cmd ope run karhanb h  e 
   
   
}
// document.getElementById("myinput").addEventListener("input",input)
document.getElementById("myinput").addEventListener("change",input)
