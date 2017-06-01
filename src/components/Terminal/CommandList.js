import React from 'react';
import PropTypes from 'prop-types';
import CommandItem from './CommandItem';
const CommandList = (props) => {
    const resultElements = props.commands.map((command) => {
        return (
            <CommandItem command={command} key={command.id}/>
        );
    });
    return (
        <div className="list-group" style={{maxHeight: '30rem', overflowY: 'scroll'}}>
            {resultElements}
        </div>
    );
};

CommandList.propTypes = {
    commands: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        commandString: PropTypes.string.isRequired,
        userId: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        responseString: PropTypes.string
    })).isRequired
};

export default CommandList;
