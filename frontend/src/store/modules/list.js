import { Map, List, fromJS } from 'immutable';
import { createAction, handleActions } from 'redux-actions';
//import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types
const GET_BEER_LIST = 'list/GET_BEER_LIST';
const INSERT = 'list/INSERT';

// action creators
export const getBeerList = createAction(GET_BEER_LIST);
export const insert = createAction(INSERT);

/**
  title: String,
  body: String,
  tags: [String], // 문자열의 배열
 */

// initial state
const initialState = List([
  Map({
    beerId: 'beerid1',
    beerName: 'beername1',
    tags: ''
  }),
  Map({
    beerId: 'beerid2',
    beerName: 'beername2',
    tags: ''
  })
]);
  

// reducer (action implement)
export default handleActions({
  [GET_BEER_LIST]: (state, action) => {
      const beersApiReturn = api.getBeerList();
      console.log(beersApiReturn);
      //const { data: beers } = action.payload;
      //return state.set('beers', fromJS(beers));
  },
  [INSERT]: (state, action) => {
    return state.push(Map(action.payload));
    
    //const { beerId, beerName, tags } = action.payload;
    //const { beer } = action.payload;
    //const beerJson = beer.toJS();
    // return state.push(Map({
    //   'beerId': beerId,
    //   'beerName': beerName,
    //   'tags': tags
    // }));

  }
}, initialState)