# TU15. Optional Exercises

## PRE-REQUIREMENTS

- Create a folder in your course git repository called **tu15** inside the docs folder.

## REQUIREMENTS

- Exercises must run out of the browser, with node.
- Write DRY code (DRY stands for: Don't Repeat Yourself)
- Validate your software using JEST.

### EXERCISE 1

Write function `sum` that works like this: `sum(a)(b)` **= a+b**.

Yes, exactly this way, using double parentheses (not a mistype).

For instance:

```js
sum(1)(2) = 3
sum(5)(-1) = 4
```

### EXERCISE 2

We’ve got an array of objects to sort:

```js
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
```

The usual way to do that would be:

```js
// by name (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// by age (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);
```

Can we make it even less verbose, like this?

```js
users.sort(byField('name'));
users.sort(byField('age'));
```

So, instead of writing a function, just put `byField(fieldName)`.

Write the function `byField` that can be used for that.

## SUGGESTIONS

- Try to use as many theoretical concepts as possible. *The exercises are tasks to practice what you have learn.*
- Don't use languages structures/concepts that you have not covered yet in the course.

## DELIVERABLES

- <span style="color: tomato;">You must just push your changes to your course's github repository;</span> that's all as I already have a clone of your repository. I will pull your changes as soon as you complete the activity, and I will grade it.
- <span style="color: tomato;">Those exercises are OPTIONAL</span>.
