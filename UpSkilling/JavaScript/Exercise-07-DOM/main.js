const eventList=[
"Music Festival",
"Food Fair",
"Sports Meet"
];
const container=document.querySelector("#events");
eventList.forEach(event=>{
const card=document.createElement("div");
card.textContent=event;
card.style.border="1px solid black";
card.style.padding="10px";
card.style.margin="10px";
container.appendChild(card);
});
document.querySelector("#registerBtn").onclick=function(){
container.style.background="lightgreen";
};
document.querySelector("#cancelBtn").onclick=function(){
container.style.background="white";
};