// estas funciones son de ejemplo
import data from './data/pokemon/pokemon.js'
export const example = () => {
  return 'example';
};
export const anotherExample = () => {
  return 'OMG';
};



// buscar Pokemon y cambio a página 4
const sbmt = document.getElementById("submitButton");
const info =  document.getElementById("info");
const selectPokemon= () => {
  
  document.querySelector(".page3").style.display = "none";
  document.querySelector(".page4").style.display = "block";
  // info.innerHTML = "";
  // title.innerHTML = "";
  }

const searchFunction = () => {
  let searchValue = document.getElementById("search").value;
  let pokemonSearch = data.pokemon.filter(x => x.name.includes(searchValue));
  for (let i = 0; i < pokemonSearch.length; i++) {
    let images = document.createElement("img");
    images.src = pokemonSearch[i].img;
    images.classList.add("select");
    images.setAttribute("id", "select"+i);
    images.addEventListener("click", selectPokemon);
    console.log(images)
    info.appendChild(images);
    let figcaption1 = document.createElement("figcaption");
    figcaption1.innerHTML = pokemonSearch[i].num + " " + pokemonSearch[i].name;
    figcaption1.setAttribute("id", "select"+i);
    figcaption1.addEventListener("click", selectPokemon);
    info.appendChild(figcaption1);
  }
}

sbmt.addEventListener("click", searchFunction);



// seleccinar tipo de pokemón y cambio a página 4
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
    //Paso 1: filtrar pokemon por tipo incluyendo varios tipos
    let pokemonType = data.pokemon.filter(x => x.type.includes(buttonValue));
    //Paso 2: recorre pokemones filtrados y por cada uno crea imagen y texto

    // console.log(buttonValue)    
    // console.log(pokemonType)

    for (let i = 0; i < pokemonType.length; i++) {
  
      let images = document.createElement("img");
      images.src = pokemonType[i].img;
      images.setAttribute("id", "select"+i);
      images.addEventListener("click", selectPokemon);
      //Paso 3: Mostrar imagen
      info.appendChild(images);
      let figcaption1 = document.createElement("figcaption");
      figcaption1.innerHTML = pokemonType[i].num + " " + pokemonType[i].name;
      figcaption1.setAttribute("id", "select"+i);
      figcaption1.addEventListener("click", selectPokemon);
      //Paso 4: mostrar texto
      info.appendChild(figcaption1);

    }

// Paso 5: mostrar título
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

//ordenar pokemon de a-z y a cambio página 4
const order = document.getElementById("order1Button");
const orderFunction = () => {
let orderPokemon = data.pokemon.sort((a, z) => {
  return (a.name < z.name) ? - 1 : 1
});
let title1 = document.createTextNode("Ordenados de A - Z");
info.appendChild(title1);
 
for (let i = 0; i < orderPokemon.length; i++) {
  
      let images = document.createElement("img");
      images.src = orderPokemon[i].img;
      images.setAttribute("id", "select"+i);
      images.addEventListener("click", selectPokemon);
      info.appendChild(images);
      let figcaption1 = document.createElement("figcaption");
      figcaption1.innerHTML = orderPokemon[i].num + " " + orderPokemon[i].name;
      figcaption1.setAttribute("id", "select"+i);
      figcaption1.addEventListener("click", selectPokemon);
      info.appendChild(figcaption1);
    }
  
// console.log(orderPokemon)
 }

order.addEventListener("click",orderFunction);

  //ordenar pokemon de z - a y cambio a página 4
  const order2 = document.getElementById("order2Button");
  const orderFunction2 = () => {
  let orderPokemon = data.pokemon.sort((z, a) => {
    return (z.name > a.name) ? - 1 : 1
  });
  let title2 = document.createTextNode("Ordenados de Z - A");
  info.appendChild(title2);
  for (let i = 0; i < orderPokemon.length; i++) {
        let images = document.createElement("img");
        images.src = orderPokemon[i].img;
        images.setAttribute("id", "select"+i);
        images.addEventListener("click", selectPokemon);
        info.appendChild(images);
        let figcaption1 = document.createElement("figcaption");
        figcaption1.innerHTML = orderPokemon[i].num + " " + orderPokemon[i].name;
        figcaption1.setAttribute("id", "select"+i);
        figcaption1.addEventListener("click", selectPokemon);
        info.appendChild(figcaption1);
      }
    
  // console.log(orderPokemon)
   }
  
  order2.addEventListener("click",orderFunction2);

  