import {combineReducers} from 'redux';
import passes from './Passes';
import {routerReducer} from 'react-router-redux';
export default combineReducers({
    passes: passes,
    routing: routerReducer
});
