const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy",
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img: "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg",
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg",
  },
];

const list = document.querySelectorAll("li");
const images = document.getElementsByTagName("img");
const nameOfBook = document.getElementsByTagName("h2");
const author = document.getElementsByTagName("p");

for (let i = 0; i < books.length; i++) {
  list[i].classList.add("book");
  list[i].style.listStyleType = "none";

  images[i].src = books[i].img;
  images[i].classList.add("book-cover");

  nameOfBook[i].innerText = books[i].title;

  author[i].innerText = books[i].author;

  const footer = document.createElement("footer");
  footer.classList.add("footer");
  list[i].append(footer);

  const button = document.createElement("button");
  button.classList.add("button");
  footer.append(button);

  books[i].alreadyRead
    ? (button.innerText = "gelesen")
    : (button.innerText = "ungelesen");
}
