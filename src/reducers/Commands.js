import {
    COMMAND_SUBMITTED,
    COMMAND_SUCCEEDED,
    CONNECT_REFUSED,
    CONNECT_REQUESTED,
    CONNECTED,
    DISCONNECT_REQUESTED,
    MESSAGE_RECEIVED
} from '../actions/CommandActions';

const initialState = {
    connected: false,
    userId: '',
    commands: [],
    message: ''
};
export const IN_FLIGHT = 'In Flight';
/* export const ACCEPTED = 'created';
 export const FAILED = 'failed';*/

const handleMessageReceived = (commands, action) => {
    // Accepts messages from our terminal and any other
    let inList = false;
    commands = commands.map((command) => {
        if (command.id === action.payload.id) {
            inList = true;
            return {
                ...command,
                result: action.payload.result,
                status: action.payload.status
            };
        } else {
            return command;
        }
    });
    if (!inList) {
        commands = commands.concat(action.payload);
    }
    return commands;
};

const commands = (state = initialState, action) => {
    switch (action.type) {
        case COMMAND_SUBMITTED:
            return {
                ...state,
                commands: state.commands.concat({
                    id: action.payload.localId,
                    command: action.payload.command,
                    status: IN_FLIGHT,
                    userId: action.payload.userId,
                    result: ''
                })
            };

        case COMMAND_SUCCEEDED: {
            const commands = state.commands.map((command) => {
                if (command.id === action.payload.localId) {
                    return {
                        ...command,
                        id: action.payload.id,
                        status: action.payload.status
                    };
                } else {
                    return command;
                }
            });

            return {...state, commands};
        }

        case CONNECT_REQUESTED:
            return {
                ...state,
                message: 'Connecting...'
            };

        case CONNECTED:
            return {
                ...state,
                connected: true,
                message: ''
            };
        case CONNECT_REFUSED:
            return {
                ...state,
                connected: false,
                message: 'Connection refused! Those bastards!'
            };

        case MESSAGE_RECEIVED:
            return {...state, commands: handleMessageReceived(state.commands, action)};

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
