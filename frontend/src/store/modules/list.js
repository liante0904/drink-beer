import { createAction, handleActions } from 'redux-actions';

import { Map, List, fromJS } from 'immutable';
//import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types
const GET_BEER_LIST = 'GET_BEER_LIST';

// action creators
export const getBeerList = createAction(GET_BEER_LIST, api.getBeerList);

// initial state
const initialState = Map({
  beers: List()
});

// reducer
export default handleActions({
  [GET_BEER_LIST]: (state, action) => {
      const { data: beers } = action.payload;
      return state.set('beers', fromJS(beers));
    }
}, initialState)

/**
export default handleActions({
  ...pender({
    type: GET_BEER_LIST,
    onSuccess: (state, action) => {
      const { data: beers } = action.payload;
      return state.set('beers', fromJS(beers));
    }
  })
}, initialState)
 */