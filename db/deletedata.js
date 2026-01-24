let table=` <table border="1" width="200" bgcolor="yellow">
    <tr>
    <th> id </th>
    <th> rollno </th>
    <th> name </th>
    <th> city </th>
    <th> fess </th> </tr>`

async function deleteshow() {
let api="http://localhost:3000/students";
const obj=await fetch(api);
const Data =await obj.json();
Data.map((key)=>{
 table+=`
 <tr>
 <td>${key.id}</td>
  <td> ${key.rollno}</td>
  <td> ${key.name} </td>
  <td> ${key.city} </td>
  <td> ${key.fess} </td>
  <td><button onclick="deletedata(${key.id})">Delete</button></td>
  </tr>`
})
table+="</table>";
document.getElementById("demo").innerHTML=table;
}

deleteshow();

 
async function deletedata(id) {
    let api = `http://localhost:3000/students/${id}`;
    let res = await fetch(api, {
        method: "DELETE"
    });

    if (res.ok) {
        alert("Deleted Successfully");
        deleteshow();  
    } else {
        alert("Delete Failed");
    }
}