# TU22. Exercises

## PRE-REQUIREMENTS

- Create a folder in your course git repository called **tu22** inside the docs folder.

## REQUIREMENTS

- Exercises must run out of the browser, with node.
- Write DRY code (DRY stands for: Don't Repeat Yourself)
- <span style="color: tomato;">**Don't validate**</span> your software using JEST.

### EXERCISE 1

Create a function `clear(elem)` that removes everything from the element.

```html
<ol id="elem">
	<li>Hello</li>
	<li>World</li>
</ol>

<script>
	function clear(elem) {
		/* your code */
	}

	clear(elem); // clears the list
</script>
```

### EXERCISE 2: Your personal movie database

Using the code provided: [exercise2.zip](https://github.com/Emanuel-21-22/dwec2021-Emanuel-Ciotoi/files/8214154/ex2.zip)


Write an application to add and remove movies.

When you click ADD MOVIE:

- The modal to add videos will be shown (by adding the visible class to it).
- And you will add the class visible to the backdrop element in the HTML page

While Adding the Movie:

- Any click in the backdrop area (outside the modal) will close the modal
- A click to the cancel button will close the modal also

Closing the modal means:

- Reset the input fields
- Make the backdrop invisible
- Make the modal invisible

Adding and removing Movies:

- To Add a movie, just full fill the title of the movie and add a rating. A rating is a number between 1 and 5.
- Once you add a movie, the initial message: "Your personal movie database!" will disappear.
- You can add several movies.
- To remove a movie, just click on it.
- If you end up without having any movie, the initial message will be shown again: "Your personal movie database!"

See the application in action [in this video](https://user-images.githubusercontent.com/36056518/157557332-19c73a26-4b32-4212-a3ac-13c69bcb072c.mp4).

HELP: When you add a movie, this is the HTML that will be in the `<li>` tag

```html
<div class="movie-element__info">
	<h2>XX</h2>
	<p>3/5 stars</p>
</div>
```

And the LI itself must has the class: movie-element

## SUGGESTIONS

- Try to use as many theoretical concepts as possible. _The exercises are tasks to practice what you have learn._
- Don't use languages structures/concepts that you have not covered yet in the course.

## DELIVERABLES

- <span style="color: tomato;">You must just push your changes to your course's github repository;</span> that's all as I already have a clone of your repository. I will pull your changes as soon as you complete the activity, and I will grade it.
- <span style="color: tomato;">To PASS you need to deliver all the exercises</span> (no matter if they work or not).
