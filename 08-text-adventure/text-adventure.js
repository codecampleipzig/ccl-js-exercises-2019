var prompt = require('./prompt');

var points = 0;

var name = prompt ("What's your name? ")
console.log ("Hello " + name + "! Let's go on an adventure. ");

console.log ("You just entered a house. ")

var floors = ["cellar", "ground floor", "zero and half floor", "first floor", "second floor", "third floor", "forth floor"]

console.log ("The house has 5 floors. Choose one of the following options: " + floors)

var floor = prompt ("which one do you choose? ");

function newFloor () {
   floor = prompt ("which floor do you choose now? ");
   return floor;
}

function chooseFloor(floor){
   if (floor == "cellar") {
      console.log ("You are in the cellar. You hear really loud electronic music but you can't see anything. " + 
      "A fog that changes it colors every second and forbids you to see more than your own hands. " + 
      "sometimes faces appear in front of you and disappear again. " +
      "The smell of toilett, cigaretts and beer is in the air, mixed with the specific smell of a fog mashine. ");
      cellarFloor()
   }
   if (floor == "ground floor") {
      console.log ("You enter a bar. Colourful people are everywhere. You hear loud music from the 90's. The people behind the bar are half naked and are wearing fäncy makeup. ");
      chooseFloor(newFloor());
   }
   if (floor == "zero and half floor") {
      var door = prompt ("You have two doors to choose from. Which one do you want to open? ");
      if (door == "left") {
         console.log ("You enter the left appartment. There is only trash in the apartments. ");
         chooseFloor(newFloor());
      }
      else if (door == "right") {
         console.log ("You arrive in the hostel. A very nice perosn welcomes you and wants you to choose a room. ");
         chooseFloor(newFloor());
      }
      else {
            console.log ("Choose left, middle or right! ")
      }
   }
   if (floor == "first floor") {
      var door = prompt ("You have three doors to choose from. Which one do you want to open? ");
      if (door == "left") {
         console.log ("You enter the left appartment. Sonia and Mariana are cooking. The invite you to have dinner with them. ");
         chooseFloor(newFloor());
      }
      else if (door == "middle") {
         console.log ("You try to open the door but its really hard. And loud. Also it sound like there are beer bottles behind the door. ");
         chooseFloor(newFloor());
      }
      else if (door == "right") {
         console.log ("you have to ring. The door doesn't open. ");
         chooseFloor(newFloor());
      }
      else {
            console.log ("Choose left, middle or right! ")
      }
   }
   if (floor == "second floor") {
      var door = prompt ("You have two doors to choose from. Which one do you want to open? ");
      if (door == "left") {
         console.log ("You enter the left appartment. No one appears to be there but the kitchen looks nice. ");
         chooseFloor(newFloor());
      }
      else if (door == "right") {
         console.log ("You enter the apartment and are directly in a kitchen. You hear electronic music from different rooms. A few people sit at the table and drink beer. They look at you. ");
         chooseFloor(newFloor());
      }
      else {
            console.log ("Choose left or right dumbdumb! ")
      }
   }
   if (floor == "third floor") {
      var door = prompt ("You have two doors to choose from. Which one do you want to open? ");
      if (door = "left") {
         console.log ("You enter the left appartment and you go straight to the kitchen. ");
         chooseFloor(newFloor());
      }
      else if (door == "right") {
         console.log ("you have to ring. The door doesn't open. ");
         chooseFloor(newFloor());
      }
      else {
            console.log ("Choose left or right dumbdumb! ")
      }
   }   
   if (floor == "forth floor") {
      var door = prompt ("You have two doors to choose from. Which one do you want to open? ");
      if (door == "left") {
         console.log ("You enter the left appartment. You arrive in a long room which appears to be liing room with a open kitchen at the end. on the couch are a few people playing Some game on the playstation. ");
         chooseFloor(newFloor());
      }
      else if (door == "right") {
         console.log ("it is really dark you dont see anything but there is scary stuff everywhere. it is cold and you dont know in which direction you can go. But there seems to be light around three corners. ");
         chooseFloor(newFloor());
      }
      else {
            console.log ("Choose left or right dumbdumb! ")
      }
   } 
   else {
      console.log("Wrong Answer!!!");
      chooseFloor(newFloor());
   }
}

// funtion loop 8 times when you took something
// garderoben floor
function cellarFloor(){
   var action = prompt ("Are you going to dance or rather have a drink? ");
   if (action == "drink") {
      var drink = prompt ("Do you have a beer or schnaps? ")
      if (drink == "beer") {
         console.log ("You get a sterni. Enjoy! ")
         cellarFloor();
      }
      if (drink == "schnaps") {
         var schnaps = prompt ("Pfeffi or Vodka? ")
         if (schnaps == "Pfeffi") {
            console.log ("you have three pfeffis becasue you invite everyone around you and than everyone around you invites everyone. ");
            cellarFloor();
            points += 1;
         }
         if (schnaps == "Vodka") {
            console.log ("you are starting to get drunk. have a pfeffi!! ");
            cellarFloor;
            points += 1;
         }
         if (schnaps == "both") {
            console.log ("you are in the right place. Eva lets you through the stairs behind the bar to the staircase. maybe you should go to the second floor to the right.! ")
            chooseFloor(newFloor());
            points += 2;
         }
         else {
            console.log ("we don't have fancy stuff down here. maybe go up to the ground floor. ")
            chooseFloor(newFloor());
         }
      }
      if (drink == "both") {
         console.log ("you are in the right place. Eva lets you through the stairs behind the bar to the staircase. maybe you should go to the second floor to the right.! ")
         chooseFloor(newFloor());
         points += 2;
      }
      else {
         console.log ("we don't have fancy stuff down here. maybe go up to the ground floor. ")
         chooseFloor(newFloor());
         points -= 1;
      }
   }
   if (action == "dance") {
      var danceFloor = prompt ("small or big floor?")
      if (danceFloor == "small") {
         console.log ("your friend is djing. you get 3 points");
         points += 3;
         cellarFloor ();
      }
      if (danceFloor == "big") {
         console.log ("it takes you 5 minutes to get to the dj booth. but the dj is really hot. also you friends have a bottle of shnaps and you get a shot and to dance funny with them. " +
         "you get 2 points")
         points += 2;
         cellarFloor ();
      }
      else {
         console.log ("becasue you couldn't decide you are suddenly in the toilett corridor. some people are sitting on a red couch that looks very conspicuas. " +
         "you go to the toilett which is a bad idea. its really small i there and you hurt your head. you die and have to go back to the entrance. ")
         chooseFloor(newFloor());
         points = 0;
      }
   }
   else {
      console.log ("becasue you couldn't decide you are suddenly in the toilett corridor. some people are sitting on a red couch that looks very conspicuas. " +
      "you go to the toilett which is a bad idea. its really small i there and you hurt your head. you die and have to go back to the entrance. ")
      chooseFloor(newFloor());
      points = 1;
   }
}
chooseFloor (floor);


