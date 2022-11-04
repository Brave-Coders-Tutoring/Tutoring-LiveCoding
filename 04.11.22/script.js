// HTML ELemente auszuwählen mit der Hilfe vom DOM

const firstTitle = document.querySelector("h1");
console.log(firstTitle);
firstTitle.classList.add("first-title");

const title = document.querySelectorAll("h1");
console.log(title);
title.forEach((elem) => elem.classList.add("title"));

const titleWithID = document.getElementById("title");
console.log(titleWithID);

const titleQuerySelector = document.querySelector("#title");
console.log(titleQuerySelector);

const titleWithClass = document.querySelector(".second-title");
console.log(titleWithClass);

const titleGetClassName = document.getElementsByClassName("second-title");
console.log(titleGetClassName);

const allTitles = document.getElementsByTagName("h1");
console.log(allTitles);

// HTML ELemente zu erstellen mit der Hilfe vom DOM
const body = document.querySelector("body");

// const secondTitle = title[1];
const ourList = document.createElement("ul");
title[1].before(ourList);

const listItem1 = document.createElement("li");
ourList.appendChild(listItem1);

const listItem2 = document.createElement("li");
const listItem3 = document.createElement("li");
ourList.append(listItem2, listItem3);

listItem1.innerHTML = "<h3> Hallo Muhannad </h3>";
listItem2.innerText = "<p>Hallo Vaso</p>";
listItem3.textContent = "Hallo Zaid";

// HTML ELemente zu gestalten mit der Hilfe vom DOM
listItem1.style.color = "red";
listItem2.style.fontSize = "2rem";
listItem3.style.fontFamily = "sans";
body.style.backgroundColor = "aliceblue";

// Event beim DOM

const button = document.createElement("button");
title[1].after(button);
button.innerText = "Click me!!!";
button.style.backgroundColor = "blue";
button.style.color = "white";
button.style.display = "block";
button.style.marginBottom = "2rem";

const message = document.createElement("p");
button.before(message);
message.innerText = "You have already clicked";
message.style.fontSize = "1.2rem";
message.style.color = "red";
message.style.opacity = "0";

const clickEvent = () => {
  if (message.style.opacity === "0") {
    message.style.opacity = "1";

    button.innerText = "Already clicked";
    button.style.backgroundColor = "red";
  } else {
    message.style.opacity = "0";
    button.innerText = "Click me";
    button.style.backgroundColor = "blue";
  }
};

button.addEventListener("click", clickEvent);

const nameInput = document.createElement("input");
button.after(nameInput);
const myName = document.createElement("p");
myName.innerText = "Name: ";
nameInput.after(myName);

nameInput.addEventListener("input", (e) => {
  myName.innerText = "Name: " + e.target.value;
});
