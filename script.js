//your JS code here. If required.
const output=document.getElementById("output");
async function sayhello() 
{
    return new Promise((resolve,reject)=>
    {
       setTimeout(()=>{
       output.innerText="Hello, world!"
       },1000)
    })
    
}
sayhello();