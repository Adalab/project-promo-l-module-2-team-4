'use strict';

const linkedinElement = document.querySelector('.js-linkedin');
const linkedinPreviewElement = document.querySelector('.js-preview-linkedin');

const githubElement = document.querySelector('.js-github');
const githubPreviewElement = document.querySelector('.js-preview-github');

function handleLinkedin(){
  const linkedinValue = linkedinElement.value;
  if (linkedinValue === ''){
    linkedinPreviewElement.href = '';
    console.log(linkedinValue);
  }
  else {
    linkedinPreviewElement.href = linkedinValue;
    linkedinPreviewElement.title = linkedinValue;
  }
}

function handleGithub(){
  const githubValue = githubElement.value;
  if (githubValue === '') {
    githubPreviewElement.href='';
    console.log(githubValue);
  }
  else {
    githubPreviewElement.href= githubValue;
    githubPreviewElement.title= githubValue;
  }

}

linkedinElement.addEventListener('keyup',handleLinkedin);
githubElement.addEventListener('keyup',handleGithub);