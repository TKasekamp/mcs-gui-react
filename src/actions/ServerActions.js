import jsonAjax from '../JSONAjaxRequest';
import {passesFailed, passesRetrieved} from './index';
import {commandFailed, commandSucceeded} from './CommandActions';
import {APIARY_ADDRESS, SERVER_URL} from '../constants';
import {prototypesFailed, prototypesRetrieved} from './PrototypeActions';

export const getPasses = () => (dispatch) => {
    jsonAjax(
        APIARY_ADDRESS + '/api/passes',
        'GET',
        null,
        (passes) => dispatch(passesRetrieved(passes)),
        ({error} = {}) => dispatch(passesFailed(error))
    );
};


export const getPrototypes = () => (dispatch) => {
    jsonAjax(
        SERVER_URL + '/api/prototypes',
        'GET',
        null,
        (prototypes) => dispatch(prototypesRetrieved(prototypes)),
        ({error} = {}) => dispatch(prototypesFailed(error))
    );
};
export const submitCommand = ({localId, body, prototypeId, priority}) => (dispatch) => {
    jsonAjax(
        SERVER_URL + '/api/commands',
        'POST',
        {body, prototypeId, priority},
        (obj) => dispatch(commandSucceeded({localId, obj})),
        ({error} = {}) => dispatch(commandFailed({error}))
    );
};
