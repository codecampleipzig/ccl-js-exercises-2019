for (i = 1; i <= 100; i++) {
    var isDivisibleBy3 = i % 3 == 0;
    var isDivisibleBy5 = i % 5 == 0; 

    if (isDivisibleBy3 && !isDivisibleBy5) {
        console.log("Fizz");
    } else if (isDivisibleBy5 && !isDivisibleBy3) {
        console.log("Buzz");
    } else if (isDivisibleBy3 && isDivisibleBy5) {
        console.log("FizzBuzz");
    } else {
        console.log(i);
    }

}

// Version 2
// for (i = 1; i <= 100; i++) {

//     if (i % 3 == 0) {
//         if (i % 5 == 0) {
//             console.log("FizzBuzz");
//         } else {
//             console.log("Fizz");
//         }
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }

// }


// Version 3
// for (i = 1; i <= 100; i++) {
//     var isDivisibleBy3 = i % 3 == 0;
//     var isDivisibleBy5 = i % 5 == 0;

//     if (isDivisibleBy3) {
//         if (isDivisibleBy5) {
//             console.log("FizzBuzz");
//         } else {
//             console.log("Fizz");
//         }
//     } else if (isDivisibleBy5) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }

// }
