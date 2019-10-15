if (typeof process.argv[2] == typeof "") {
    console.log("I got this wonder word from the Terminal " + process.argv[2]);
} else {
    console.log("something is not good")
}
// argv is just a shortcut for the lookup//
//argv[0] is an excuteable /user/admin/bin/node//
// argv[1] path to the  script//