import {
  CATEGORIES_GET,
  CATEGORIES_GET_REQUEST,
  CATEGORIES_GET_SUCCESS,
  CATEGORIES_GET_FAILURE,
  LOADING_STATES
} from 'data/constants';

const initialState={
  loadingState:{},
  allCategories:[]
}

function common(state = initialState, action){

  const newLoadingState = {...state.loadingState}

  switch(action.type){
    case CATEGORIES_GET_REQUEST:
      return{
        ...state,
        loadingState:{
          ...state.loadingState,
          [action.type]:LOADING_STATES.LOADING,
        }
      }
    case CATEGORIES_GET_SUCCESS :
      delete newLoadingState.CATEGORIES_GET_REQUEST
      return {
        ...state,
        allCategories: action.payload,
        loadingState: newLoadingState,
      }
    case CATEGORIES_GET_FAILURE :
      delete newLoadingState.BUDGET_GET_REQUEST
      return {
        ...state,
        allCategories: [],
        loadingState: newLoadingState,
      }
    default:
    return state
  }
}
export default common;