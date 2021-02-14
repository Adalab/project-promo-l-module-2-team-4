"use strict";

const createBtn = document.querySelector(".js-create-btn");
const cardResultElement = document.querySelector(".js-card-result");
const linkElement = document.querySelector(".confirm__share--link");

function handleCreateBtn(ev) {
  ev.preventDefault();
  console.log("Mis datos", getUserData());

  const url = "https://awesome-profile-cards.herokuapp.com/card";
  const data = getUserData();

  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Server response:", data);
      if (data.success === true) {
        linkElement.href = data.cardURL;
        linkElement.innerHTML = data.cardURL;
        cardResultElement.classList.remove("share-hidden");
      } else {
        cardResultElement.innerHTML = data.error;
        cardResultElement.classList.remove("share-hidden");
      }
    });
}

createBtn.addEventListener("click", handleCreateBtn);
