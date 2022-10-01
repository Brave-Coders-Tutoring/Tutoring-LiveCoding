const body = document.querySelector("body");
const form = document.querySelector("form");
const colorContainer = document.querySelector(".color-container");

function colorGenerator() {
  let randomColor = "#";
  for (let index = 0; index < 6; index++) {
    const randomNum = Math.floor(Math.random() * 16).toString(16);
    randomColor += randomNum;
  }

  return randomColor;
}

console.log(colorGenerator());

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputOfColorNum = document.querySelector("#color-count");

  // for (let numOfColor = +inputOfColorNum.value; numOfColor > 0; numOfColor--)
  for (let numOfColor = 0; numOfColor < +inputOfColorNum.value; numOfColor++) {
    body.classList.add("body-block");

    const color = document.createElement("div");
    color.classList.add("color");

    const colorName = colorGenerator();

    color.style.backgroundColor = colorName;

    colorContainer.append(color);

    const closeButton = document.createElement("button");
    closeButton.classList.add("close-btn");
    closeButton.innerText = "x";

    color.append(closeButton);

    const hexOfColor = document.createElement("p");
    hexOfColor.classList.add("color-hex");
    hexOfColor.innerText = colorName;

    color.append(hexOfColor);

    closeButton.addEventListener("click", () => {
      color.remove();
    });
  }
  form.reset();
});
