const newGame = async (monopoly) => {
  const request = new Request('https://us-central1-js-capstone-backend.cloudfunctions.net/api/');
  await fetch(request, {
    method: 'POST',
    body: JSON.stringify({
      name: monopoly,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
};

const postPlayer = async (playerName, playerScores) => {
  const request = new Request('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ka7z51AKjpHFS098ewC/scores/');
  await fetch(request, {
    method: 'POST',
    body: JSON.stringify({
      username: playerName,
      score: playerScores,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
};

const loadScores = async () => {
  const request = new Request('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ka7z51AKjpHFS098ewC/scores/');
  const response = await fetch(request);
  const data = await response.json();
  const listPlayers = document.querySelector('#list-container');
  listPlayers.innerHTML = '';
  data.result.forEach((e) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${e.username} : </span><span> ${e.score}</span>`;
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
  newGame, postPlayer, loadScores, clearFields,
};