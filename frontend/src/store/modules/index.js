import { combineReducers } from 'redux';
import editor from './editor';
import list from './list';


export default combineReducers({
    editor,
    list
});