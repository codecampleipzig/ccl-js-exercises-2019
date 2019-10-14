function repeatStringNumTimes(string, times) {
    var repeatedString = "";
    while (times > 0) {
    repeatedString += string;
    times--;
    }
    return repeatedString;
}

for (var i = 0; i < 10; i++) {
    var x = repeatStringNumTimes("#", i);
    console.log(x);