import createCharacterCard from "./components/CharacterCard/CharacterCard.js";

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

fetchCharacters();

async function fetchCharacters() {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
  );
  const data = await response.json();
  const characters = data.results;

  cardContainer.innerHTML = "";

  characters.forEach((character) => {
    const card = createCharacterCard(character);
    cardContainer.append(card);
  });
}

// Alternative version
//
// async function fetchCharacters() {
//   const response = await fetch(
//     `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
//   );
//   const data = await response.json();
//   const characters = data.results;
//
//   cardContainer.innerHTML = "";
//   return characters;
// }

// const characters = await fetchCharacters();

// characters.forEach((character) => {
//   const card = createCharacterCard(character);
//   cardContainer.append(card);
// });
