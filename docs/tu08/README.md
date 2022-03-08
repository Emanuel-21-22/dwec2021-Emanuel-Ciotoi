# TU08. Exercises

## PRE-REQUIREMENTS

- Create a folder in your course git repository called **tu08** inside the docs folder.

## REQUIREMENTS

- The exercise must run out of the browser, with node.
- Write DRY code (DRY stands for: Don't Repeat Yourself)
- Validate your software using JEST

### EXERCISE

Create a function to check if a password is valid. A valid password:

- must contain at least 8 characters
- must contain at least one lowercase letter
- must contain at least one uppercase letter
- must contain at least one number
- must contain at least one special character

One possible solution is to use to constants to validate the password:

```js
const letters = 'aáàbcçdeéèfghiíìjklmnñoóòppqrstuúüùvwxyz';
const numbers = '0123456789';
```

Add JEST Unit Tests to validate your code

## SUGGESTIONS

- Try to use as many theoretical concepts as possible. *The exercises are tasks to practice what you have learn.*
- Don't use languages structures/concepts that you have not covered yet in the course.

## DELIVERABLES

- <span style="color: tomato;">You must just push your changes to your course's github repository;</span> that's all as I already have a clone of your repository. I will pull your changes as soon as you complete the activity, and I will grade it.
- <span style="color: tomato;">To PASS you need to deliver the exercise</span> (no matter if they work or not).
