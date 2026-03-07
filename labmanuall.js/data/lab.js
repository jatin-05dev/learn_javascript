
    // let arr=[1,2,3,4,5,6,7,8,9,10]
    // let map=arr.map((e)=>{
    //     return e*2
    // })
    // console.log(map
    // );

    // let fruit=["banana","apple","cherry"]
//    let upp=fruit.map((e)=>{
//    return e.toUpperCase()
    //  
//    })    
//    console.log(upp);
   

let data= [{
  name:"jatin",
  age:56
},
{name:"paras",
    age:15
},
{
    name:"sumit",
    age:19
}
]

let n=data.filter((e)=>{
    return e.age>18
    
})


console.log(n);
//command for json start = npm install -g json server
// paticular ke nhi -g  node package manager
//data.json ->run on  json-server 
// json-server --watch filename.json
 



