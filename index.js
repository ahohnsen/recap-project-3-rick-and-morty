import createCharacterCard from "./components/CharacterCard/CharacterCard.js";
import NavButton from "./components/NavButton/NavButton.js";
import Pagination from "./components/NavPagination/NavPagination.js";
import SearchBar from "./components/SearchBar/SearchBar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector('[data-js="search-bar-container"]');
const navigation = document.querySelector('[data-js="navigation"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

const nextButton = NavButton("next", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters();
  }
});

const prevButton = NavButton("prev", () => {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
});

const pagination = Pagination();

const searchBar = SearchBar((event) => {
  event.preventDefault();
  searchQuery = event.target.elements.query.value;
  page = 1;
  fetchCharacters();
});

navigation.append(prevButton, pagination, nextButton);
searchBarContainer.append(searchBar);

fetchCharacters();

async function fetchCharacters() {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
  );
  const data = await response.json();
  const characters = data.results;

  maxPage = data.info.pages;
  pagination.textContent = `${page} / ${maxPage}`;
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
