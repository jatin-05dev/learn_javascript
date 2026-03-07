async function show() {
    let res = await fetch('http://localhost:3000/student')
    let date = await res.json()
    let fina = date.map((e) =>
        `<tr>   
       <td> ${e.name} </td>
         <td> ${e.contact} </td>
         <td> ${e.email} </td>
          <td> ${e.age} </td>
           <td> ${e.city} </td>
           <td> <button onclick="myclcik('${e.id}')">del</button></td>
             <td> <button onclick="myedit('${e.id}')">edit</button></td>
            </tr>`
    ).join("")
    // document.querySelector('#show').innerHTML=final
    document.querySelector('#show1').innerHTML = fina
}
show()
//post
function frmdata() {
    let frmdata = {
        name: document.querySelector("#name").value,
        contact: document.querySelector("#contact").value,
        city: document.querySelector("#city").value,
        age: document.querySelector("#age").value,
        email: document.querySelector("#email").value
    }
    fetch("http://localhost:3000/student", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(frmdata)
    }).then(() =>
        alert("data inserted")
    ).catch((e) =>
        console.log(e))
}
function myclcik(id) {
    fetch(`http://localhost:3000/student/${id}`, {
        method: "DELETE"
    }).then(() => alert("deleted data"))
        .catch((e) => console.log(e))

}

async function myedit(id) {
    let data = await fetch(`http://localhost:3000/student/${id}`)
    let res = await data.json()
    let frmdata = `
    <input type="text" value=${res.id} readonly id="id1"><br><br>
    <input type="text" value=${res.name} id="name1"><br><br>
    <input type="text" value=${res.city} id="city1"><br><br>
    <input type="text" value=${res.contact} id="contact1"><br><br>
    <input type="text" value=${res.age} id="age1"><br><br>
    <input type="text" value=${res.email} id="email1"><br><br>
    <button onclick="upda('${res.id}')"> update </button>
    `
    document.getElementById("upd").innerHTML = frmdata

}
function upda(id) {
    let ne = {
        id: document.getElementById("id1").value,
        name: document.getElementById("name1").value,
        city: document.getElementById("city1").value,
        contact: document.getElementById("contact1").value,
        age: document.getElementById("age1").value,
        email: document.getElementById("email1").value,

    }
    fetch(`http://localhost:3000/student/${id}`,{
        method :"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(ne)
    }).then(()=>alert("data update...!"))
    .catch((e)=>console.log(e)
    )
}
