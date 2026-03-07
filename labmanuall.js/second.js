function reverse(){
    let str ="jatin his in cybrom";
    let l=str.length
    let str2=" "
    for(let i=l-1;i>=0;i--){
          str2+=str[i]
    }
    console.log(str2)
}
function largest(){
    let arr=[12,45,34,67];
    let lar=0;
    for(let i=0;i<arr.length;i++){

        if(arr[i]>lar){
          lar=arr[i];
          
        }
    
    }
    alert(lar)

}