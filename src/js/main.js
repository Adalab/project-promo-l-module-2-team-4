"use strict";

const nameElement = document.querySelector(".js-name");
const namePreviewElement = document.querySelector(".js-preview-name");

const emailElement = document.querySelector(".js-email");
let emailPreviewElement = document.querySelector(".js-preview-email");

function handleName(event) {
  console.log("entra en 1");
  const nameValue = event.target.value;
  console.log(nameValue);
  if (nameValue === "") {
    namePreviewElement.innerHTML = "Nombre Apellido";
  } else {
    namePreviewElement.innerHTML = nameValue;
    console.log("ha entrado en else");
  }
}
function handleEmail(event) {
  console.log("entra en 2");
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


// PALETTE INTERACTION:

const paletteInputElement = document.querySelectorAll('.js_palette-select');
const cardPreviewElement = document.querySelector('.js_preview-card');

function handlePalette(){
  cardPreviewElement.classList.remove('palette-1', 'palette-2', 'palette-3');
  let checkedPalette = document.querySelector('.js_palette-select:checked');
  let checkedPaletteValue = checkedPalette.value;
  cardPreviewElement.classList.add('palette-' + checkedPaletteValue);
}

for (const paletteElement of paletteInputElement) {
  paletteElement.addEventListener('change', handlePalette);
}
handlePalette();