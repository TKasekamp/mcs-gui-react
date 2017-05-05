import jsonAjax from '../JSONAjaxRequest';
import {passesFailed, passesRetrieved} from './index';

const SERVER_ADDRESS = 'http://private-036b14-guiapi.apiary-mock.com';

export const getPasses = () => (dispatch) => {
    jsonAjax(
        SERVER_ADDRESS + '/ops/passes',
        'GET',
        null,
        (passes) => dispatch(passesRetrieved(passes)),
        ({error} = {}) => dispatch(passesFailed(error))
    );
};
