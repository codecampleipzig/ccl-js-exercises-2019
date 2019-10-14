/*/ Write a program to print out all the numbers from 1 to 100 with two exceptions.
For numbers divisible by 3, print "Fizz" instead of the number, 
And for numbers divisible by 5 (and not 3), print "Buzz" instaed. /*/

/*/ fizz und buzz
for (var i = 1; i <= 100; i = i + 1) {
     if (i % 3 != 0 && i % 5 == 0) {
        console.log('fizz'); 
    } else if (i % 3 == 0) {
        console.log('buzz');
    } else {
        console.log(i); 
    }
}
/*/

/*/fizzbuzz/*/

for (var i = 1; i <= 100; i = i + 1) {
    if (i % 3 == 0 && i % 5 == 0) {
console.log('fizzbuzz'); 
    } else if (i % 3 == 0) {
console.log('buzz');
    } else if (i % 5 == 0) {
console.log('buzz');
    } else {
console.log(i); 
   }
}
