/**
 * Created by Tõnis Kasekamp on 31.05.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {myIsoFormat} from '../../../logic/Time';

const CommandHeader = (props) => {
    const sTime = myIsoFormat(props.submitTime);

    return <div className="row">
        <div className="col-7"><kbd>{props.commandString}</kbd></div>
        <div className="col-2">
            <small className="text-muted text-uppercase">Status </small>
            <small>{props.status}</small>
        </div>
        <div className="col-3">
            <small className="text-muted text-uppercase">Submit time </small>
            <small>{sTime}</small>
        </div>
    </div>
};

CommandHeader.propTypes = {
    commandString: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    submitTime: PropTypes.number.isRequired,
    responseTime: PropTypes.number,
};

export default CommandHeader;