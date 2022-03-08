# TU25. Exercises

## PRE-REQUIREMENTS

- Create a folder in your course git repository called **tu25** inside the docs folder.

## REQUIREMENTS

- Exercises must run out of the browser, with node.
- Write DRY code (DRY stands for: Don't Repeat Yourself)
- <span style="color: tomato;">**Don't validate**</span> your software using JEST.

### EXERCISE 1

Create a function `showPrompt(html, callback)` that shows a form with the message `html`, an input field and buttons `OK/CANCEL`.

A user should type something into a text field and press **_`Enter`_** or the OK button, then `callback(value)` is called with the value they entered.

Otherwise if the user presses **_`Esc`_** or CANCEL, then `callback(null)` is called.

In both cases that ends the input process and removes the form.

Usage example:

```js
showPrompt('Enter something<br>...smart :)', function (value) {
  alert(value);
});
```

Use the code in the tu25 folder of the following github repository:

SSH: [git@github.com:iesme-daw2021/exercises-templates.git](https://github.com/iesme-daw2021/exercises-templates.git)

HTTPS: <https://github.com/iesme-daw2021/exercises-templates.git>

## SUGGESTIONS

- Try to use as many theoretical concepts as possible. _The exercises are tasks to practice what you have learn._
- Don't use languages structures/concepts that you have not covered yet in the course.

## DELIVERABLES

- <span style="color: tomato;">You must just push your changes to your course's github repository;</span> that's all as I already have a clone of your repository. I will pull your changes as soon as you complete the activity, and I will grade it.
- <span style="color: tomato;">To PASS you need to deliver all the exercises</span> (no matter if they work or not).
