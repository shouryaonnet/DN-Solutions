const result=document.querySelector("#result");
document.querySelector("#sendBtn").onclick=function(){
result.textContent="Sending...";
setTimeout(async()=>{
try{
const response=await fetch("https://jsonplaceholder.typicode.com/posts",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name:"Shourya",
event:"Music Festival"
})
});
const data=await response.json();
result.textContent="Registration Successful";
console.log(data);
}
catch(error){
result.textContent="Registration Failed";
console.log(error)
}
},2000);

};