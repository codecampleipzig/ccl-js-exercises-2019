var prompt = require('./prompt');

var name = prompt ("What's your name? ")
console.log ("Hello " + name + "! Let's go on an adventure.");

console.log ("You just entered a house.")

var firstAnswer = prompt ("The house has 5 floors, which one do you choose?")

var floors = ["cellar", "ground floor", "first floor", "second floor", "third floor", "fouth floor", "fifth floor"]

for (floor in floors) {
   if (firstAnswer != floor) {
      console.log ("choose one of the following options: " + floors)
   }
   if (firstAnswer == "cellar") {
      console.log ("You are in the cellar. You hear really loud electronic music but you can't see anything." + 
      "A fog that changes it colors every second and forbids you to see more than your own hands." + 
      "sometimes faces appear in front of you and disappear again." +
      "The smell of toilett, cigaretts and beer is in the air, mixed with the specific smell of a fog mashine.")
   }
   if (firstAnswer == "ground floor") {
      var door = prompt ("You have three doors to choose from. Which one do you want to open?")
      if (door = "left") {
         console.log ("You enter the left appartment. In the air is the smell of nivea creme and lentil soup.")
      }
      elif (door = "middle") {
         
      }
   }
   if (firstAnswer == "first floor") {}
   if (firstAnswer == "second floor") {}
   if (firstAnswer == "third floor") {}
   if (firstAnswer == "forth floor") {}
   if (firstAnswer == "fifth floor") {}
}




