# TU05. Exercises

## PRE-REQUIREMENTS

- Create a folder in your course git repository called **tu05** inside the docs folder.

## REQUIREMENTS

- This task is a set of exercises; create each exercise in a separate file, inside the tu05 folder.
- All your exercises must run out of the browser, with node.
- Write DRY code (DRY stands for: Don't Repeat Yourself)

### EXERCISE 1

Create an arrow function to calculate if a number is even or odd (TRUE if even or FALSE if odd). Output in the info level of the console if 7, 104 and 2760 are even or odd (output just true or false).

### EXERCISE 2

The following function returns ***true*** if the parameter ***age*** is greater or equal than ***18***. ***false*** otherwise.

```js
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
```

Rewrite it, to perform the same, but without the ***if*** statement, in a single line.

Make two variants of ***checkAge***:

1. Using a question mark operator ***?***
1. Using OR ***||*** and an arrow function

Check that the functions work fine by outputting in the info level of the console, the result of the function with the following arguments: 17, 18, 19. Write the two variants in different JavaScript files.

### EXERCISE 3

Write a function `pow(x,n)` that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

```js
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ... * 1 = 1
```

To check the function, output in the JavaScript console, at info level, the output of `pow(2,6)`, the output of `pow(0,5)` and the output of `pow(-5, 3)`

### EXERCISE 4

- Create a function ASK, that will receive a number and it will execute a function when the number is zero or positive, and another function when the number is negative. Use callback functions to resolve that.
- When zero or positive, the callback function will console.info the text: "Is positive". When zero or negative, the callback function will console.info the test: "Is negative". Therefore, the positive / negative callback functions will decouple the ASK function from them.
- Finally, to check if a number is zero or positive, or if the number is be negative, do it using an arrow function.
- Check your code by changing 23 by -23 and checking the results.

## SUGGESTIONS

- Try to use as many theoretical concepts as possible. *The exercises are tasks to practice what you have learn.*
- Don't use languages structures/concepts that you have not covered yet in the course.

## DELIVERABLES

<span style="color: tomato;">You must just push your changes to your course's github repository;</span> that's all as I already have a clone of your repository. I will pull your changes as soon as you complete the activity, and I will grade it.

<span style="color: tomato;">To PASS you need to deliver the 4 exercises</span> (no matter if they work or not).
