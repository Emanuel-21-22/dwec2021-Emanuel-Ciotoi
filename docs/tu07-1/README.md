# TU07. Exercises Part One

## PRE-REQUIREMENTS

- Create a folder in your course git repository called **tu07-1** inside the docs folder.

## REQUIREMENTS

- This task is a set of exercises; create each exercise in a separate file, inside the tu07-1 folder.
- All your exercises must run out of the browser, with node.
- Write DRY code (DRY stands for: Don't Repeat Yourself)

### EXERCISE 1

Write the code inside a function called ***createUser***, one line for each action:

1. Create an empty object ***user***.
1. Add the property ***name*** with the value ***John***.
1. Add the property ***surname*** with the value ***Smith***.
1. Change the value of the ***name*** to ***Pete***.
1. Remove the property ***name*** from the object.
1. Return the user object
1. Add JEST Unit Tests to validate your code

### EXERCISE 2

Write the function `isEmpty(obj)` which returns ***true*** if the object has no properties, ***false*** otherwise.

Should work like that:

```js
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
```

Add JEST Unit Tests to validate your code

### EXERCISE 3

We have an object storing salaries of our team:

```js
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
```

Write a function to sum all salaries and store in the variable ***sum***. Should be ***390*** in the example above.

If salaries is ***empty***, then the result must be ***0***

Add JEST Unit Tests to validate your code

### EXERCISE 4

Create a function `multiplyNumeric(obj)` that multiplies all numeric property values of ***obj*** by ***2***.

For instance:

```js
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
```

Please note that ***multiplyNumeric*** does not need to return anything. It should modify the object in-place.

Add JEST Unit Tests to validate your code

## SUGGESTIONS

- Try to use as many theoretical concepts as possible. *The exercises are tasks to practice what you have learn.*
- Don't use languages structures/concepts that you have not covered yet in the course.

## DELIVERABLES

- <span style="color: tomato;">You must just push your changes to your course's github repository;</span> that's all as I already have a clone of your repository. I will pull your changes as soon as you complete the activity, and I will grade it.
- <span style="color: tomato;">To PASS you need to deliver the 4 exercises</span> (no matter if they work or not).
