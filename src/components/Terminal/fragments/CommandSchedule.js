/**
 * Created by Tõnis Kasekamp on 31.05.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';

const CommandSchedule = (props) => {

    return <div className="col-3">
        <div className="row">
            <label className="col-12 text-uppercase small font-weight-bold">Schedule</label>
        </div>
        <div className="row">
            <label className="col-4 text-uppercase small text-muted">OBCS schedule</label>
            <div className="col-8 small" style={{padding: 'initial'}}>
                {props.obcsSchedule}
            </div>
        </div>
        <div className="row">
            <label className="col-4 text-uppercase small text-muted">MCS schedule</label>
            <div className="col-8 small" style={{padding: 'initial'}}>
                {props.mcsSchedule}
            </div>
        </div>
    </div>
};

CommandSchedule.propTypes = {
    obcsSchedule: PropTypes.string.isRequired,
    mcsSchedule: PropTypes.string.isRequired,

};

export default CommandSchedule;