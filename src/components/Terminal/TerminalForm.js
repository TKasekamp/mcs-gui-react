import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommandInput from './fragments/CommandInput';
import CommandDescription from './fragments/CommandDescription';

class TerminalForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            priority: 'HIGH',
            commandPrototype: ''
        };
    }

    handlePriorityChange(event) {
        this.setState({priority: event.target.value});
    }

    onSubmit(obj) {

        this.props.onSubmit({
            body: obj.body,
            priority: this.state.priority,
            prototypeId: this.state.commandPrototype.id
        });
        this.setState({commandPrototype: ''});
    }

    // TODO move to reducer
    onSuggestionChange(id) {
        this.setState({commandPrototype: this.props.commandPrototypes.filter((c) => c.id === id)[0]});
    }

    render() {
        let desc = '';
        if (this.state.commandPrototype !== '') {
            desc = <div className="row">
                <div className="form-group col-12">
                    <CommandDescription commandPrototype={this.state.commandPrototype}/>
                </div>
            </div>;
        }

        return (
            <div className="pt-2">
                {desc}
                <div className="row">
                    <div className="form-group col-12">
                        <CommandInput commandPrototypes={this.props.commandPrototypes}
                                      onSubmit={this.onSubmit.bind(this)}
                                      onSuggestionChange={this.onSuggestionChange.bind(this)}/>
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
        restricted: PropTypes.bool.isRequired,
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
