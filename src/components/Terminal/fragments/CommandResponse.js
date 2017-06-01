/**
 * Created by Tõnis Kasekamp on 31.05.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';

const CommandResponse = (props) => {
    const rTime = typeof props.responseTime !== 'undefined' ? props.responseTime : '';

    const message = props.responseString !== '' ? props.responseString : 'Waiting for response...';

    return <div className="row">
        <div className="col-8">
            <pre>{message}</pre>
        </div>

        <div className="col-4">
            <small className="text-muted text-uppercase">Response time</small>
            <small>{rTime}</small>
        </div>
    </div>
};

CommandResponse.propTypes = {
    responseString: PropTypes.string,
    responseTime: PropTypes.string,
};

export default CommandResponse;