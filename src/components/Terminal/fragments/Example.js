/**
 * Created by Tõnis Kasekamp on 01.06.2017.
 */
import Autosuggest from 'react-autosuggest';
import React, {Component} from 'react';
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

class Example extends Component {
    constructor() {
        super();

        // Autosuggest is a controlled component.
        // This means that you need to provide an input value
        // and an onChange handler that updates this value (see below).
        // Suggestions also need to be provided to the Autosuggest,
        // and they are initially empty because the Autosuggest is closed.
        this.state = {
            value: '',
            suggestions: []
        };
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

    // Teach Autosuggest how to calculate suggestions for any given input value.
    getSuggestions = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

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
            onChange: this.onChange
        };

        // Finally, render it!
        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}

export default Example;