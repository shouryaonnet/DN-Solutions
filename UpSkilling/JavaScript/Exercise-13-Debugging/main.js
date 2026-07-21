document.querySelector("#registerBtn").onclick=function(){
console.log("Register Button Clicked");
const user={
name:"Shourya",
event:"Music Festival"
};
console.log(user);
console.log("Sending Request...");
fetch("https://jsonplaceholder.typicode.com/posts",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(user)
})
.then(response=>response.json())
.then(data=>{
console.log("Success");
console.log(data);
})
.catch(error=>{
console.log(error);
});
};