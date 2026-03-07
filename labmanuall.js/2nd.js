
// function sum(){
    // let num=parseInt(prompt("enter a number"))
    // let sum=0;
    // while(num!=0){
        //   let last=Math.floor(num%10);
        //    sum+=last;
        //    Math.floor(num/=10)
// 
    // 
// 
    // }
    // alert(sum);
// }
// 

function sum(){
    let num=prompt("enter a num");
    let sum=0;
    for(let i=num.length-1;i>=0;i--){
            sum+=parseInt((num[i]));

    }

    alert(sum)
}

function factorial(){
    let num=parseInt(prompt("enter a num"))
    let fac=1;
    for(let i=1;i<=num;i++){
        fac*=i;
    }
    alert(fac)
}
