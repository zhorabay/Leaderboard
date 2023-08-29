import './style.css';
import Player from './modules/player';
import add from './modules/add.js';

document.getElementById('add').addEventListener('submit', (e) => {
    const name = document.getElementById('name').value;
    const score = document.getElementById('score').value;
  
    const player = new Player(name, score);
    const addScore = new add();
  
    if (name === '' || score === '') {
      addScore.showAlert('Please fill in all fields', 'error');
    } else {
      addScore.addPlayerToList(player);
      addScore.showAlert('Player Added', 'success');
      addScore.clearFields();
    }
    e.preventDefault();
  });