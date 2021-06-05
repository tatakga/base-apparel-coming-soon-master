const emailForm = document.querySelector(".hero__form");

function validateEmail(email) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return emailRegex.test(email);
}

function submitEmail(e) {
  e.preventDefault();
  const emailValue = this.querySelector("input").value;
  const errorIcon = this.querySelector(".icon-error");
  if (!emailValue) {
    errorIcon.classList.add("active");
  } else if (!validateEmail(emailValue)) {
    errorIcon.classList.add("active");
  } else {
    errorIcon.classList.remove("active");
    this.reset();
    console.log(emailValue);
  }
}

emailForm.addEventListener("submit", submitEmail);
