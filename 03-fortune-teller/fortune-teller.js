function random( randomOf = false ) {
    if (randomOf) {
        return randomOf[Math.floor(Math.random()*randomOf.length)]
    }
}

var noun = ["rat", "scorpion", "whatever"];
var adjective = ["multiple", "some", "any"];
var pluralNoun = ["ways","whatevers","nouns"];
var message = `Those born under the planetary sign of the ` + random(noun) + ` possess 
` + random(adjective) + ` personalities and are forever searching for new ` + random(pluralNoun) + ` 
to conquer.`;

console.log(message);