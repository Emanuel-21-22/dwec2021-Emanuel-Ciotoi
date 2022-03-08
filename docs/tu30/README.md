# TU30. Exercises

## PRE-REQUIREMENTS

- Create a folder in your course git repository called **tu30** inside the docs folder.

## REQUIREMENTS

- Exercises must run out of the browser, with node.
- Write DRY code (DRY stands for: Don't Repeat Yourself)
- <span style="color: tomato;">**Don't validate**</span> your software using JEST.

### EXERCISE 1

Create web page with a:

- Input
- ADD MORE button.
- RETRIEVE button

In the input field the user will enter github users (just one)

With ADD MORE, the page will add more inputs to add more github users.

When clicking the RETRIEVE button a loading text will appear. Meanwhile your code will retrieve a list of github users based on the inputs fulfilled by the user. Once all retrieved, the loading text will disappear and the list of users will be shown (just show user.name).

Do the exercise separating UI and Business requirements.

The GitHub url with user information for the given `USERNAME` is: <https://api.github.com/users/USERNAME>.

There should be one `fetch` request per user.

#### ADVANCED REQUIREMENTS (OPTIONAL)

- After clicking RETRIEVE, the requests shouldn’t wait for each other. So that the data arrives as soon as possible.
- If any request fails, or if there’s no such user, nothing will be shown in the screen ("loading" will be removed)

## SUGGESTIONS

- Try to use as many theoretical concepts as possible. _The exercises are tasks to practice what you have learn._
- Don't use languages structures/concepts that you have not covered yet in the course.

## DELIVERABLES

- <span style="color: tomato;">You must just push your changes to your course's github repository;</span> that's all as I already have a clone of your repository. I will pull your changes as soon as you complete the activity, and I will grade it.
- <span style="color: tomato;">To PASS you need to deliver all the exercises</span> (no matter if they work or not).
