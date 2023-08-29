export default class add {
    addPlayerToList(player) {
        const list = document.getElementById('list-container');
        const onePlayer = document.createElement('li');
        onePlayer.innerHTML = `<li>${player.name}: ${player.score}</li>`;
        list.appendChild(onePlayer);
      }
    
      showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
    
        const container = document.querySelector('.column-2');
        const form = document.querySelector('.add');
    
        container.insertBefore(div, form);
    
        setTimeout(() => {
          document.querySelector('.alert').remove();
        }, 2000);
      }
    
      clearFields() {
        document.getElementById('name').value = '';
        document.getElementById('score').value = '';
      }
    }
        