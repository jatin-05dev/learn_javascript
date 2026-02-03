// ecwn pop means how the ev trwbe from dom
// 2 phase are capturing  top to bottom  and the bubbling bottom to top  taget phasws means click
// document.getElementById("outer").addEventListener("click",true,()=>{
    // console.log("clic outer");
    // 
// })
// 
//  document.getElementById("middle").addEventListener("click",true,()=>{
    // console.log("clic middle");
    // e.stopPropagation()
// })
// 
//  document.getElementById("inner").addEventListener("click",true,()=>{
    // console.log("clic inner");
    // e.stopPropagation()
// 
    // 
// })
//let= function useCall1=>(e)(
    // console.log("click outwr")
    // 
// )
// function useCall1(){
    // console.log("click outwr")
    // 
// }
// 
// function useCall2(){
    // console.log("click middle")
    // 
// }
// function useCall3(){
    // console.log("click inner")
    // 
// }
// document.getElementById("outer").addEventListener("click",useCall1,true)
// document.getElementById("middle").addEventListener("click",useCall2,true)
// document.getElementById("inner").addEventListener("click",useCall3,true).
document.getElementById("lo").addEventListener("click",(e)=>{
 console.log(e.target.textContent);
 
})
 