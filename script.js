// Declaration de variable

const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 10;

// Nombre de vie dans le jeux

playerLivesCount.textContent = playerLives;

let contentCard = [];

console.log(section);

// EventListener

// Function

const getPic = () => [
  {
    picture: "./img/beatles.jpeg",
    name: "beatles",
  },
  {
    picture: "./img/blink182.jpeg",
    name: "blink",
  },
  {
    picture: "./img/card.jpeg",
    name: "beatles",
  },
  {
    picture: "./img/fkatwigs.jpeg",
    name: "fka twigs",
  },
  {
    picture: "./img/fleetwood.jpeg",
    name: "fleetwood",
  },
  {
    picture: "./img/joy-division.jpeg",
    name: "joy division",
  },
  {
    picture: "./img/ledzep.jpeg",
    name: "ledzep",
  },
  {
    picture: "./img/metallica.jpeg",
    name: "metallica",
  },
  {
    picture: "./img/pinkfloyd.jpeg",
    name: "pinkfloyd",
  },
  {
    picture: "./img/beatles.jpeg",
    name: "beatles",
  },
  {
    picture: "./img/blink182.jpeg",
    name: "blink",
  },
  {
    picture: "./img/card.jpeg",
    name: "beatles",
  },
  {
    picture: "./img/fkatwigs.jpeg",
    name: "fka twigs",
  },
  {
    picture: "./img/fleetwood.jpeg",
    name: "fleetwood",
  },
  {
    picture: "./img/joy-division.jpeg",
    name: "joy division",
  },
  {
    picture: "./img/ledzep.jpeg",
    name: "ledzep",
  },
  {
    picture: "./img/metallica.jpeg",
    name: "metallica",
  },
  {
    picture: "./img/pinkfloyd.jpeg",
    name: "pinkfloyd",
  },
];

const data = getPic();


// Random data of card


const random = () => {
  const cardData = getPic();
  cardData.sort(() => Math.random() - 0.5);
  console.log(cardData);
};

random();


