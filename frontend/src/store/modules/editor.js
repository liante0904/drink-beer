import { Map, List } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

//import { pender } from 'redux-pender';
//import * as api from 'lib/api';

// action types
const INITIALIZE = 'editor/INITIALIZE';
const CHANGE_INPUT = 'editor/CHANGE_INPUT';
const ADD_BEER = 'editor/ADD_BEER';



// action creators
export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);
export const addBeer = createAction(ADD_BEER);

// initial state
const initialState = Map({
  beerId: '',
  beerName: '',
  tags: ''
});

// reducer
export default handleActions({
  [INITIALIZE]: (state, action) => initialState,
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload;
    return state.set(name, value);    
  }
  /*,
  [ADD_BEER]: (state, action) => {
    //const { name, value, tags } = action.payload;
    //return state.push(Map('11','11','11'));
                //.set('tags', tags);
  }
  */
}, initialState)