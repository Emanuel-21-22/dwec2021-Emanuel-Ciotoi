# TU29. Exercise 1

## PRE-REQUIREMENTS

- Create a folder in your course git repository called **tu29-1** inside the docs folder.

## REQUIREMENTS

- Exercises must run out of the browser, with node.
- Write DRY code (DRY stands for: Don't Repeat Yourself)
- <span style="color: tomato;">**Don't validate**</span> your software using JEST.

### EXERCISE 1

The built-in function `setTimeout` uses callbacks. Create a promise-based alternative.

The function `delay(ms)` should return a promise. That promise should resolve after `ms` milliseconds, so that we can add `.then` to it, like this:

```js
function delay(ms) {
  // your code
}

delay(3000).then(() => alert('runs after 3 seconds'));
```

### EXERCISE 2

Using the delay function you built, create a web page with an empty body and then with Javascript, create a span with an initial text Loading, and then call the delay function made in the previous exercise with 2 seconds and after the 2 seconds, change the span text to Completed.

Add also the following error functionality: in case of error during the delay call, just change the span text to Error.

## SUGGESTIONS

- Try to use as many theoretical concepts as possible. _The exercises are tasks to practice what you have learn._
- Don't use languages structures/concepts that you have not covered yet in the course.

## DELIVERABLES

- <span style="color: tomato;">You must just push your changes to your course's github repository;</span> that's all as I already have a clone of your repository. I will pull your changes as soon as you complete the activity, and I will grade it.
- <span style="color: tomato;">To PASS you need to deliver all the exercises</span> (no matter if they work or not).
