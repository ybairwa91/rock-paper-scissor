/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Welcome to Rock,Paper,Scissor Game</h1>
      <Games />
    </div>
  );
}

const games = ["rock", "paper", "scissors"];

function Games() {
  const [name, setName] = useState("");
  const [computerChoice, setComputerChoice] = useState(null);

  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) return "draw";
    else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    )
      return "user";
    else {
      return "computer";
    }
  }

  function handleClick(e) {
    const userChoice = e.target.innerText.toLowerCase();
    const computerChoice = games[Math.floor(Math.random() * 3)];
    setName(userChoice);
    setComputerChoice(computerChoice);

    const result = determineWinner(userChoice, computerChoice);
    if (result === "user") setUserScore((s) => s + 1);
    if (result === "computer") setComputerScore((s) => s + 1);
  }

  return (
    <div>
      <div className="games">
        {games.map((game) => (
          <Game
            game={game}
            key={game}
            name={name}
            setName={setName}
            onClick={handleClick}
          />
        ))}
      </div>

      <div>
        <h2>{`You selected: ${name}`}</h2>

        {computerChoice !== null && (
          <h2>{`Computer chooses:${computerChoice}`}</h2>
        )}

        <p>{`Your score is ${userScore}`}</p>
        <p> {`Computer score is ${computerScore}`}</p>
      </div>
    </div>
  );
}
function Game({ game, onClick }) {
  return (
    <div>
      <button className="button" onClick={onClick}>
        <i className={`fas fa-hand-${game}`} />
        {game}
      </button>
    </div>
  );
}

export default App;
