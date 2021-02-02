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
    console.log(namePreviewElement.innerHTML);
  } else {
    namePreviewElement.innerHTML = nameValue;
  }
}

function handleJob(event) {
  const jobValue = event.target.value;
  if (jobValue === '') {
    jobPreviewElement.innerHTML = 'Front-End Developer';
  } else {
    jobPreviewElement.innerHTML = jobValue;
  }
}

function handleEmail(event) {
  const emailValue = event.target.value;
  if (emailValue === '') {
    emailPreviewElement.href = '';
  } else {
    emailPreviewElement.href = `mailto:${emailValue}`;
    emailPreviewElement.title = `mailto:${emailValue}`;
    console.log(emailPreviewElement.href);
  }
}

function handleTel(event) {
  const telValue = event.target.value;
  console.log(telValue);
  if (telValue === '') {
    console.log(telValue);
    telPreviewElement.href = 'tel:+34 666666666';
  } else {
    console.log(telValue);
    telPreviewElement.href = `tel:${telValue}`;
    telPreviewElement.title = `tel:${telValue}`;
    console.log(telPreviewElement.href);
  }
}

nameElement.addEventListener('keyup', handleName);
jobElement.addEventListener('keyup', handleJob);
emailElement.addEventListener('keyup', handleEmail);
telElement.addEventListener('keyup', handleTel);
