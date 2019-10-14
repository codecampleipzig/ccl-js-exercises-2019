function pyramid(string, times) {
   var result = "";
   while (times > 0) {
      result += string;
      times--;
   }
   return result;
}


for (var i = 0; i < 10; i++) {
   var x = pyramid("#", i);
   console.log(x);
}