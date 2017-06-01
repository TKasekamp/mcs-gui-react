import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommandInput from './fragments/CommandInput';

class TerminalForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            priority: 'HIGH',
            obcsSchedule: 'NOW',
            mcsSchedule: 'NOW'
        };
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

    onSubmit(obj) {
        this.props.onSubmit({
            commandString: obj.commandString,
            obcsSchedule: this.state.obcsSchedule,
            priority: this.state.priority,
            mcsSchedule: this.state.mcsSchedule
        });
    }

    render() {
        return (
            <div className="pt-2">
                <div className="row">
                    <div className="form-group col-12">
                        <CommandInput commandPrototypes={this.props.commandPrototypes}
                                      onSubmit={this.onSubmit.bind(this)}/>
                    </div>
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
            default: PropTypes.any,
        })).isRequired
    })).isRequired
};

export default TerminalForm;
