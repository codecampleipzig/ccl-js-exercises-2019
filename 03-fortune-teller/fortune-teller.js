var message = `Those born under the planetary sign of the (noun) possess
(adjective) personalities and are forever searching for new (plural noun)
to conquer.`;

var noun = "Scorpio";
var adjective = "empathic";
var pluralNoun = "mysteries";

var concat = "Those born under the planetary sign of the " + noun + " possess " + adjective + " personalities and are forever searching for new " + pluralNoun +
" to conquer.";
console.log(concat);

var concat1 = `Those born under the planetary sign of the ${noun} possess ${adjective} personalities and are forever searching for new ${pluralNoun} to conquer.`;
console.log(concat1);

