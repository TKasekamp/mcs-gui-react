import React from 'react';
import PropTypes from 'prop-types';

const CommandItem = (props) => {
    return (
        <li>
            <div className="desc">
                <div className="title">{props.command.result}</div>
                <small>{props.command.command}</small>
            </div>
            <div className="value">
                <div className="small text-muted">Status</div>
                <strong>{props.command.status}</strong>
            </div>
        </li>
    );
};
CommandItem.propTypes = {
    command: PropTypes.shape({
        id: PropTypes.string.isRequired,
        command: PropTypes.string.isRequired,
        userId: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        result: PropTypes.string.isRequired
    }).isRequired
};

export default CommandItem;
