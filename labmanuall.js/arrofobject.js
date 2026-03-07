// arr of relement ko fetch krne ka kam krta he 
// let arr=[
    // {
        // name:"jatin",
        // age:56,
        // city:"bhopal"
    // },
    // {
        // name:"paras",
        // age:56,
        // city:"indore"
    // },
    // {
        // name:"kali",
        // age:556,
        // city:"delhi"
    // }
// ]
let arr=[
    {
        name:"jatin",
        rollno:56,
         class:"bhopal",
         contact:65465,
         adress:"qewbhopal",
         email:"jattfact@gmial.com"

    },
    {
         name:"paras",
 rollno:562,
  class:"indore",
  contact:654655,
  adress:"qewbhopadl",
  email:"jattfact@gdmial.com"
    },
    {

          name:"mahi",
 rollno:562,
  class:"bhpal",
  contact:5465,
  adress:"hopal",
  email:"j@gmial.com"
         
         
    },
    {
         name:"yuvi",
 rollno:563,
  class:"delhi",
  contact:5,
  adress:"qew",
  email:"jatt.com"
    },
    {

         name:"pooja",
 rollno:5,
  class:"bhopal",
  contact:65465,
  adress:"q",
  email:"csc"
    }
    

]
// console.log(arr);
// 
// let res=arr.map((e)=>{
    // return e.city
// })
// console.log(res);
// 
// let fil=arr.filter((e)=>{
    // return e.city=="delhi"
// })
// console.log(fil);
//map me boolean 


let shdat=document.querySelector('#showdata')
// let final=arr.map((e)=>
    // `<tr>   
    //    <td> ${e.name} </td>
        //  <td> ${e.rollno} </td>
        //  <td> ${e.class} </td>
        //   <td> ${e.contact} </td>
        //    <td> ${e.adress} </td>
            // <td> ${e.email} </td>       `
// ).join("")
// let final=arr.filter(e => e.name.toLowerCase() === "jatin")   // sirf Jatin
//   .map(e => 
    //  `<tr>   
    //    <td> ${e.name} </td>
        //  <td> ${e.rollno} </td>
        //  <td> ${e.class} </td>
        //   <td> ${e.contact} </td>
        //    <td> ${e.adress} </td>
            // <td> ${e.email} </td>    
            //   </tr> `
// ).join("")
// shdat.innerHTML=final
//student name roll clss con addres email

// let final2=arr.filter((e)=>{
//   return e.name=="jatin"
// }).map((e)=>{
    //  `<tr>
    //  <td> ${e.name}</td>
    //  </tr>`
// })
let final2 = arr
  .filter(e => e.name == "jatin")
  .map(e => 
     `<tr>
       <td>${e.name}</td>
     </tr>`
  )
  .join("");

document.getElementById("tbody").innerHTML = final2;
