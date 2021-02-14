'use strict';

const nameElement = document.querySelector('.js-name');
const namePreviewElement = document.querySelector('.js-preview-name');

const jobElement = document.querySelector('.js-job');
const jobPreviewElement = document.querySelector('.js-preview-job');

const emailElement = document.querySelector('.js-email');
let emailPreviewElement = document.querySelector('.js-preview-email');

const telElement = document.querySelector('.js-tel');
let telPreviewElement = document.querySelector('.js-preview-tel');

function handleName(event) {
  const nameValue = event.target.value;
  if (nameValue === '') {
    namePreviewElement.innerHTML = 'Nombre Apellido';
  } else {
    namePreviewElement.innerHTML = nameValue;
  }
  saveInLocalStorage();
}

function handleJob(event) {
  const jobValue = event.target.value;
  if (jobValue === '') {
    jobPreviewElement.innerHTML = 'Front-End Developer';
  } else {
    jobPreviewElement.innerHTML = jobValue;
  }
  saveInLocalStorage();
}

function handleEmail(event) {
  const emailValue = event.target.value;
  if (emailValue === '') {
    emailPreviewElement.href = '';
    emailPreviewElement.parentNode.classList.add('hidden');
  } else {
    emailPreviewElement.href = `mailto:${emailValue}`;
    emailPreviewElement.title = `mailto:${emailValue}`;
    emailPreviewElement.parentNode.classList.remove('hidden');
  }
  saveInLocalStorage();
}

function handleTel(event) {
  const telValue = event.target.value;
  if (telValue === '') {
    telPreviewElement.href = 'tel:+34 666666666';
    telPreviewElement.parentNode.classList.add('hidden');
  } else {
    telPreviewElement.href = `tel:${telValue}`;
    telPreviewElement.title = `tel:${telValue}`;
    telPreviewElement.parentNode.classList.remove('hidden');
  }
  saveInLocalStorage();
}

nameElement.addEventListener('keyup', handleName);
jobElement.addEventListener('keyup', handleJob);
emailElement.addEventListener('keyup', handleEmail);
telElement.addEventListener('keyup', handleTel);
