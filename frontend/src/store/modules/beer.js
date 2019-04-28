// beer 상태 로직
import { createAction, handleActions } from 'redux-actions';

import { Map, List } from 'immutable';

// 액션 타입 정의
const CHANGE_INPUT = 'beer/CHANGE_INPUT';
const ADD_BEER = 'beer/ADD_BEER';
const GET_BEER = 'beer/GET_BEER';
const GET_BEERS = 'beer/GET_BEERS';
const PUT_BEER = 'beer/PUT_BEER';
const DELETE_BEER = 'beer/DELETE_BEER';

export const changeInput = createAction(CHANGE_INPUT, value => value);
export const addBeer = createAction(ADD_BEER);
export const getBeer = createAction(GET_BEER, id => id);
export const getBeers = createAction(GET_BEERS, beers => beers);
export const putBeer = createAction(PUT_BEER);
export const deleteBeer = createAction(DELETE_BEER, id => id);

// 모듈의 초기 상태를 정의합니다.
const initialState = Map({
    name: '',
    rating: '',
    beers: List()    
});

export default handleActions({
    [CHANGE_INPUT]: (state, action) => {
        const { name, value } = action.payload;
        /* 여러개의 Input값을 동적으로 처리 */
        return state.set(name, value);
    },
    [ADD_BEER]: (state, action) => {
        console.log( 'here    ', state.get('name'), state.get('rating') );
        const item = Map({ name: state.get('name'), rating: state.get('rating') });
        console.log( 'here    1');
        return state.update('beers', beers => beers.push(item));
    },
 // action 객체를 참조하지 않으니까 이렇게 생략을 할 수도 있겠죠?
 // state 부분에서 비구조화 할당도 해주어서 코드를 더욱 간소화시켰습니다.
    [GET_BEER]: ({ number }) => ({ number: number - 1 })
 }, initialState);