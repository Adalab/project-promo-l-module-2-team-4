/* eslint-disable strict */
const resetBtn = document.querySelector('.js-reset');
const form = document.querySelector('.js-form');
const logoListItems = document.querySelectorAll('.js-logo-list');

function handleReset() {
  form.reset();
  profileImage.removeAttribute('style');
  profilePreview.removeAttribute('style');
  const paletteElements = document.querySelectorAll('.js_palette-select');
  for (const paletteElement of paletteElements) {
    if (paletteElement.value === '1') {
      paletteElement.checked = true;
    }
  }

  for (const logoListItem of logoListItems) {
    logoListItem.classList.add('hidden');
  }
  updateAllInputs();
  handlePalette();
  resetLink();
  localStorage.removeItem('userData');
}

resetBtn.addEventListener('click', handleReset);
