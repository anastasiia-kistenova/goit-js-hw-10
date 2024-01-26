const form = document.querySelector(".feedback-form");
const input = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = "feedback-form-state";

const savedData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
input.value = savedData.email || "";
textarea.value = savedData.message || "";

form.addEventListener("input", (evt) => {

  const trimmedEmail = input.value.trim();
  const trimmedMessage = textarea.value.trim();

  const formData = {
    email: input.value,
    message: textarea.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (evt) => {

const trimmedEmail = input.value.trim();
  const trimmedMessage = textarea.value.trim();

  if (input.value.trim() === "" || textarea.value.trim() === "") {
    return;
  }
  evt.preventDefault();

  const formData = {
      email: input.value,
      message: textarea.value,
    };
    console.log(formData);
  
    localStorage.removeItem(localStorageKey);
  
    form.reset();
    
  });






