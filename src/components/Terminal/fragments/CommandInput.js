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
const getSuggestionValue = suggestion => suggestion.name;

function renderSuggestion(suggestion) {

    return (
        <SuggestionItem subsystems={suggestion.subsystems} name={suggestion.name} id={suggestion.id}
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
            this.props.onSubmit({commandString: this.state.value});
        }
        else if (e.key === 'Enter' && this.state.blockEnter) {
            this.setState({blockEnter: false});
        }
    }

    onChange = (event, {newValue}) => {
        this.setState({
            value: newValue
        });
    };

    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({value}) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    onSuggestionSelected = (event, {method}) => {
        // Must set true to block submit
        if (method === 'enter') {
            this.setState({blockEnter: true});
        }
    };

    // Teach Autosuggest how to calculate suggestions for any given input value.
    getSuggestions = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        // TODO improve regex
        return inputLength === 0 ? [] : this.props.commandPrototypes.filter(command =>
            command.name.toLowerCase().slice(0, inputLength) === inputValue
        );
    };

    render() {
        const {value, suggestions} = this.state;

        // Autosuggest will pass through all these props to the input element.
        const inputProps = {
            placeholder: 'Type in command',
            value,
            onChange: this.onChange,
            onKeyPress: this.handleKeyPress.bind(this)
        };

        // Finally, render it!
        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionSelected={this.onSuggestionSelected}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}
CommandInput.propTypes = {
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
export default CommandInput;