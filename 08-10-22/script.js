const button = document.querySelector("button");
const title = document.querySelector("h1");

const getUserDatas = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(response);

  if (response.status === 200) {
    const result = await response.json();
    console.log(result);

    result.forEach((elem, index) => {
      const userName = document.createElement("p");
      title.after(userName);

      userName.innerHTML = 10 - index + ". " + elem.name;
    });

    // const index = Math.floor(Math.random() * 10);
    // const userName = document.createElement("p");
    // title.after(userName);
    // userName.innerHTML = result[index].name;
  }
};

button.addEventListener("click", () => {
  getUserDatas();
});

// const getUserDatas = async () => {
//   console.log(fetch("https://jsonplaceholder.typicode.com/users"));
//   // Der einfachste Weg, eine JSON-Datei einzulesen, ist Javascript fetch (). fetch gibt uns ein Promise. Wir können diese Promise mit then fangen.
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//       console.log(response);

//       if (response.status === 200) {
//         // Es wurde die if Abfrage benutzt, um den Status (http status codes) mit 200 abgefragt. Wenn nicht Fehlercode gleich 200 ist, wird angezeigt, welche Fehlercode vorhanden ist. response.json() ist wieder ein Promise und um diese Promise einzulösen, benutzt man noch ein then().
//         response.json().then((result) => {
//           console.log(result);

//           // In diesem Beispiel ist unser Parameter Result einen  Array. Deswegen haben wir forEach-Schleife benutzt.
//           result.forEach((elem, index) => {
//             // Wenn man durh forEach-Schleife mit dem jeweiligen Element durchgeht, wird jedes Mal ein P-Tag erstellt.
//             const userName = document.createElement("p");
//             // Mit der After Methode kann man ein ausgewähltes Element (userName) nach dem Element(title) positionieren, das die After methode benutzt.
//             title.after(userName);

//             // InnerText füllt die P-Tags, die erstellt wurden, erstens mit der Zahl(10 - index.) und den Elementennamen bzw. Vor- und Nachnamen
//             userName.innerText = 10 - index + ". " + elem.name;
//           });
//         });
//       } else {
//         throw new Error("Seite ist nicht gefunden");
//       }
//     })
//     .catch((error) => console.error(error, "Es gibt einen Error"));
// };

// button.addEventListener("click", getUserDatas);
