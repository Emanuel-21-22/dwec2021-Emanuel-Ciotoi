# TU26. Exercises

## PRE-REQUIREMENTS

- Create a folder in your course git repository called **tu26** inside the docs folder.

## REQUIREMENTS

- Exercises must run out of the browser, with node.
- Write DRY code (DRY stands for: Don't Repeat Yourself)
- <span style="color: tomato;">**Don't validate**</span> your software using JEST.

### EXERCISE 1

Here’s the code with `Rabbit` extending `Animal`.

Unfortunately, `Rabbit` objects can’t be created. What’s wrong? Fix it.

Code:

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    this.name = name;
    this.created = Date.now();
  }
}

let rabbit = new Rabbit('White Rabbit');
console.log(rabbit.name);
```

### EXERCISE 2

We’ve got a `Clock` class. As of now, it prints the time every second.

Code:

```js
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}
```

Create a new class `ExtendedClock` that inherits from `Clock` and adds the parameter `precision` – the number of `ms` between “ticks”.

Don’t modify the original `Clock class`. Extend it.

#### EXTRA REQUIREMENT - ADVANCED

The precision should be `1000` (1 second) by default (in case that is not provided)

## SUGGESTIONS

- Try to use as many theoretical concepts as possible. _The exercises are tasks to practice what you have learn._
- Don't use languages structures/concepts that you have not covered yet in the course.

## DELIVERABLES

- <span style="color: tomato;">You must just push your changes to your course's github repository;</span> that's all as I already have a clone of your repository. I will pull your changes as soon as you complete the activity, and I will grade it.
- <span style="color: tomato;">To PASS you need to deliver all the exercises</span> (no matter if they work or not).
