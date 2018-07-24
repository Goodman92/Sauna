import {TOGGLE_FILTERS} from '../actions/search-bar';

const initialState = {

};

export const searchBar = (state, action) => {
  switch (action.type) {
    case TOGGLE_FILTERS:
      return state;
    default:
      return state;
  }
};