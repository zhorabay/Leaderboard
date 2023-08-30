const createNewGame = async () => {
  const request = new Request('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games');
  await fetch(request, {
    method: 'POST',
    body: JSON.stringify({
      name: 'Monopoly',
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
};

const postPlayer = async (playerName, playerScores) => {
  const request = new Request('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/rGp2reoqk4GMj6QaC1QY/scores/');
  await fetch(request, {
    method: 'POST',
    body: JSON.stringify({
      user: playerName,
      score: playerScores,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
};

const loadScores = async () => {
  const request = new Request('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/rGp2reoqk4GMj6QaC1QY/scores/');
  const response = await fetch(request);
  const data = await response.json();
  data.result.sort((a, b) => b.score - a.score);
  const listPlayers = document.querySelector('#list-container');
  listPlayers.innerHTML = '';
  data.result.forEach((e) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${e.user} : </span><span> ${e.score}</span>`;
    listPlayers.appendChild(li);
  });
};

const clearFields = () => {
  const clear = document.querySelectorAll('input');
  clear.forEach((e) => {
    e.value = '';
  });
};

export {
  createNewGame, postPlayer, loadScores, clearFields,
};