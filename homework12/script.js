const url = 'https://swapi.dev/api/films/';
const planets = 'https://swapi.dev/api/planets/';
const moviePosters = {
  0: "https://m.media-amazon.com/images/I/61Iz7Pp61NL._AC_SL1000_.jpg",
  1: "https://m.media-amazon.com/images/I/81mvuUktR8L._AC_SL1500_.jpg",
  2: "https://m.media-amazon.com/images/I/61c7U8DqV3L._AC_UF894,1000_QL80_.jpg",
  3: "https://m.media-amazon.com/images/I/81GZ4nVrz-L._AC_SL1500_.jpg",
  4: "https://m.media-amazon.com/images/I/91GEq49gaQL._AC_SL1500_.jpg",
  5: "https://m.media-amazon.com/images/I/61jCCwfO6HL._AC_SL1000_.jpg",
};
let backButton = document.querySelector('.js-btn-back');
let filmsHolder = document.querySelector('.js-fetch-films');
let personage = document.querySelector('.js-show-characters');
let planetsHolder = document.querySelector('.js-fetch-planets');


backButton.addEventListener('click', function () {
  filmsHolder.style.display = "flex";
  planetsHolder.style.display = "flex";
  document.querySelector('.planets').style.display = "flex";
  personage.style.display = "none";
  backButton.style.display = "none";
})

fetch(url).then((response) => {
    return response.json();
}).then((response) => {
  getFilms(response);
  fetchPlanets(planets);
  document.querySelector('.planets').classList.remove('inactive')
}).catch(err => console.log(err));

  
let arrOfChars = [];
function getFilms(response) {
    response.results.forEach((elem, index) => {
        arrOfChars.push(elem.characters)
        let card = document.createElement('div');
        card.classList.add('films-card');
        card.innerHTML = `<div class="films-card__wrapper"><div class="films-card__title" >
        <span>Episode ${elem.episode_id}. </span>${elem.title}</div>
        <img class="films-card__poster" src="${moviePosters[index]}" alt="">
        <div class="films-card__release">Date of release ${elem.release_date}</div>
        <button onclick="getCharacters(${index}, '${elem.title}')" class="js-get-info films-card__button">Get info</button></div>`
        filmsHolder.appendChild(card);
    }); 
}

function getCharacters(chars, title) {
  filmsHolder.style.display = "none";
  planetsHolder.style.display = "none";
  document.querySelector('.planets').style.display = "none";
    personage.style.display = "flex";
    backButton.style.display = "flex";
    personage.innerHTML = `<p>${title}</p>`;
    arrOfChars[chars].forEach(elem => {
       fetch(elem).then((response) => {
    return response.json();
  }).then((response) => {
    showCharacters(response);
  })
  .catch(err => console.log(err)); 
    })
}

function showCharacters(character) {
        let card = document.createElement('div');
        card.classList.add('characters-card');
        card.innerHTML = `<div class="characters-card__title" >${character.name}</div>
        <div class="characters-card__release"> Year of birth ${character.birth_year}</div>
        <div class="characters-card__gender"> ${character.gender}</div>`
        personage.appendChild(card);
}

let arrOfPlanets = [];
let nextPlanets = "";
let prevPlanets = "";


function getPlanets(response) {
  planetsHolder.innerHTML = "";
  nextPlanets = response.next;
  prevPlanets = response.previous;
  response.results.forEach((elem) => {
    arrOfPlanets.push(elem.name);
    let listOfPlanets = document.createElement('div');
    listOfPlanets.classList.add('planets-list');
    listOfPlanets.innerHTML = `<div class="planets-list__name">${elem.name}</div>`
    planetsHolder.appendChild(listOfPlanets);
    })
}

let prevButton = document.querySelector('.js-planets-prev');
let nextButton = document.querySelector('.js-planets-next');
nextButton.addEventListener('click', () => {
  if (prevButton.classList.contains('disable')) {
    prevButton.classList.remove('disable')
  }
  if (nextPlanets !== null) {
    fetchPlanets(nextPlanets);
  } else {
    nextButton.classList.add('disable');
  }
  console.log(nextPlanets);
})

prevButton.addEventListener('click', () => {
  if (nextButton.classList.contains('disable')) {
    nextButton.classList.remove('disable')
  }
  if (prevPlanets !== null) {
    fetchPlanets(prevPlanets);
  } else {
    prevButton.classList.add('disable');
  }
})
async function fetchPlanets(link) {
  await fetch(link).then((response) => {
    return response.json();
  }).then((response) => {
    getPlanets(response);
  })
}
