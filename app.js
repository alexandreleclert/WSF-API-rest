document.addEventListener("DOMContentLoaded", async function() {
    let button = document.getElementById("button");
    let image = document.getElementById("image");
    let Pokernumber = document.getElementById("number");
    let Pokername = document.getElementById("name");
  
    const rollDiceOptions = {
      // ...
    };
  
    const pokemonOptions = {
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/ditto',
    };
  
    let lancerDeDesPourPokemon = async () => {
      try {
        const diceRollResponse = await axios.request(rollDiceOptions);
        console.log('Résultat du lancer de dés :', diceRollResponse.data);
  
        const pokemonResponse = await axios.request(pokemonOptions);
        console.log('Données du Pokemon :', pokemonResponse.data);
  
        const pokemonImageUrl = pokemonResponse.data.sprites.front_default;
        image.innerHTML = `<img src="${pokemonImageUrl}" alt="Image de ${pokemonResponse.data.name}">`;
  
        Pokernumber.textContent = pokemonResponse.data.id;
        Pokername.textContent = pokemonResponse.data.name;
      } catch (error) {
        console.error(error);
      }
    };
  
    button.addEventListener("click", lancerDeDesPourPokemon);
  
    const makeRequests = async () => {
      try {
        const diceRollResponse = await axios.request(rollDiceOptions);
        console.log('Résultat du lancer de dés :', diceRollResponse.data);
  
        const pokemonResponse = await axios.request(pokemonOptions);
        console.log('Données du Pokemon :', pokemonResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    makeRequests();
  
    let requestString = 'https://jsonplaceholder.typicode.com/posts/1';
    let response = await fetch(requestString);
    let data = await response.json();
    console.log(data);
  });
  