'use strict';

const linkedinElement = document.querySelector('.js-linkedin');
const linkedinPreviewElement = document.querySelector('.js-preview-linkedin');

const githubElement = document.querySelector('.js-github');
const githubPreviewElement = document.querySelector('.js-preview-github');

function handleLinkedin() {
  const linkedinValue = linkedinElement.value;
  if (linkedinValue === '') {
    linkedinPreviewElement.href = '';
    linkedinPreviewElement.parentNode.classList.add('hidden');
  } else {
    linkedinPreviewElement.href = `https://www.linkedin.com/in/${linkedinValue}/`;
    linkedinPreviewElement.target = '_blank';
    linkedinPreviewElement.title = linkedinValue;
    linkedinPreviewElement.parentNode.classList.remove('hidden');
  }
  saveInLocalStorage();
}

function handleGithub() {
  const githubValue = githubElement.value;
  if (githubValue === '') {
    githubPreviewElement.href = '';
    githubPreviewElement.parentNode.classList.add('hidden');
  } else {
    githubPreviewElement.href = `https://github.com/${githubValue}`;
    githubPreviewElement.target = '_blank';
    githubPreviewElement.title = githubValue;
    githubPreviewElement.parentNode.classList.remove('hidden');
  }
  saveInLocalStorage();
}

linkedinElement.addEventListener('keyup', handleLinkedin);
githubElement.addEventListener('keyup', handleGithub);
