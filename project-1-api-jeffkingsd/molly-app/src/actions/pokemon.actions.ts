export const PokemonTypes = {
    POKEMON_UPDATE: 'POKEMON_UPDATE'
}
  
  export const buyPoke = () => async (dispatch) => {
    const id = Math.floor(Math.random() * 782);
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
    const body = await resp.json();
    dispatch({
      payload: {
        name: body.name,
        id: body.id,
        img: body.sprites.front_default
      },
        type: PokemonTypes.POKEMON_UPDATE
    });
  }
  
  