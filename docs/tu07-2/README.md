# TU07. Exercises Part Two

## PRE-REQUIREMENTS

- Create a folder in your course git repository called **tu07-2** inside the docs folder.

## REQUIREMENTS

- This task is a set of exercises; create each exercise in a separate file, inside the tu07-2 folder.
- All your exercises must run out of the browser, with node.
- Write DRY code (DRY stands for: Don't Repeat Yourself)

### EXERCISE 1

Create a constructor function `Calculator` that receives two input params (two numbers) and creates objects with 3 methods:

- `sum()` returns the sum of the two properties of the object.
- `mul()` returns the multiplication product of the two properties of the object.
- `avg()` returns the average product of the two properties of the object.

You have to use arrow functions to create the 3 methods of the object.

```js
let calculator = new Calculator(230, 456);

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );
console.log( "Mul=" + calculator.avg() );
```

Add JEST Unit Tests to validate your code

## SUGGESTIONS

- Try to use as many theoretical concepts as possible. *The exercises are tasks to practice what you have learn.*
- Don't use languages structures/concepts that you have not covered yet in the course.

## DELIVERABLES

- <span style="color: tomato;">You must just push your changes to your course's github repository;</span> that's all as I already have a clone of your repository. I will pull your changes as soon as you complete the activity, and I will grade it.
- <span style="color: tomato;">To PASS you need to deliver the exercise</span> (no matter if they work or not).
