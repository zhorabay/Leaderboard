import './style.css';
import {
  createNewGame, postPlayer, loadScores, clearFields,
} from './modules/apiRequest.js';

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

createNewGame();