var recentPairings = [
   ["nico", "bea"],
   ["moritz", "andres"],
   ["simona", "pauline"],
   ["bjoern", "ani"],
   ["bjoern", "iko"],
   ["mariana", "lena"],
   ["kaab", "nick"],
]

var students = ['moritz', 'andres', 'ani', 'lena', 'mariana', 'pauline', 'iko', 'bjoern', 'nick', 'nico', 'kaab', 'simona', 'bea'];

// Return random Integer between 0 (inclusive) and max (exclusive).
function randomInt (max) {
   return Math.floor (Math.random() * max);
}

function randomizedArray (array) {
   var result = [];
   for (var element of array) {
      result.splice (randomInt (result.length + 1), 0, element);
   }
   return result;
}

function pairArray (array) {
   var result = [];
   for (var first = 0; first < array.length; first += 2) {
      var second = first + 1;
      if (second < array.length) {
         result.push ([array[first], array[second]]);
      }
      else {
         result.push ([array[first]]);
      }
   }
   return result;
}

function pairsEquivalent (a, b) {
   return (a[0] == b[0] && a[1] == b[1]) || (a[0] == b[1] && a[1] == b[0]);
}

function isPairingAcceptable (pairList, forbiddenPairs) {
   for (var p of pairList) {
      if (p.length != 2) {
         continue;   
      }
      // p.length == 2
      if (forbiddenPairs.find (function (a) {return pairsEquivalent (a, p);})) {
         return false;
      }
   }
   return true;
}

function generateRandomStudentPairing() {
   return pairArray (randomizedArray (students));
}

function generateAcceptableStudentPairing() {
   var pairing = generateRandomStudentPairing();
   while (isPairingAcceptable (pairing, recentPairings) == false) {
      pairing = generateRandomStudentPairing();
   }
   return pairing;
}

console.log (generateAcceptableStudentPairing());
