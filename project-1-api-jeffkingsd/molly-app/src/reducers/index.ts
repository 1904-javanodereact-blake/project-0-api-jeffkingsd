import { combineReducers } from "redux";
import { clickerReducer } from "./clicker.reducer";
import { chuckNorrisReducer } from "./chuck-norris.reducer";
import { PokemonReducer } from "./pokemon.reducer";
import { User } from "../model/user";
import { authReducer } from "./auth.reducer";
import { claimReducer } from "./claim.reducer";

export interface IAuthState {
  currentUser?: User,
  errorMessage?: string
}

export interface IClaimState {
  displayMessage?: string
}
export interface IPokemonState {
    name: string,
    id: number,
    img: ''
}
export interface IClickerState {
  clicks: number
}

export interface IChuckNorrisState {
  joke: string,
  proccessingNewJoke: boolean
}

export interface IState {
  clicker: IClickerState,
  chuckNorris: IChuckNorrisState,
  pokemon: IPokemonState,
  auth: IAuthState,
  claim: IClaimState
}

export const state = combineReducers<IState>({
  clicker: clickerReducer,
  chuckNorris: chuckNorrisReducer,
  pokemon: PokemonReducer,
  auth: authReducer,
  claim: claimReducer
})