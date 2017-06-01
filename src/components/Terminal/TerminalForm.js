import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TerminalForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            commandString: '',
            priority: 'HIGH',
            obcsSchedule: 'NOW',
            mcsSchedule: 'NOW'
        };
    }

    handleGuessChange(event) {
        this.setState({commandString: event.target.value});
    }

    handlePriorityChange(event) {
        this.setState({priority: event.target.value});
    }

    handleObcsScheduleChange(event) {
        this.setState({obcsSchedule: event.target.value});
    }

    handleMcsScheduleChange(event) {
        this.setState({mcsSchedule: event.target.value});
    }

    onSubmit() {
        this.props.onSubmit({
            commandString: this.state.commandString,
            obcsSchedule: this.state.obcsSchedule,
            priority: this.state.priority,
            mcsSchedule: this.state.mcsSchedule
        });
        this.setState({commandString: ''});
    }

    handleKeyPress(e) {
        if (e.key === 'Enter' && this.state.commandString !== '') {
            this.onSubmit();
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="form-group col-12"><input
                        id="word-input"
                        className="form-control"
                        type="text"
                        placeholder="Enter stuff"
                        value={this.state.commandString}
                        onChange={this.handleGuessChange.bind(this)}
                        onKeyPress={this.handleKeyPress.bind(this)}
                    /></div>
                </div>

                <div className="row">
                    <div className="form-group col-sm-3">
                        <label>Priority</label><select className="form-control" id="priority"
                                                       value={this.state.priority}
                                                       onChange={this.handlePriorityChange.bind(this)}>
                        <option>HIGH</option>
                        <option>MEDIUM</option>
                        <option>LOW</option>
                    </select></div>
                    <div className="form-group col-sm-3">
                        <label>OBCS schedule</label><select className="form-control" id="obcsSchedule"
                                                            value={this.state.obcsSchedule}
                                                            onChange={this.handleObcsScheduleChange.bind(this)}>
                        <option>NOW</option>
                        <option>LATER</option>
                        <option>NEVER</option>
                    </select></div>
                    <div className="form-group col-sm-3">
                        <label>MCS schedule</label><select className="form-control" id="mcsSchedule"
                                                           value={this.state.mcsSchedule}
                                                           onChange={this.handleMcsScheduleChange.bind(this)}>
                        <option>NOW</option>
                        <option>LATER</option>
                        <option>NEVER</option>
                    </select></div>
                </div>
            </div>
        );
    }
}
TerminalForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    commandPrototypes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        subsystems: PropTypes.arrayOf(PropTypes.string).isRequired,
        parameters: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            default: PropTypes.any.isRequired,
        })).isRequired
    })).isRequired
};

export default TerminalForm;
