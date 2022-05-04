document.addEventListener("DOMContentLoaded", (e) => {
  console.log(e);
  generator();
  board();
});

// Declaration de variable

const playerLivesCount = document.querySelector("span");
const playerLives = 10;

// Nombre de vie dans le jeux

playerLivesCount.textContent = playerLives;

let contentCard = [];

// EventListener

// Function

const generator = () => {
  let getPic = [
    {
      picture: "/img/beatles.jpeg",
      name: "beatles",
    },
    {
      picture: "./img/blink182.jpeg",
      name: "blink",
    },
    {
      picture: "/img/card.jpeg",
      name: "beatles",
    },
    {
      picture: "/img/fkatwigs.jpeg",
      name: "fka twigs",
    },
    {
      picture: "/img/fleetwood.jpeg",
      name: "fleetwood",
    },
    {
      picture: "/img/joy-division.jpeg",
      name: "joy division",
    },
    {
      picture: "/img/ledzep.jpeg",
      name: "ledzep",
    },
    {
      picture: "/img/metallica.jpeg",
      name: "metallica",
    },
    {
      picture: "/img/pinkfloyd.jpeg",
      name: "pinkfloyd",
    },
    {
      picture: "/img/beatles.jpeg",
      name: "beatles",
    },
    {
      picture: "/img/blink182.jpeg",
      name: "blink",
    },
    {
      picture: "/img/card.jpeg",
      name: "beatles",
    },
    {
      picture: "/img/fkatwigs.jpeg",
      name: "fka twigs",
    },
    {
      picture: "/img/fleetwood.jpeg",
      name: "fleetwood",
    },
    {
      picture: "/img/joy-division.jpeg",
      name: "joy division",
    },
    {
      picture: "/img/ledzep.jpeg",
      name: "ledzep",
    },
    {
      picture: "/img/metallica.jpeg",
      name: "metallica",
    },
    {
      picture: "/img/pinkfloyd.jpeg",
      name: "pinkfloyd",
    },
  ];
  getPic.sort(() => Math.random() - 0.5);

  getPic.forEach((item) => {
    const section = document.querySelector("section");
    const card = document.createElement("div");
    card.classList = "card";

    card.setAttribute("id", item.id);
    card.setAttribu; //Run our flip animationte("name", item.name);

    const face = document.createElement("img");
    face.classList = "face";
    face.src = item.picture;

    const back = document.createElement("div");
    back.classList = "back";

    // Lié les carte à la section

    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      console.log(e);

      face.classList.toggle("toggleCard");
      card.classList.toggle("toggleCard");
    });
  });
};

const board = () => {
  console.log("i will fight you");
};

// Generator Card

// Generer html
