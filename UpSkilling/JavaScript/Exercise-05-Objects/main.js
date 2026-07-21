function Event(name,seats){
this.name=name;
this.seats=seats;
}
Event.prototype.checkAvailability=function(){
if(this.seats>0){
console.log("Seats Available");
}
else{
console.log("Event Full");
}
};
const event1=new Event("Music Festival",50);
event1.checkAvailability();
Object.entries(event1).forEach(([key,value])=>{
console.log(`${key} : ${value}`);
});