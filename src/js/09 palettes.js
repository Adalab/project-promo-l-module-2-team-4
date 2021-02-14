'use strict';
// PALETTE INTERACTION:

const paletteInputElement = document.querySelectorAll('.js_palette-select');
const cardPreviewElement = document.querySelector('.js_preview-card');

function handlePalette() {
  cardPreviewElement.classList.remove('palette-1', 'palette-2', 'palette-3');
  let checkedPalette = document.querySelector('.js_palette-select:checked');
  let checkedPaletteValue = checkedPalette.value;
  cardPreviewElement.classList.add('palette-' + checkedPaletteValue);
  saveInLocalStorage();
}

for (const paletteElement of paletteInputElement) {
  paletteElement.addEventListener('change', handlePalette);
}
