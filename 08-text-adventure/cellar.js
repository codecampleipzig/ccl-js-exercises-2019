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