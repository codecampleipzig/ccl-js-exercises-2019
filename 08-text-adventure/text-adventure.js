var prompt = require('./prompt');

var name = prompt ("What's your name? ")
console.log ("Hello " + name + "! Let's go on an adventure.");

var age = prompt("What is your age?");
console.log ("Your age is: "+age);
if(age > 60){
    console.log ("Frankly, at best you have one more decade to live");
}