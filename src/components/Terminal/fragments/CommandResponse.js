/**
 * Created by Tõnis Kasekamp on 31.05.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {myIsoFormat} from '../../../logic/Time';

const CommandResponse = (props) => {
    const rTime = typeof props.responseTime !== 'undefined' ? myIsoFormat(props.responseTime) : '';

    const message = props.responseString !== '' ? props.responseString : 'Waiting for response...';

    return <div className="row">
        <div className="col-9">
            <pre>{message}</pre>
        </div>

        <div className="col-3">
            <small className="text-muted text-uppercase">Response time </small>
            <small>{rTime}</small>
        </div>
    </div>
};

CommandResponse.propTypes = {
    responseString: PropTypes.string,
    responseTime: PropTypes.number,
};

export default CommandResponse;