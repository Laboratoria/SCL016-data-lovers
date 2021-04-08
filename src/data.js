// estas funciones son de ejemplo
import data from './data/pokemon/pokemon.js'

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};




// buscar Pokemon
const sbmt = document.getElementById("submitButton");

const searchFunction = () => {
  let searchValue = document.getElementById("search").value;
  let pokemonSearch = data.pokemon.filter(x => x.name.includes(searchValue));


  for (let i = 0; i < pokemonSearch.length; i++) {
    let images = document.createElement("img");
    images.src = pokemonSearch[i].img;
    //  let page3_0 = document.querySelector(".page3");
    info.appendChild(images);
    let figcaption1 = document.createElement("figcaption");
    figcaption1.innerHTML = pokemonSearch[i].num + " " + pokemonSearch[i].name;
    // let page3_1 = document.querySelector(".page3");
    info.appendChild(figcaption1);
  }
}

sbmt.addEventListener("click", searchFunction);



// seleccinar tipo de pokemón
const steelPokemon = document.getElementById("steelButton");
  const waterPokemon = document.getElementById("waterButton");
  const bugPokemon = document.getElementById("bugButton");
  const electricPokemon = document.getElementById("electricButton");
  const ghostPokemon = document.getElementById("ghostButton");
  const firePokemon = document.getElementById("fireButton");
  const fairyPokemon = document.getElementById("fairyButton");
  const icePokemon = document.getElementById("iceButton");
  const fightingPokemon = document.getElementById("fightingButton");
  const normalPokemon = document.getElementById("normalButton");
  const grassPokemon = document.getElementById("grassButton");
  const psychicPokemon = document.getElementById("psychicButton");
  const rockPokemon = document.getElementById("rockButton");
  const darkPokemon = document.getElementById("darkButton");
  const groundPokemon = document.getElementById("groundButton");
  const poisonPokemon = document.getElementById("poisonButton");
  const flyingPokemon = document.getElementById("flyingButton");

  const typeFunction = (e) => {
    let buttonValue = e.target.value
    let pokemonType = data.pokemon.filter(x => x.type.includes(buttonValue));

    // console.log(buttonValue)    
    // console.log(pokemonType)

    for (let i = 0; i < pokemonType.length; i++) {
      let images = document.createElement("img");
      images.src = pokemonType[i].img;
      //  let page3_0 = document.querySelector(".page3");
      info.appendChild(images);
      let figcaption1 = document.createElement("figcaption");
      figcaption1.innerHTML = pokemonType[i].num + " " + pokemonType[i].name;
      // let page3_1 = document.querySelector(".page3");
      info.appendChild(figcaption1);

    }

    document.getElementById("title").innerHTML = buttonValue;
  }

steelPokemon.addEventListener("click", typeFunction);
  waterPokemon.addEventListener("click", typeFunction);
  bugPokemon.addEventListener("click", typeFunction);
  electricPokemon.addEventListener("click", typeFunction);
  ghostPokemon.addEventListener("click", typeFunction);
  firePokemon.addEventListener("click", typeFunction);
  fairyPokemon.addEventListener("click", typeFunction);
  icePokemon.addEventListener("click", typeFunction);
  fightingPokemon.addEventListener("click", typeFunction);
  normalPokemon.addEventListener("click", typeFunction);
  grassPokemon.addEventListener("click", typeFunction);
  psychicPokemon.addEventListener("click", typeFunction);
  rockPokemon.addEventListener("click", typeFunction);
  darkPokemon.addEventListener("click", typeFunction);
  groundPokemon.addEventListener("click", typeFunction);
  poisonPokemon.addEventListener("click", typeFunction);
  flyingPokemon.addEventListener("click", typeFunction);

