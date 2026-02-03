// let emailInfo=document.querySelector("#email")
// let pwd=document.querySelector("#pwd")
// let sub=document.getElementById("sub")
// let d=document.getElementById("data")
// let email=[]
// let name=[]
//  let s=document.getElementById("sub")
//  s.addEventListener("click",(e)=>{
//  e.preventDefault()
//    email.push(emailInfo.value)
//    name.push(pwd.value)
//    let tz=" "
//  for(let i=0;i<email.length;i++){
//     tz+=`<tr>
//     <td> ${name[i]}</td>
//         <td> ${email[i]}</td>
//     </tr>`
//     }     
//     d.innerHTML=tz
//     email.value=""
//     name.value=""

 
   
//  })



// let emailInfo=document.querySelector("#email")
// let pwd=document.querySelector("#pwd")
// let sub=document.getElementById("sub")
// let d=document.getElementById("data")
// let info=[]
//  let s=document.getElementById("sub")
//  s.addEventListener("click",(e)=>{
//  e.preventDefault()
  // let user={
    // email:emailInfo.value,
    // name:pwd.value
  // }
  // info.push(user)
  // let f=info.map((e)=>{
  //  return `<tr>
    // <td>${e.email}</td> 
    // <td>${e.name}</td>
    // </tr>`
  // }).join("")
  // d.innerHTML=f
    // emailInfo.value=""
    // pwd.value=""
// 
//  
  //  

    let emailInfo = document.querySelector("#email");
    let pwd = document.querySelector("#pwd");
    let sub = document.getElementById("sub");
    let d = document.getElementById("data"); 
     let info =[]

    sub.addEventListener("click", (e) => {
      e.preventDefault();

      if (emailInfo.value.trim() === "" || pwd.value.trim() === "") return;
       
      let user = {
        email: emailInfo.value,
        pwd: pwd.value
      }
     
      info.push(user)
      emailInfo.value = "";
      pwd.value = "";
      showData()
    });

    function showData() {
      d.innerHTML="";
      info.map((e,i)=>{
        d.innerHTML +=
         `<tr>
            <td>${e.email}</td>
            <td>${e.pwd}</td>
            <td><button onclick="delData('${i}')">Delete</button></td>
            <td><button onclick="editData('${i}')">Edit</button></td>
          </tr>`
      });

    }
    
function delData(i){
  info.splice(i,1)
  showData()
}
function editData(i){
  emailInfo.value=info[i].email
  pwd.value=info[i].pwd
}
  

