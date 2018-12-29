import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

// action types
const INITIALIZE = 'beer/INITIALIZE';
const CHANGE_INPUT = 'beer/CHANGE_INPUT';
const WRITE_BEER = 'beer/WRITE_BEER';
const GET_BEER = 'beer/GET_BEER';
const EDIT_BEER = 'beer/EDIT_BEER';


// action creators
export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);
//export const writeBeer = createAction(WRITE_BEER, api.writeBeer);
export const getBeer = createAction(GET_BEER, api.getBeer);
export const editBeer = createAction(EDIT_BEER, api.editBeer);

// initial state
const initialState = Map({
  title: '',
  markdown: '',
  tags: '',
  postId: null
});

// reducer
export default handleActions({
  [INITIALIZE]: (state, action) => initialState,
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload;
    return state.set(name, value);
  },
  ...pender({
    type: WRITE_BEER,
    onSuccess: (state, action) => {
      const { _id } = action.payload.data;
      return state.set('postId', _id);
    }
  }),
  ...pender({
    type: GET_BEER,
    onSuccess: (state, action) => {
      const { title, tags, body } = action.payload.data;
      return state.set('title', title)
                  .set('markdown', body)
                  .set('tags', tags.join(', ')); // 배열 -> ,로 구분된 문자열
    }
  })
}, initialState)