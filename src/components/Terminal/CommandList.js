import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommandItem from './CommandItem';

class CommandList extends Component {
    constructor() {
        super();
        this.commandsContainer = '';
    }
    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom() {
        this.commandsContainer.scrollTop = this.commandsContainer.scrollHeight;
    }

    render() {
        const resultElements = this.props.commands.map((command) => {
            return (
                <CommandItem command={command} key={command.id}/>
            );
        });
        return (
            <div ref={(el) => {
                this.commandsContainer = el;
            }} className="list-group" style={{maxHeight: '30rem', overflowY: 'scroll'}}>
                {resultElements}
            </div>
        );
    }
}

CommandList.propTypes = {
    commands: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        userId: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        responseString: PropTypes.string
    })).isRequired
};

export default CommandList;
