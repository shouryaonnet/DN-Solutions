const message=document.querySelector("#message");

document.querySelector("#registerBtn").onclick=function(){
message.textContent="Registration Successful";
};

document.querySelector("#category").onchange=function(){
message.textContent="Category : "+this.value;
};

document.querySelector("#search").onkeydown=function(event){
console.log("Searching : "+event.target.value);
};