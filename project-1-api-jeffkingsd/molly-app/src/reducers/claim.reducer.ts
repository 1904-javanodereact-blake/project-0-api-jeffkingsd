import { IClaimState } from ".";
import { claimTypes } from "../actions/claim.actions";


const initialState: IClaimState = {
    displayMessage: undefined
}

export const claimReducer = (state = initialState, action) => {

  switch (action.type) {
    case claimTypes.CLAIM_UPDATE:
      return {
        ...state,
        displayMessage: 'Insertation has succedded'
      }  
    case claimTypes.FAILED_UPDATE: 
      return {
        ...state,
        displayMessage: 'Insertation has failed'
      }
    default:
  }
  return state;
}