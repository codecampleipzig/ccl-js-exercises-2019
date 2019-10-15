// Checking the type of an expression

typeof undefined  // 'undefined'
typeof '1'        // 'string'
typeof 1          // 'number'
typeof true       // 'boolean'
typeof {}         // 'object'
typeof [1, 2, 3]     // 'object'
Array.isArray ([]) // true

// Language defects
typeof function() {} // 'function'
typeof null          // 'object'

function isFunction (f) {
   return typeof f == 'function';
}

// Coercion == Conversion

// to String

String (1)     // "1"
String (null)  // "null"
String (true)  // "true"
String ("Hello") // "Hello"

// Not nice for arrays and objects
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
Number ("  ")     // 0

Number ([])       // 0
Number ([1, 2, 3])   // NaN

// to Boolean

Boolean (null)     // false

// Falsy Values
false
null
undefined
0  -0
NaN
""

// Pattern for checking if an object 'exists'
var myObject = undefined;

if (Boolean (myObject)) {
   myObject.property;
}

// Guideline

3 - true      // 2
3 > 2 > 1    // false

// Rule: Write code so the types invovled in an operation are obvious and limited.

// Equality

// Abstract equality
==
// == tends towards numeric comparison

3 == "3"       // true
1 == true      // true
"1" == true    // true

// Really nice:
undefined == null  // true

// Strict equality
===
// If types don't match, always return false.

3 === "3"       // false
1 === true      // false
"1" === true    // false
"ab" === "ab"   // true

// Three pillars of Javascript
// Kyle Simpson : You don't know JS
// 1. Type & Coercion (Equality)
// 2. Scopes & Closure
// 3. this & prototype