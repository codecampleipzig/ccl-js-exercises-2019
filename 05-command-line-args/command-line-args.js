if (process
    && process.argv
    && process.argv[2]
    && typeof process.argv[2] == typeof ""
    && process.argv[2] != "") {
    console.log(process.argv[2]);
} else {
    console.log("There is no string value in process.argv(2)!");
}

