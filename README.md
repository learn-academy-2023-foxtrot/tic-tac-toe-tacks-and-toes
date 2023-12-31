# ❌ ⭕️ Tic Tac Toe

#### Overview

Tic Tac Toe is a classic children's game involving two players alternatively marking squares on a three-by-three grid. While the game play can be considered relatively simple for humans, creating the logic in code is considerably more challenging.

#### Learning Objectives

- can create a logic component to handle the game play
- can pass data and behavior from a parent component to a nested component with props
- can effectively work within a team to achieve a desired outcome

#### Additional Resources

- [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Render](https://render.com/docs/deploy-create-react-app)

#### Process

- One person on the team accepts the group assignment from GitHub classroom
- Create a team name
- Add additional team members via GitHub handle
- Clone the newly created repository
- `cd` into the repository
- Run $ `yarn` to install the React dependencies
- Create a new branch following the naming instructions described below
- Open the repository in a text editor
- Code!

#### Useful Commands

- $ `yarn start`
- control + c (stops the server)
- command + t (opens a new terminal tab)

#### Troubleshooting Tips

- Is your server running?
- Are your components exported?
- Inspect the page and look for errors in the console tab.
- Always look at the first error message in the list.

---

### Tic Tac Toe

This is a web game for two players who are taking turns on one device. You will have to use the component state to keep track of whose turn it is and which squares have been marked by each player. This project will challenge your knowledge of React as well as be an exercise in creating good user experiences.

When creating a project, it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The square UI will be in its own component. `App.js` controls of all the data in state, renders the other components, and performs the game logic.

### Win Condition

The win condition is one of the most challenging aspects of coding Tic Tac Toe. Take some time with your team to discuss the different possibilities. It can be helpful to define the logic by writing it out in regular English words.

There is an interesting approach to the [Tic Tac Toe win condition in React](https://forum.freecodecamp.org/t/need-help-understanding-react-tic-tac-toe-winner-function/137840) here. However, this code should NOT be used as is. It must be refactored. The tools used in this example are not current best practices in React. It is provided here as inspiration.

---

### 📚 User Stories
#### branch game board
- As a user, I can see a three by three grid game board on the page.
create component named grid and pass through App.js

- As a user, I can click on a square to mark it.

- As a user, my partner can click on a square after me and see their mark.
- As a user, I can't click on a square that has already been marked.
pseudocode: 
function name : player
input: true
output: a true and false statement switching between each other to switch players and their inputs
process:
create another state to collect the first player(X) input. use setter to 
take the first player who is X and then store it in a state so it can be updated to the O player. all taking place in the player variable with the useState hook
    think battle ship mixed w tic tac toe 
think who and where
const [player, setPlayer] = useState(true)
call on setPlayer to change true for ❌ and false for ⭕️


- As a user, when either my partner or I win the game (three squares in a row: horizontally, vertically, or diagonally), I can see a notice telling me which player won.

input: 
const calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}




- As a user, I can't play the game after the game has been won.
- As a user, if there are no more squares available, I can see a notice telling me that the game has ended.
- As a user, I can click on a restart button that will clear the game board.

### 🏔 Stretch Goals

- As a user, I can see pleasant stylings on the application.
- As a user, I can see a notification that informs me whether it is currently my partner or my turn.
- As a user, I can choose my marker from a predetermined list (X, O, a color, an emoji, etc...).

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).
