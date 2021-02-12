/* eslint-disable strict */
const resetBtn = document.querySelector(".js-reset");
const form = document.querySelector(".js-form");
const logoListItems = document.querySelectorAll(".js-logo-list");

function handleReset() {
  form.reset();
  profileImage.removeAttribute("style");
  profilePreview.removeAttribute("style");
  for (const logoListItem of logoListItems) {
    logoListItem.classList.add("hidden");
  }
  updateAllInputs();
  localStorage.removeItem("userData");
}

resetBtn.addEventListener("click", handleReset);
