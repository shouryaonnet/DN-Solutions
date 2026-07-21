const output=document.querySelector("#output");

fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then(data=>{
output.textContent=data[0].name;
})
.catch(error=>{
console.log(error);
});
async function loadEvents(){
try{
output.textContent="Loading...";
const response=await fetch("https://jsonplaceholder.typicode.com/users");
const data=await response.json();
output.textContent=data[1].name;
}
catch(error){
console.log(error);
}
}

loadEvents();