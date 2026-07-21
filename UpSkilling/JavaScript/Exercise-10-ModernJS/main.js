const events=[
{name:"Music Festival",date:"25 July"},
{name:"Workshop",date:"30 July"}
];
function showEvent(eventName="Community Event"){
console.log(eventName);
}
showEvent();
const{name,date}=events[0];
console.log(name);
console.log(date);
const copiedEvents=[...events];
console.log(copiedEvents);