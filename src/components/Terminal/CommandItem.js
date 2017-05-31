import React from 'react';
import PropTypes from 'prop-types';
import CommandHeader from './fragments/CommandHeader';

const CommandItem = (props) => {
    // return (
    //     <li>
    //         <div className="desc">
    //             <div className="title">{props.command.result}</div>
    //             <small>{props.command.command}</small>
    //         </div>
    //         <div className="value">
    //             <div className="small text-muted">Status</div>
    //             <strong>{props.command.status}</strong>
    //         </div>
    //     </li>
    // );

    return <div>
        <CommandHeader submitTime={props.command.submitTime} status={props.command.status}
                       commandString={props.command.commandString}
                       responseTime={props.command.responseTime}/>
    </div>
};
CommandItem.propTypes = {
    command: PropTypes.shape({
        id: PropTypes.string.isRequired,
        commandString: PropTypes.string.isRequired,
        submitTime: PropTypes.number.isRequired,
        responseTime: PropTypes.number.isRequired,
        userId: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        responseString: PropTypes.string
    }).isRequired
};

export default CommandItem;
