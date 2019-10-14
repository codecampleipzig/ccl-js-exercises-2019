# Complement Color: Instructions

![](https://www.101computing.net/wp/wp-content/uploads/complementary-colours.png)
* In complement-color.js create three bindings: red, green and blue. Assign each of them a value between 0 and 255.
* Write a program which computes the complement color and prints it out. This is some possible output.
```
The complement color of rgb(0, 0, 255) is rgb(255, 255, 0)
```
* Test your code with different inputs.
* Commit your program and push to your branch.

## Formula

> color = [red, green, blue]
>
> ⇒ complement(color) = [255 - red, 255 - green, 255 - blue]

## Further Challenges
   * Use an object to represent a color in a single value instead of three separate ones.
   * `process.argv` is bound to the command line arguments that were passed to node. Try adding a command line interface to your program. Hints: Run `console.log (process.argv)` to test how command line arguments are passed to node.

