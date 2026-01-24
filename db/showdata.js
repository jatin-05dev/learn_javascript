 document.getElementById("btn1").addEventListener("click", mydata);

let Table = `<table border="1">
  <tr>
    <th>Roll No</th>
    <th>Name</th>
    <th>City</th>
    <th>Fees</th>
  </tr>`;

async function mydata() {
    try {
        const api = "http://localhost:3000/students"; 
        const obj = await fetch(api);
        const Data = await obj.json();
        console.log(Data);

        Data.forEach((key) => {
            Table += `<tr>
                <td>${key.rollno}</td>
                <td>${key.name}</td>
                <td>${key.city}</td>
                <td>${key.fess || "N/A"}</td>
            </tr>`;
        });

        Table += "</table>";
        document.getElementById("demo").innerHTML = Table;
    } catch (err) {
        console.error("Fetch error:", err);
        document.getElementById("demo").innerHTML = "⚠️ Error loading data.";
    }
}
