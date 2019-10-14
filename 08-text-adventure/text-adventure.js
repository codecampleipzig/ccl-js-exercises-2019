var prompt = require('./prompt');

var name = prompt ("What's your name? ")
console.log ("Hello " + name + "! Let's go on an adventure.");

console.log ("You just entered a house.")

var floors = ["cellar", "ground floor", "zero and half floor", "first floor", "second floor", "third floor", "fouth floor"]

console.log ("The house has 5 floors. Choose one of the following options: " + floors)

var floor = prompt ("which one do you choose? ")

function chooseFloor(floor){
   
   if (floor == "cellar") {
      console.log ("You are in the cellar. You hear really loud electronic music but you can't see anything." + 
      "A fog that changes it colors every second and forbids you to see more than your own hands." + 
      "sometimes faces appear in front of you and disappear again." +
      "The smell of toilett, cigaretts and beer is in the air, mixed with the specific smell of a fog mashine.")
      chooseFloor(prompt ("which floor do you choose now? "))
   }
   if (floor == "ground floor") {
      console.log ("You enter a bar. Colourful people are everywhere. You hear loud music from the 90's. The people behind the bar are half naked and are wearing fäncy makeup. ")
      chooseFloor(prompt ("which floor do you choose now? "))
   }
   if (floor == "zero and half floor") {
      var door = prompt ("You have two doors to choose from. Which one do you want to open?");
      if (door == "left") {
         console.log ("You enter the left appartment. There is only trash in the apartments.");
         chooseFloor(prompt ("which floor do you choose now? "))
      }
      else if (door == "right") {
         console.log ("You arrive in the hostel. A very nice perosn welcomes you and wants you to choose a room.");
         chooseFloor(prompt ("which floor do you choose now? "))
      }
      else {
            console.log ("Choose left, middle or right!")
      }
   }
   if (floor == "first floor") {
      var door = prompt ("You have three doors to choose from. Which one do you want to open?");
      if (door == "left") {
         console.log ("You enter the left appartment. Sonia and Mariana are cooking. The invite you to have dinner with them.");
         chooseFloor(prompt ("which floor do you choose now? "))
      }
      else if (door == "middle") {
         console.log ("You try to open the door but its really hard. And loud. Also it sound like there are beer bottles behind the door.");
         chooseFloor(prompt ("which floor do you choose now? "))
      }
      else if (door == "right") {
         console.log ("you have to ring. The door doesn't open.");
         chooseFloor(prompt ("which floor do you choose now? "))
      }
      else {
            console.log ("Choose left, middle or right!")
      }
   }
   if (floor == "second floor") {
      var door = prompt ("You have two doors to choose from. Which one do you want to open?");
      if (door == "left") {
         console.log ("You enter the left appartment. No one appears to be there but the kitchen looks nice.");
         chooseFloor(prompt ("which floor do you choose now? "))
      }
      else if (door == "right") {
         console.log ("You enter the apartment and are directly in a kitchen. You hear electronic music from different rooms. A few people sit at the table and drink beer. They look at you.");
         chooseFloor(prompt ("which floor do you choose now? "))
      }
      else {
            console.log ("Choose left or right dumbdumb!")
      }
   }
   if (floor == "third floor") {
      var door = prompt ("You have two doors to choose from. Which one do you want to open?");
      if (door = "left") {
         console.log ("You enter the left appartment and you go straight to the kitchen.");
         chooseFloor(prompt ("which floor do you choose now? "))
      }
      else if (door == "right") {
         console.log ("you have to ring. The door doesn't open.");
         chooseFloor(prompt ("which floor do you choose now? "))
      }
      else {
            console.log ("Choose left or right dumbdumb!")
      }
   }   
   if (floor == "forth floor") {
      var door = prompt ("You have two doors to choose from. Which one do you want to open?");
      if (door == "left") {
         console.log ("You enter the left appartment. You arrive in a long room which appears to be liing room with a open kitchen at the end. on the couch are a few people playing Some game on the playstation.");
         chooseFloor(prompt ("which floor do you choose now? "))
      }
      else if (door == "right") {
         console.log ("it is really dark you dont see anything but there is scary stuff everywhere. it is cold and you dont know in which direction you can go. But there seems to be light around three corners. ");
         chooseFloor(prompt ("which floor do you choose now? "))
      }
      else {
            console.log ("Choose left or right dumbdumb!")
      }
   } 
}
 chooseFloor (floor);


