

function vote(){
age =parseInt(prompt("enter your age"));
if(age<18){
    alert("you can't vote")
}
else{
    alert("you vote")
}
}

function grade(){
let marks=parseInt(prompt("neter tour marks"));
if(marks>=90 && marks<=100){
    alert("grade A")
}else if(marks>=75 &&marks<=90){
   alert("grade b")
}
else if(marks>=60 && marks<=75){
    alert("grade c")
}
else if(marks>=0 && marks<60){
  alert("fail")
}
else if(marks <0){
  alert("invalid")
}
else if(marks>100){
    alert("invalid")
}
}
function job(){
let com1=confirm("your course is completed")
let com2=confirm("your have certificate")
if(com1 &&  com2==true){
    alert("you get a job")
}
else {
   alert("you cnnot get job")}
}