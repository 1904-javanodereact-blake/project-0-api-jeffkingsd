import { IPokemonState } from ".";
import { PokemonTypes } from "../actions/pokemon.actions";

const initialState: IPokemonState = {
  name: '',
  id: 0,
  img: ''
}

export const PokemonReducer = (state = initialState, action) => {

  // This swtich statement will detect an POKEMON UPDATE
  // Return the new action payload to the state to change
  switch (action.type) {
    case PokemonTypes.POKEMON_UPDATE:
      return {
        ...state,
        name: action.payload.name,
        id: action.payload.id,
        img: action.payload.img
  
      }  
    default:
      break;
  }

  return state;
}