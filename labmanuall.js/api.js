//fetch(url,method)
//HTTP methods -> get ,post ,delete ,put,patch
// get-> access
// post-> insert
// delete ->delete
// put -> edit

// async and sync  java script
// 
// sync mens js works to get time to everynline 
// async ,eand to excute to evry which have short 
// that ehy  use async await
//promise 
// -> reject
// -> pending 
// -> fullfiled
// async ka drawback to use asyndc await
//.then() for promise 
//.catch() handle promise '
 let final
let shdat=document.querySelector('#showdata')
async function access(){
    let data=await fetch("https://jsonplaceholder.typicode.com/photos")
    let res=await data.json()
    console.log(res);
    
 final=res.map((e)=>
    `<tr>   
       <td> ${e.albumId} </td>
       <td> ${e.id}</td>
       <td> ${e.thumbnailUrl}</td>
       <td> ${e.title} </td>
       <td> ${e.url}</td>
  
       </tr>`

).join("")
shdat.innerHTML=final
}
access()
//js object notation 
// json me dat object form me rheta he 
//  ek data ko rakha na pdega file nhi to vo run nhi krega 
// {[{"sumit ":56}skima]}
