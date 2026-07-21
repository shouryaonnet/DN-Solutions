function addEvent(name){
console.log(`${name} Added`);
}
function registerUser(name){
console.log(`${name} Registered`);
}
function filterEventsByCategory(events,callback){
return events.filter(callback);
}
function registrationCounter(){
let total=0;
return function(){
total++;
return total;
};

}
const counter=registrationCounter();
console.log(counter());
console.log(counter());
const events=[
{name:"Music",category:"Music"},
{name:"Coding",category:"Workshop"},
{name:"Dance",category:"Music"}
];
const musicEvents=filterEventsByCategory(events,event=>event.category==="Music");
console.log(musicEvents);
addEvent("Music Festival");
registerUser("Shourya");