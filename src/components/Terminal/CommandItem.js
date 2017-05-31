import React from 'react';
import PropTypes from 'prop-types';
import CommandHeader from './fragments/CommandHeader';
import CommandResponse from './fragments/CommandResponse';

const CommandItem = (props) => {
    return <div>
        <CommandHeader submitTime={props.command.submitTime} status={props.command.status}
                       commandString={props.command.commandString}
                       responseTime={props.command.responseTime}/>
        <CommandResponse responseString={props.command.responseString} responseTime={props.command.responseTime}/>
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
