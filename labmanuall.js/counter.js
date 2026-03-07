let time=document.getElementById("time")
let count=0;
function inc(){
  
    if(count%2==0){
     
    time.style.color="red";
    time.innerHTML=count
    count++
    }
    else{
       
        time.style.color="black";
          time.innerHTML=count
          count++
    }
    


}
function dec(){
    
    
  
  
  
  
  
  
  
  


  if(count%2==0){
 
  time.style.color="red";
    time.innerHTML=--count
     
  }
  else{
    
      time.style.color="black";
         time.innerHTML=--count
  }
  
    
    
if(count>0){
    time.innerHTML=--count;

}
if(count<0){
    alert("not")
  count=0;   
    
}
    
    
    
    
    
 
}
function reset(){
    count=0;
    time.innerHTML=count
}