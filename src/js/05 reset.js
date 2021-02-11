const resetBtn = document.querySelector('.js-reset');
const form = document.querySelector('.js-form');

function handleReset() {
  /*     localStorage.removeItem('nombre_variable'); */
  form.reset();
  profileImage.removeAttribute('style');
  profilePreview.removeAttribute('style');
}

resetBtn.addEventListener('click', handleReset);
