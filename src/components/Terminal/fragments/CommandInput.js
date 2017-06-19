/**
 * Created by Tõnis Kasekamp on 01.06.2017.
 */
import Autosuggest from 'react-autosuggest';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SuggestionItem from './SuggestionItem';


// When suggestion is clicked, Autosuggest needs to populate the input element
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = (suggestion) => {
    const params = suggestion.parameters.map((p) => {
        return p.default;
    }).join(' , ');

    return `${suggestion.subsystem}.${suggestion.name}(${params})`;
};

function renderSuggestion(suggestion) {
    return (
        <SuggestionItem subsystem={suggestion.subsystem} name={suggestion.name} id={suggestion.id}
                        parameters={suggestion.parameters}/>
    );
}

class CommandInput extends Component {
    constructor() {
        super();

        // Autosuggest is a controlled component.
        // This means that you need to provide an input value
        // and an onChange handler that updates this value (see below).
        // Suggestions also need to be provided to the Autosuggest,
        // and they are initially empty because the Autosuggest is closed.
        this.state = {
            value: '',
            suggestions: [],
            blockEnter: false
        };
    }

    handleKeyPress(e) {
        // BlockEnter must be false to allow submit
        if (e.key === 'Enter' && this.state.value !== '' && !this.state.blockEnter) {
            this.props.onSubmit({body: this.state.value});
            this.setState({value: ''});
        } else if (e.key === 'Enter' && this.state.blockEnter) {
            this.setState({blockEnter: false});
        }
    }

    onChange(event, {newValue}) {
        this.setState({
            value: newValue
        });
    }

    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested({value}) {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    }

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested() {
        this.setState({
            suggestions: []
        });
    }

    /*
     Throw up the id of the suggestion.
     Block enter submit if needed.
     */
    onSuggestionSelected(event, {suggestion, method}) {
        this.props.onSuggestionChange(suggestion.id);
        // Must set true to block submit
        if (method === 'enter') {
            this.setState({blockEnter: true});
        }
    }

    // Teach Autosuggest how to calculate suggestions for any given input value.
    getSuggestions(value) {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        // TODO improve regex
        return inputLength === 0 ? [] : this.mapEverySubsystem(inputLength, inputValue);
    }

    mapEverySubsystem(inputLength, inputValue) {
        const filteredCommands = this.props.commandPrototypes.filter((command) =>
            command.name.toLowerCase().slice(0, inputLength) === inputValue
        );
        const mappedCommands = filteredCommands.map((command) => {
            return command.subsystems.map((subsystem) => {
                return {
                    ...command, subsystem: subsystem
                };
            });
        });

        const flatten = (list) => list.reduce(
            (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
        );

        return flatten(mappedCommands);
    }

    render() {
        const {value, suggestions} = this.state;

        // Autosuggest will pass through all these props to the input element.
        const inputProps = {
            placeholder: 'Type in command',
            value,
            onChange: this.onChange.bind(this),
            onKeyPress: this.handleKeyPress.bind(this)
        };

        // Finally, render it!
        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
                onSuggestionSelected={this.onSuggestionSelected.bind(this)}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}
CommandInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onSuggestionChange: PropTypes.func.isRequired,
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
export default CommandInput;
