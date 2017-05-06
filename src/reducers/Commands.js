import {
    CONNECT_REFUSED, CONNECT_REQUESTED, CONNECTED, DISCONNECT_REQUESTED,
    MESSAGE_RECEIVED
} from '../actions/CommandActions';

const initialState = {
    connected: false,
    userId: '',
    commands: [],
    message: ''
};

const commands = (state = initialState, action) => {
    switch (action.type) {
        case CONNECT_REQUESTED:
            return {
                ...state,
                message: 'Connecting...'
            };

        case CONNECTED:
            return {
                ...state,
                message: ''
            };
        case CONNECT_REFUSED:
            // Something here
            return state;

        case MESSAGE_RECEIVED:
            return {...state, commands: state.commands.concat(action.payload)};

        case DISCONNECT_REQUESTED:
            return {
                connected: false,
                userId: '',
                commands: [],
                message: ''
            };
        default:
            return state;
    }
};

export default commands;
