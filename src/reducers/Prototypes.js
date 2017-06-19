/**
 * Created by Tõnis Kasekamp on 19.06.2017.
 */
import {PROTOTYPES_FAILED, PROTOTYPES_REQUESTED, PROTOTYPES_RETRIEVED} from '../actions/PrototypeActions';
const initialState = {
    fetchState: {inFlight: false},
    prototypes: []
};

const prototypes = (state = initialState, action) => {
    switch (action.type) {
        case PROTOTYPES_REQUESTED: {
            return {
                ...state,
                fetchState: {inFlight: true},
            };
        }

        case PROTOTYPES_RETRIEVED: {
            return {
                ...state,
                fetchState: {inFlight: false},
                prototypes: action.payload
            };
        }

        case PROTOTYPES_FAILED: {
            return {
                ...state,
                fetchState: {inFlight: false, error: action.payload},
            };
        }
        default:
            return state;
    }
};

export default prototypes;
