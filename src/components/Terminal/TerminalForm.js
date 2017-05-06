import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TerminalForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            command: ''
        };
    }

    handleGuessChange(event) {
        this.setState({command: event.target.value});
    }

    onSubmit() {
        this.props.onSubmit(this.state.command);
        this.setState({command: ''});
    }

    handleKeyPress(e) {
        if (e.key === 'Enter' && this.state.command !== '') {
            this.onSubmit();
        }
    }

    render() {
        return (
            <div className="form-group"><input
                id="word-input"
                className="form-control"
                type="text"
                placeholder="Enter stuff"
                value={this.state.command}
                onChange={this.handleGuessChange.bind(this)}
                onKeyPress={this.handleKeyPress.bind(this)}
            /></div>
        );
    }
}
TerminalForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default TerminalForm;
