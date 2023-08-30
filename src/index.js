import './style.css';
import {
  newGame, postPlayer, loadScores, clearFields,
} from './modules/api.js';

document.getElementById('refresh').addEventListener('click', (event) => {
  event.preventDefault();
  loadScores();
});

document.getElementById('submit').addEventListener('click', (event) => {
  event.preventDefault();
  const playerName = document.getElementById('name').value;
  const playerScores = document.getElementById('score').value;
  postPlayer(playerName, playerScores);
  clearFields();
});

newGame();