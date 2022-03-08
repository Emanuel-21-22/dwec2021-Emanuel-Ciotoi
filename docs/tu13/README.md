# TU13. Exercises

## PRE-REQUIREMENTS

- Create a folder in your course git repository called **tu13** inside the docs folder.

## REQUIREMENTS

- Exercises must run out of the browser, with node.
- Write DRY code (DRY stands for: Don't Repeat Yourself)
- Validate your software using JEST.

### EXERCISE 1

Create a JSON file, call it `daw.json`

- The json must have the following attributes:
  - `year`, with value=*2021*
  - `city`, with value=*Gandia*
  - `school`, with value=*IES Maria Enriquez*
  - `active`, with value=*true*
  - `numberOfStudents`, with value=*12*
  - `teacher`, it will be an object with the following properties
    - `name`, with value=*Xavi*
    - `age`, with value=*46*
    - `car`, it will be an object with the following properties
      - `brand`, with value=*Seat*
      - `model`, with value=*Leon*
      - `year`, with value=*2015*
  - `students`, it will be an array of objects. It object will have the following attributes (add 2 students):
    - `name` (string)
    - `age` (number)
    - `male` (boolean)
    - `hobbies` (array of strings, make up 3 hobbies for each student)

Validate the JSON correctness with the online JSON validator: <https://jsonlint.com/>

Then create a javascript file with a function called `transformJson`, that will receive a string. The string will contain a JSON and the function will parse the JSON into an object, then it will:

- Remove the age of the teacher
- Add a 3rd student
- Add a property to the daw json, called: `province`, with value: *Valencia*

Validate the function with JEST tests. Call the function using the JSON built in the first part of the exercise as an argument.

Finally create a `showJSON`, that will receive an object as a parameter, and it will convert the object to string and it will show it in the console.

## SUGGESTIONS

- Try to use as many theoretical concepts as possible. *The exercises are tasks to practice what you have learn.*
- Don't use languages structures/concepts that you have not covered yet in the course.

## DELIVERABLES

- <span style="color: tomato;">You must just push your changes to your course's github repository;</span> that's all as I already have a clone of your repository. I will pull your changes as soon as you complete the activity, and I will grade it.
- <span style="color: tomato;">To PASS you need to deliver the exercise</span> (no matter if they work or not).
