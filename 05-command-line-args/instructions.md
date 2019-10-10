# Command Line Arguments: Instructions

* The command line arguments passed to the process by the user are stored as an array of strings in process.argv
* `process.argv[0]` is actual not a command line argument, but the path to the executable, e.g. "/usr/bin/node"
* `process.argv[1]` will be the path of the script file you passed to node.
* Write a program which prints out `process.argv[2]`, but only if it exists, and it's a string, but not the empty string.