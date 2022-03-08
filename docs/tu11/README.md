# TU11. Exercises

## PRE-REQUIREMENTS

- Create a folder in your course git repository called **tu11** inside the docs folder.

## REQUIREMENTS

- Exercises must run out of the browser, with node.
- Write DRY code (DRY stands for: Don't Repeat Yourself)
- Validate your software using JEST.

### EXERCISE 1

Write a function `getWeekDay(date)` to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

For instance:

```js
let date = new Date(2022, 0, 3);  // 3 Jan 2022
alert( getWeekDay(date) );        // should output "MO"
```

### EXERCISE 2

Write a function `getLastDayOfMonth(year, month)` that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.
Parameters:

- ***year*** – four-digits year, for instance 2012.
- ***month*** – month, from 0 to 11.

For instance, `getLastDayOfMonth(2012, 1)` **= 29** (leap year, Feb).

## SUGGESTIONS

- Try to use as many theoretical concepts as possible. *The exercises are tasks to practice what you have learn.*
- Don't use languages structures/concepts that you have not covered yet in the course.

## DELIVERABLES

- <span style="color: tomato;">You must just push your changes to your course's github repository;</span> that's all as I already have a clone of your repository. I will pull your changes as soon as you complete the activity, and I will grade it.
- <span style="color: tomato;">To PASS you need to deliver the 2 exercises</span> (no matter if they work or not).
