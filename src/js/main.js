"use strict";

const nameElement = document.querySelector(".js-name");
const namePreviewElement = document.querySelector(".js-preview-name");

const emailElement = document.querySelector(".js-email");
let emailPreviewElement = document.querySelector(".js-preview-email");

function handleName(event) {
  const nameValue = event.target.value;
  if (nameValue === "") {
    namePreviewElement.innerHTML = "Nombre Apellido";
  } else {
    namePreviewElement.innerHTML = nameValue;
    console.log(namePreviewElement.innerHTML);
  }
}
function handleEmail(event) {
  const emailValue = event.target.value;
  if (emailValue === "") {
    emailPreviewElement.href = "";
  } else {
    emailPreviewElement.href = `mailto:${emailValue}`;
    emailPreviewElement.title = `mailto:${emailValue}`;
    console.log(emailPreviewElement.href);
  }
}

nameElement.addEventListener("keyup", handleName);
emailElement.addEventListener("keyup", handleEmail);
