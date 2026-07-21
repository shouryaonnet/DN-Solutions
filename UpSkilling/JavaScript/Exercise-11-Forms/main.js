const form=document.querySelector("#registerForm");
const error=document.querySelector("#error");

form.addEventListener("submit",function(event){

event.preventDefault();

const name=form.elements["name"].value;
const email=form.elements["email"].value;
const selectedEvent=form.elements["event"].value;

if(name===""||email===""||selectedEvent===""){

error.textContent="Please fill all fields.";

return;

}

error.textContent="Registration Successful";

console.log(name,email,selectedEvent);

});