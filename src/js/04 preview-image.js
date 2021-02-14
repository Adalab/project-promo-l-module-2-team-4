'use strict';

const fr = new FileReader();
const uploadBtn = document.querySelector('.js__profile-trigger');
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');

let photo = '';

function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  photo = fr.result;
  updatePhoto();
  // después de cualquier acción del usuario guardo en el local storage
  saveInLocalStorage();
}

function updatePhoto() {
  const currentPhoto = photo || './assets/images/lee.jpg';
  /*     '//beta.adalab.es/project-promo-l-module-2-team-4/docs/assets/images/lee.jpg'; */
  profilePreview.style.backgroundImage = `url(${currentPhoto})`;
  profileImage.style.backgroundImage = `url(${currentPhoto})`;
}

function fakeFileClick() {
  fileField.click();
}

uploadBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', getImage);
