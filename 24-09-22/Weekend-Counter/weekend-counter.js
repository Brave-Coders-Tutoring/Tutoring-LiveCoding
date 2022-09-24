const body = document.getElementsByTagName("body");

const mainElement = document.createElement("main");
mainElement.classList.add("main-page");

body[0].append(mainElement);

const container = document.createElement("div");
container.classList.add("container");
mainElement.append(container);

const title = document.createElement("h1");
title.classList.add("title");
title.innerText = "Welcome to Weekend Countdown!";

const paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
paragraph.innerText = "Please enter your name!";

const input = document.createElement("input");
input.classList.add("input");

const button = document.createElement("button");
button.classList.add("button");
button.innerText = "GO!";

container.append(title, paragraph, input, button);

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const date = new Date().getDay();
const today = weekDays[date];
const remainingDay = weekDays.length - 2 - date;

button.addEventListener("click", () => {
  if (today === "Saturday" || today === "Sunday") {
    paragraph.innerText = `Hello ${input.value}. Today is ${today}. It is already weekend.`;
    paragraph.style.color = "black";
  } else {
    paragraph.innerText = `Hello ${
      input.value
    }. Today is ${today}. Only ${remainingDay} day${
      date === 4 ? "" : "s"
    } left until weekend!`;
    paragraph.style.color = "black";
  }
  if (input.value == "") {
    paragraph.innerText = "You didn't type any name!!!";
    paragraph.style.color = "red";
  }
});

const pressEnter = (event) => {
  if (event.code === "Enter") {
    if (today === "Saturday" || today === "Sunday") {
      paragraph.innerText = `Hello ${input.value}. Today is ${today}. It is already weekend.`;
      paragraph.style.color = "black";
    } else {
      paragraph.innerText = `Hello ${
        input.value
      }. Today is ${today}. Only ${remainingDay} day${
        date === 4 ? "" : "s"
      } left until weekend!`;
      paragraph.style.color = "black";
    }
    if (input.value == "") {
      paragraph.innerText = "You didn't type any name!!!";
      paragraph.style.color = "red";
    }
  }
};

const clickInput = () => {
  paragraph.innerText = "Please enter your name!";
  paragraph.style.color = "black";
  input.value = "";
};

input.addEventListener("keypress", pressEnter);
input.addEventListener("click", clickInput);
