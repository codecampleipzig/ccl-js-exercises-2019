// Coercion and Equality

// typeof: Checking the type of an expression

typeof undefined  // 'undefined'
typeof '1'        // 'string'
typeof 1          // 'number'
typeof true       // 'boolean'
typeof {}         // 'object'
typeof [1, 2, 3]     // 'object'

// Language defects
typeof function() {} // 'function'
typeof null          // 'object'

// Check if a value is an array
Array.isArray ([]) // true

// Check if a value is a function
function isFunction (f) {
   return typeof f == 'function';
}

// Coercion == Conversion

// to String
String (1)     // "1"
String (null)  // "null"
String (true)  // "true"
String ("Hello") // "Hello"

// weird behaviour for arrays and objects. Try to avoid. 
String ([])    // ""
String ([255, 255, 255]) // "255,255,255"
String ({})    // "[object Object]"

// to Number
Number (null)  // 0
Number (undefined) // NaN
Number (true)      // 1
Number (false)     // 0
Number ("123")    // 123

Number ("1,23")   // NaN
Number ("Hello")  // NaN


// Unexpected behavior: Avoid!
Number ("  ")        // 0 (should better be NaN)
Number ([])          // 0
Number ([1, 2, 3])   // NaN
Number ({})


// to Boolean
Boolean (null)      // false
Boolean (undefined) // false
Boolean (0)         // false
Boolean ("")        // false

// Falsy Values
false
null
undefined
0  -0
NaN
""

// Truthy Values : Everything else

// Pattern for checking if an object 'exists'
var myObject = undefined;

if (Boolean (myObject)) {
   myObject.property;
}

// Weird Edge Cases

3 - true      // 2
3 > 2 > 1    // false
[] == ![]    // true

// Rule:
// Write code so the types invovled in an operation are obvious and limited.

// Equality

// Abstract equality: ==
// prefers numeric comparison

3 == "3"       // 3 == 3 -> true
1 == true      // 1 == 1 -> true
"1" == true    // 1 == 1 -> true

// Very handy:
undefined == null  // true

// Strict equality: ===
// If types don't match, always return false.

3 === "3"       // false
1 === true      // false
"1" === true    // false
