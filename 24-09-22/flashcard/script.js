const button = document.querySelector(".button");
const answer = document.querySelector(".answer");

button.addEventListener("click", () => {
  answer.classList.toggle("hidden");
});
