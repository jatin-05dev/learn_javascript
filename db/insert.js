 document.getElementById("btn2").addEventListener("click", myinsert);

async function myinsert() {
    let id = document.getElementById("id").value;
    let rollno = document.getElementById("rollno").value;
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let fess = document.getElementById("fess").value;

    if (!id || !rollno || !name || !city || !fess) {
        alert("Please fill all fields.");
        return;
    }

    let newStudent = {
        id: id,
        rollno: rollno,
        name: name,
        city: city,
        fess: fess
    };

    try {
        let response = await fetch("http://localhost:3000/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newStudent)
        });
        

        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }

        alert("Student record inserted successfully!");

        document.getElementById("id").value = "";
        document.getElementById("rollno").value = "";
        document.getElementById("name").value = "";
        document.getElementById("city").value = "";
        document.getElementById("fess").value = "";

    } catch (error) {
        console.error("Insert Error:", error);
        alert("Failed to insert student.");
    }
}
