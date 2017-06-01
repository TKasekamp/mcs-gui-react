import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommandItem from './CommandItem';
import * as ReactDOM from 'react-dom';
class CommandList extends Component {

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        const commandsContainer = ReactDOM.findDOMNode(this.commandsContainer);
        commandsContainer.scrollTop = commandsContainer.scrollHeight;
    };

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
;

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
