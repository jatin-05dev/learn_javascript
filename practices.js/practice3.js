//  let arr = [1, 2, 3];
// let obj = { name: "Jatt" };

// console.log(Array.isArray(arr)); // true  (it’s an array)
// console.log(Array.isArray(obj)); // false (not an array)
// let obj2 = [10,20,30];

// if (Array.isArray(obj)) {
//   console.log("It is an array");
// } else {
//   console.log("Not an array");
// }



// function change(){
//    document.getElementById("ik").style.color="yellow" 
//    document.getElementById("ik").style.backgroundColor="red"
// }
// 
// let b=parseFloat(prompt("enter a base"));
// let h=parseFloat(prompt("enter a height"));
// let area=0.5*b*h;
// document.getElementById("ans").innerHTML=area;
// let arr=[2,55,65,6,56];
//  let mx=arr[0];
//  for(let i of arr){
    // if(i>mx){
        // mx=i;
    // }
//  }
//  console.log(mx);
// let num =9156564;
// let rem =0;
// let rev=0;
// while( num>0){
//   rem=num%10;
//   rev=rev*10+rem;
//   num=Math.floor(num/10);
//  
// }
// console.log(rev);
// let arr=[44,55,89];
// let rev=[];
// for(let i =arr.length-1;i>=0;i--){
//   rev.push(arr[i]);
// }
// console.log(rev);
// let num1=document.getElementById("num1")
// let num2=document.getElementById("num2")
// let ans=document.getElementById("ans")
// let btn1=document.getElementById("mul")
// let btn2=document.getElementById("div")
// btn1.addEventListener("click",()=>{
//   let n1=parseInt(num1.value)
//   let n2=parseInt(num2.value)
//   ans.innerHTML=n1+n2;
// })
// btn2.addEventListener("click",()=>{
    // let n1=parseInt(num1.value)
    // let n2=parseInt(num2.value)
    // ans.innerHTML=n1*n2;
// })
// function time(){
// let now=new Date();
// let day=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
// let daynm=day[now.getDay()];
// let hour=now.getHours();
// let min=now.getMinutes();
// let se=now.getSeconds();
// let mili=now.getMilliseconds()
// let ampm=hour>=12? "am":"pm";
// 
//  hour=hour%12;
//  hour=hour?hour:12;
// 
//  min=min<10?"0"+min:min;
//  se=se<10?"0"+se:se;
//  mili=mili<10?"0"+mili:mili;
//  let time=`${hour}:${min}:${se}:${mili}:${ampm}`;
//  let final=`today is ${daynm} and thhe time is ${time}`
//  document.getElementById("ans").innerHTML=final;
// }
// setInterval(time,100)
// let str="sdfdg"
// let num=55;
// console.log(typeof str==="string") ;
// let arr=[6,85,56,566]
// let sum=0;
// for(let i of arr){
    // sum+=i;
// 
// }
// console.log(sum);
// let arr=[6,5,1,1]
// let pr=1;
// for(let i of arr){
    // pr*=i;
// 
// }
// console.log(pr);
// let r=parseInt(prompt("enter radius"));
// let pi=3.14;
// console.log(pi*r*r);
// let num=-9;
// if(num<0){
    // console.log("negative")
// }
 
//  let num = 8;
// let fi = 0;
// let se = 1;
// 
// for (let i = 0; i < num; i++) {
    // console.log(fi);   // <-- 0 yahi pe print hoga
    // let nxt = fi + se;
    // fi = se;
    // se = nxt;
// }
// let a=-59;
// if(a<0){
    // alert("-")
// }

//   let rows = 4;
    // let result = "";

    // for(let i = rows; i >= 1; i--){
    //   for(let j = i; j >= 1; j--){
        // result += j;
    //   }
    //   result += "\n"; // next line
    // }

 
  
 
 
 
 
 
 
 
 