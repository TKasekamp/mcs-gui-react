/**
 * Created by Tõnis Kasekamp on 31.05.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';

const CommandData = (props) => {

    return <div className="col-3">
        <div className="row">
            <label className="col-12 text-uppercase small font-weight-bold">Command data</label>
        </div>
        <div className="row">
            <label className="col-4 text-uppercase small text-muted">Command id</label>
            <div className="col-8 small" style={{padding: 'initial'}}>
                {props.id}
            </div>
        </div>
        <div className="row">
            <label className="col-4 text-uppercase small text-muted">User id</label>
            <div className="col-8 small" style={{padding: 'initial'}}>
                {props.userId}
            </div>
        </div>
    </div>
};

CommandData.propTypes = {
    id: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,

};

export default CommandData;