Acceptance Criteria
- Presented with a Start button that renders a question when clicked
- Timer is triggered by Start button
- Rendered question has incorrect options and one correct option
- If you click the correct option, then points are added and the next question is rendered. The timer continues moving
- If you click an incorrect option, then the timer decreases by a certain amount as a penalty as a penalty and no points are added
- When you run out of questions, or when you run out of time, the game ends and a game over screen renders
- On the game over screen, you can save your intials and score

HTML

1. Start screen with title, rules, start button, timer
2. Question screen container with question text, buttons, timer, fedback based on answer selected
3. End of game container with final score form to enter initials, and a submit button
4. High score page


JS

1. Declare variables to reference DOM elements in your HTML document
    - startquizBtn, startscreenEl, timerEl, highscoreEl
    - question El, questiontitleEl, answerchoicesEl

2. Create an array of objects that hold all questions -- can store this in a separate JS file
    - Answer choices
    - Question text
    - Correct answer

3. Create a startQuiz() function triggered by the startquizBtn
    - Hide start screen
    - Unhide questions screen
    - Starts timer
    - Grab first questions in the array

4. Create a function to getQuestion()
    - Renders title, choices and buttons

5. Create a function to check if an answer is correct
    - If the answer is correct, then move on to the next question
    - If answer is wrong, decrement timer and move on to the next question
    - Keep track of score/points
    - Increment index in array of questions to move on

6. Create a function to end the quiz
    - Hide the questionEl
    - Unhide the end of quiz element
    - Unhide your final score element, form, submit btn, etc.

7. Create functionality to save high scores to localStorage