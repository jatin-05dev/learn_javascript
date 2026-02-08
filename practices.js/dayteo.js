//  localStorage.setItem("name","puju")  
//  let key =prompt("hi puju rani")
//  let value=prompt(" i love you ")
//  localStorage.setItem(key,value) 
//  console.log(localStorage.getItem(key))
// setTimeout
setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);

// setInterval
let counter = 0;
let timer = setInterval(() => {
  console.log(++counter);
  if (counter === 5) clearInterval(timer);
}, 1000);
 

// File ka data string me lo
let jsonString = fs.readFileSync('dj.json', 'utf-8');

// String → Object
let obj = JSON.parse(jsonString);

console.log(obj.name); // Aman
console.log(obj.age);  // 20
function multiTask(task, a, b) {
    if (task === "add") {
        return a + b;
    }
    else if (task === "subtract") {
        return a - b;
    }
    else if (task === "multiply") {
        return a * b;
    }
    else if (task === "divide") {
        return a / b;
    }
    else {
        return "Invalid task!";
    }
}

// Calls:
console.log(multiTask("add", 5, 3));       // 8
console.log(multiTask("subtract", 10, 4)); // 6
console.log(multiTask("multiply", 6, 3));  // 18
console.log(multiTask("divide", 9, 3));    // 3
