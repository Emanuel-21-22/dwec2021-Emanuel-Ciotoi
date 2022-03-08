# TU19 & 20. Exercises

## PRE-REQUIREMENTS

- Create a folder in your course git repository called **tu19-20** inside the docs folder.

## REQUIREMENTS

- Exercises must run out of the browser, with node.
- Write DRY code (DRY stands for: Don't Repeat Yourself)
- <span style="color: tomato;">**Don't validate**</span> your software using JEST.

### EXERCISE 1

Find attached and HTML file: [table.html](https://raw.githubusercontent.com/Emanuel-21-22/dwec2021-Emanuel-Ciotoi/ccf9ef3ef9ae5addd1c0ca53b91f84a5706d5f7b/docs/tu19-20/exercise1.html?token=GHSAT0AAAAAABPCQPPODR44WMVWGDXUAAQEYRHR7HA)

Write a JS file to find:

1. The table with `id="age-table"`.
1. All `label` elements inside that table (there should be 3 of them).
1. The first td in that `table` (with the word “Age”).
1. The `form` with `name="search"`.
1. The first `input` in that form.
1. The last `input` in that form.

### EXERCISE 2

Make all external links orange by altering their `style` property.

A link is external if:

Its `href` has `://` in it

But doesn’t start with <http://internal.com>.

Example:

```html
<a name="list">the list</a>
<ul>
  <li><a href="http://google.com">http://google.com</a></li>
  <li><a href="/tutorial">/tutorial.html</a></li>
  <li><a href="local/path">local/path</a></li>
  <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
  <li><a href="http://nodejs.org">http://nodejs.org</a></li>
  <li><a href="http://internal.com/test">http://internal.com/test</a></li>
</ul>

<script>
  // setting style for a single link
  let link = document.querySelector('a');
  link.style.color = 'orange';
</script>
```

The result should be:

## SUGGESTIONS

- Try to use as many theoretical concepts as possible. _The exercises are tasks to practice what you have learn._
- Don't use languages structures/concepts that you have not covered yet in the course.

## DELIVERABLES

- <span style="color: tomato;">You must just push your changes to your course's github repository;</span> that's all as I already have a clone of your repository. I will pull your changes as soon as you complete the activity, and I will grade it.
- <span style="color: tomato;">To PASS you need to deliver the 2 exercises</span> (no matter if they work or not).
