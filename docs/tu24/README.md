# TU24. Exercises

## PRE-REQUIREMENTS

- Create a folder in your course git repository called **tu24** inside the docs folder.

## REQUIREMENTS

- Exercises must run out of the browser, with node.
- Write DRY code (DRY stands for: Don't Repeat Yourself)
- <span style="color: tomato;">**Don't validate**</span> your software using JEST.

### EXERCISE 1

Create a web page with a text that advises the visitant to enter ALT+F12. Once the user has entered ALT+F12, the background will change and a new background image will be shown. You can use a random image provided by unsplash: <https://source.unsplash.com/random>

This is what the user will see when entering the webpage for the first time:

![ex1a](https://user-images.githubusercontent.com/36056518/157557951-eab0ce7b-d747-41eb-ae05-8e2cc99fbb1a.png)

And this is what the user will see after pressing ALT+F12

![ex1b](https://user-images.githubusercontent.com/36056518/157558137-5e0f9b7d-6241-4820-af0a-0657a3edf94e.png)


You can use the following HTML code (look at the tu24-ex1 folder):

- SSH: [git@github.com:iesme-daw2021/exercises-templates.git](https://github.com/iesme-daw2021/exercises-templates.git)

- HTTPS: <https://github.com/iesme-daw2021/exercises-templates.git>

### EXERCISE 2

Create a web page that shows two layers of the same size (200px X 100px). The first layer will show a text: "I am draggable" and it will have a yellow background. The second layer will show the text: "I am the destination" and it will have a white background.

![ex2a](https://user-images.githubusercontent.com/36056518/157558176-0899f072-134f-40ec-a84e-3096e9d0724e.png)

The user will be able to drag & drop the first layer into the second layer.

During the drag & drop, the first layer will change its opacity to 50% and when the first layer is over the destination, the secon layer will change its background to red. When the user drops the first layer into the second, the first layer will dissappear and in the second layer the text will change to: "You have achieved it"

![ex2b](https://user-images.githubusercontent.com/36056518/157558205-cfacbdee-b288-463c-8d4c-2b079b4bc9a2.png)
![ex2c](https://user-images.githubusercontent.com/36056518/157558216-64dc4165-5133-497f-8849-ad390e9698f8.png)

You can use the HMTL & CSS files in this repository (folder tu24-ex2). Remember that you must configure an HTML element as draggable to be able to start the process.

- SSH: [git@github.com:iesme-daw2021/exercises-templates.git](https://github.com/iesme-daw2021/exercises-templates.git)
- HTTPS: <https://github.com/iesme-daw2021/exercises-templates.git>

## SUGGESTIONS

- Try to use as many theoretical concepts as possible. _The exercises are tasks to practice what you have learn._
- Don't use languages structures/concepts that you have not covered yet in the course.

## DELIVERABLES

- <span style="color: tomato;">You must just push your changes to your course's github repository;</span> that's all as I already have a clone of your repository. I will pull your changes as soon as you complete the activity, and I will grade it.
- <span style="color: tomato;">To PASS you need to deliver all the exercises</span> (no matter if they work or not).
