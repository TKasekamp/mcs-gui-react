/**
 * Created by Tõnis Kasekamp on 05.05.2017.
 */
import {PASSES_FAILED, PASSES_REQUESTED, PASSES_RETRIEVED} from '../actions/index';
const initialState = {
    fetchState: {inFlight: false},
    passes: []
};

const passes = (state = initialState, action) => {
    switch (action.type) {
        case PASSES_REQUESTED: {
            return {
                ...state,
                fetchState: {inFlight: true},
            };
        }

        case PASSES_RETRIEVED: {
            return {
                ...state,
                fetchState: {inFlight: false},
                passes: action.payload
            };
        }

        case PASSES_FAILED: {
            return {
                ...state,
                fetchState: {inFlight: false, error: action.payload},
            };
        }
        default:
            return state;
    }
};

export default passes;
