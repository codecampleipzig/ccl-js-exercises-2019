function random( randomOf = false ) {
    if (randomOf) {
        return randomOf[Math.floor(Math.random()*randomOf.length)]
    }
}

var noun = ["Rat", "Wiesele", "blabla"];
var adjective = ["multiple", "easy", "hard"];
var pluralNoun = ["ways","whatevers","Moritzes"];
var message = `Those born under the planetary sign of the ` + random(noun) + ` possess 
` + random(adjective) + ` personalities and are forever searching for new ` + random(pluralNoun) + ` 
to conquer.`;

console.log(message);