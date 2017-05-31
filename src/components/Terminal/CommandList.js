import React from 'react';
import PropTypes from 'prop-types';
import CommandItem from './CommandItem';
const CommandList = (props) => {
    const resultElements = props.commands.map((command) => {
        return (
            <CommandItem command={command} key={command.id}/>
        );
    });
    // TODO make class
    const st = {display: 'flex', flexDirection: 'column-reverse'};
    return (
        <ul className="icons-list" style={st}>
            {resultElements}
        </ul>
    );
};

CommandList.propTypes = {
    commands: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        command: PropTypes.string.isRequired,
        userId: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        result: PropTypes.string.isRequired
    })).isRequired
};

export default CommandList;
