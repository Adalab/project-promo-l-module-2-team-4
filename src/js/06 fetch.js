'use strict';

const createBtn = document.querySelector('.js-create-btn');
const cardResultElement = document.querySelector('.js-card-result');
const linkElement = document.querySelector('.confirm__share--link');
const titleElement = document.querySelector('.confirm__share--title');

function handleCreateBtn(ev) {
  ev.preventDefault();

  const url = 'https://awesome-profile-cards.herokuapp.com/card';
  const data = getUserData();

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success === true) {
        titleElement.innerHTML = 'La tarjeta ha sido creada:';
        linkElement.href = data.cardURL;
        linkElement.innerHTML = data.cardURL;
        cardResultElement.classList.remove('share-hidden');
      } else {
        titleElement.innerHTML = data.error;
        linkElement.href = '';
        linkElement.innerHTML = '';
        cardResultElement.classList.remove('share-hidden');
      }
    });
}

createBtn.addEventListener('click', handleCreateBtn);

function resetLink() {
  cardResultElement.classList.add('share-hidden');
  linkElement.innerHTML = '';
  linkElement.href = '';
}
