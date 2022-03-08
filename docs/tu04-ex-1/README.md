# TU04. Exercise

## PRE-REQUIREMENTS

- Create a folder in your course git repository called **tu04-ex-1** inside the *docs* folder. Use the folder: ***tu04***, as a template to create your exercise directory.
- I provide you with a github repository. You can use the files on it.
  - Repository Links
    - HTTPS: <https://github.com/iesme-daw2021/exercises-templates.git>
    - SSH: [git@github.com:iesme-daw2021/exercises-templates.git](git@github.com:iesme-daw2021/exercises-templates.git)
  - There is an index.html file in the root folder, that can replace your index.html in your *docs* folder
  - There is a css folder that you can place inside your ***docs*** folder
  - And there is a **tu04** folder with a index.html and a javascript file that you can copy into your ***docs/tu04*** directory and use it to develop the exercise

## REQUIREMENTS

- You must develop a "guess the number" game
- The program will calculate a number between 1 and 100.
  - To calculate that number, you use the following javascript sentence:
    - `parseInt(Math.random() * 100) + 1;`
- Once calculated, it will ask the user for a number
- If the user enters something different that a number between the expected range (even something that is not a number), the program will alert the user and it will ask a number again
- It the number provided by the user is valid, then the program will find out if the number is exactly the calculated number. If that is the case, the program will response to the user that he guessed the number, and the program will inform about the number of tries. After that the program will ask the user if he wants to start a new game or just finish it.
- In case the number is higher or lower than the number calculated, the program will inform the user and will ask him for a new try.
- If any of the questions performed by the game are cancelled, the game ends with a console message.

## SUGGESTIONS

- Try to use as many theoretical concepts as possible. *The exercises are tasks to practice what you have learnt.*
- It is a good practice to not hard coded values that can parametrize your software, for instance:
  - Your program should be flexible enough to allow changes to the number ranges to guess (ex: from 5 to 1000) without effort.
- It is convenient to add some comments to the code explaining the more important snippets (pieces of code).
  - Don't add too many comments. It could be overwhelming.
- Don't use languages structures/concepts that you have not covered yet in the course.

## DELIVERABLES

- <span style="color: tomato;">You must just push your changes to your course's github repository;</span> that's all as I already have a clone of your repository. I will pull your changes as soon as you complete the activity, and I will grade it.
