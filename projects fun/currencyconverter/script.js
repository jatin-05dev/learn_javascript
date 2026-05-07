let select=document.getElementsByTagName("select")
let dropdown=document.getElementsByClassName("dropdown")
for(let selec of select){
for(let i in countryList){
   let newop=document.createElement("option");
   newop.innerText=i;
   newop.value=i;
   if(selec.name==="from" && i==="USD"){
    newop.selected="selected"
   }
   else if(selec.name==="to" &&i ==="INR"){
     newop.selected="selected"
   }
   selec.append(newop)
   selec.addEventListener("change",(evt)=>{
    update(evt.target)
   })
   

}}
const update=(element)=>{
    let curr=element.value;
    let coucode=countryList[curr];
    let newsrc=`https://flagsapi.com/${coucode}/flat/64.png`;
    let img=element.parentElement.querySelector("img")
    img.src=newsrc
} 