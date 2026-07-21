const events=[
{name:"Music Festival",seats:10,isPast:false},
{name:"Workshop",seats:0,isPast:false},
{name:"Sports Meet",seats:15,isPast:true}
];
events.forEach(event=>{
if(!event.isPast&&event.seats>0){
console.log(event.name);
}
});
try{
let seats=5;
if(seats<=0){
throw new Error("No Seats Available");
}
console.log("Registration Successful");
}
catch(error){
console.log(error.message);
}