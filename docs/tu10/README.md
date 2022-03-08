# TU10. Exercises

## PRE-REQUIREMENTS

- Create a folder in your course git repository called tu10 inside the docs folder.

## REQUIREMENTS

- Exercises must run out of the browser, with node.
- Write DRY code (DRY stands for: Don't Repeat Yourself)
- Validate your software using JEST.

### EXERCISE 1

Let ***arr*** be an array.

Create a function p  that should return an array with unique items of ***arr***.

### EXERCISE 2

[Anagrams](https://en.wikipedia.org/wiki/Anagram) are words that have the same number of same letters, but in different order.

For instance:

```js
nap - pan
ear - are - era
cheaters - hectares - teachers
```

Write a function `aclean(arr)` that returns an array cleaned from anagrams.

For instance:

```js
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"
```

From every anagram group should remain only one word, no matter which one.

## SUGGESTIONS

- Try to use as many theoretical concepts as possible. *The exercises are tasks to practice what you have learn.*
- Don't use languages structures/concepts that you have not covered yet in the course.

## DELIVERABLES

- <span style="color: tomato;">You must just push your changes to your course's github repository;</span> that's all as I already have a clone of your repository. I will pull your changes as soon as you complete the activity, and I will grade it.
- <span style="color: tomato;">To PASS you need to deliver the 2 exercises</span> (no matter if they work or not).
