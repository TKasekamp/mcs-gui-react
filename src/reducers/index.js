import {combineReducers} from 'redux';
import passes from './Passes';
import prototypes from './Prototypes';
import commands from './Commands';
import {routerReducer} from 'react-router-redux';
export default combineReducers({
    passes: passes,
    prototypes: prototypes,
    commands: commands,
    routing: routerReducer
});
