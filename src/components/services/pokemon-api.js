

const BASE_URL = 'https://pokeapi.co/api/v2';

function PokemonAPI(pokemonName) {   
 return  fetch(`${BASE_URL}/pokemon/${pokemonName}`)
     .then(response => response.json())
}

export default {PokemonAPI};