import { createAction, handleActions } from 'redux-actions';

import { Map, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types
const GET_BEER = 'beer/GET_BEER';
const REMOVE_BEER = 'beer/REMOVE_BEER';

// action creators
export const getBeer = createAction(GET_BEER, api.getBeer);
export const removeBeer = createAction(REMOVE_BEER, api.removeBeer);

// initial state
const initialState = Map({
  beer: Map({})
});

// reducer
export default handleActions({
  ...pender({
    type: GET_BEER,
    onSuccess: (state, action) => {
      const { data: beer } = action.payload;
      return state.set('beer', fromJS(beer));
    }
  })
}, initialState)
