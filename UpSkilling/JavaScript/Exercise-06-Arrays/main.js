const events=[
{name:"Music Show",category:"Music"},
{name:"Baking",category:"Workshop"}
];

events.push({
name:"Dance Competition",
category:"Dance"
});

const musicEvents=events.filter(event=>event.category==="Music");

console.log(musicEvents);

const cards=events.map(event=>`Workshop on ${event.name}`);

console.log(cards);