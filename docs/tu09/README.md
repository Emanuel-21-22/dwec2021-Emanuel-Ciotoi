# TU09. Exercises

## PRE-REQUIREMENTS

- Create a folder in your course git repository called **tu09** inside the docs folder.

## REQUIREMENTS

- Exercise 1 must run in the browser
- Exercises 2 and 3 must run out of the browser, with node.
- Write DRY code (DRY stands for: Don't Repeat Yourself)
- Validate your software using JEST.
  - Including the Exercise 1.
  - To achieve that, separate your business logic, from your user interface (UI) logic. Use modules to do that.

### EXERCISE 1

Write a program that:

Asks the user for values using ***prompt*** and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
Shows in the console.log the calculated value (the sum of the array items).
P.S. A zero ***0*** is a valid number, please don’t stop the input on zero.

### EXERCISE 2

Write the function `getAverageAge(users)` that gets an array of objects with property age and returns the average age.

The formula for the average is ***(age1 + age2 + ... + ageN) / N***

For instance:

```js
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
```

### EXERCISE 3

Create the function `topSalary(salaries)` that returns the name of the top-paid person.

- If ***salaries*** is empty, it should return ***null***.
- If there are multiple top-paid persons, return any of them.
- ***salaries*** is an object with a list of properties, where the property name is the Person Name and the value is the Salary of that Person. Example:

```js
const salaries = {
John: 200,
Ann: 250,
};
```

P.S. Use [Object.entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) and destructuring to iterate over key/value pairs.

## SUGGESTIONS

- Try to use as many theoretical concepts as possible. *The exercises are tasks to practice what you have learn.*
- Don't use languages structures/concepts that you have not covered yet in the course.

## DELIVERABLES

- <span style="color: tomato;">You must just push your changes to your course's github repository;</span> that's all as I already have a clone of your repository. I will pull your changes as soon as you complete the activity, and I will grade it.
- <span style="color: tomato;">To PASS you need to deliver the 3 exercises</span> (no matter if they work or not).
