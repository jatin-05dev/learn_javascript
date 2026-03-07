function largestthreenum() {
    let num1 = parseInt(prompt("enter a num1"))
    let num2 = parseInt(prompt("enter a num1"))
    let num3 = parseInt(prompt("enter a num1"))
    
    if(num1>num2){
        console.log(num1)
    }
    else if(num2>num3){
   console.log(num2)
    }
    else if(num3>num1){
   console.log(num3)
    }
    else if(num2>num1){
  console.log(num2)
    }
    else if(num1>num3){
   console.log(num1)
    }
}
function leapyear(){
    let year=parseInt(prompt("enter your year"))
    if(year%4==0 && year%100!=0|| year%400==0){
        document.writeln("you enter a leap year")
    }
    else{
        document.writeln("you enter a normal year")
    }
}
 