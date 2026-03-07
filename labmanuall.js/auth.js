 // Save user on signup
function getuserdata() {
  let user = {
    name: document.querySelector("#name").value,
    username: document.querySelector("#username").value,
    password: document.querySelector("#password").value
  };

  localStorage.setItem("userdata", JSON.stringify(user));
}

// Check user on login
function loginuser() {
  let localdata = JSON.parse(localStorage.getItem("userdata"));
    
  let login = {
    loginname: document.querySelector("#loginname").value,
    loginpassword: document.querySelector("#loginpassword").value
  };

  if (!localdata || localdata.username !== login.loginname || localdata.password !== login.loginpassword) {
    alert("User not found");
    return false;
  }

  return true; // allow submit to home.html
}

// Show details on home page
// window.onload = function () {
//   if (document.getElementById("details")) {
//     let localdata = JSON.parse(localStorage.getItem("userdata"));
//     if (localdata) {
//       document.getElementById("details").innerHTML =
//         `<p><b>Name:</b> ${localdata.name}</p>
//          <p><b>Username:</b> ${localdata.username}</p>
//          <p><b>Password:</b> ${localdata.password}</p>`;
//     } else {
//       window.location.href = "signup.html"; // if no data found, go back to signup
//     }
//   }
// };



function show(){
  let loca=JSON.parse(localStorage.getItem("userdata"))
  let fi=document.getElementById("details")
  fi.innerHTML=
  `<p>${loca.username}</p>
  <p>${loca.password}</p>
  `
 }
 

// Clear localStorage and logout
function logout() {
  localStorage.clear();
  window.location.href = "signup.html";
}
