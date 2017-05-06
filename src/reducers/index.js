import {combineReducers} from 'redux';
import passes from './Passes';
import commands from './Commands';
import {routerReducer} from 'react-router-redux';
export default combineReducers({
    passes: passes,
    commands: commands,
    routing: routerReducer
});
