
let obj=document.getElementById("obj")
let info=""
let user={
   username: "jatin",
   password:123,
   token:151
   
}
let username=prompt("enter a user name");
if(username==user.username){
  alert("user name is correct")
  info+=`username 2:${user.username}`
}
else{
    alert("invalid user")
}
let password=prompt("enter a password");
if(password==user.password){
    alert("password is correct")
    info+=`password :${user.password}`
}
else{
   alert("invalid password") 
}
 
let token=prompt("entre  a token number")
 if(token==user.token){
  alert("correct token you can login")
  info+=`token :${user.token}`
}
else{
    alert("invalid token")
}

obj.innerHTML+=info

 

 
 
 
 
 
 
 
 
 
 
 
 
 

 
 
 
 
 
 