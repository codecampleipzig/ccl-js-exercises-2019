function add2(num) {
   if (typeof num != 'number') {
      throw "Argument must be a number";
   }
   return num + 2;
}

try {
   add2('1');
   console.log ("Everything worked fine.");
}
catch (error) {
   console.log ("Error: " + error);
}
console.log ("Done");
