import createCharacterCard from "./components/CharacterCard/CharacterCard.js";

const character = {
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  name: "Rick Sanchez",
  status: "Alive",
  type: "",
  episode: "51",
};

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector('[data-js="search-bar-container"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

const card = createCharacterCard(character);

cardContainer.append(card);
