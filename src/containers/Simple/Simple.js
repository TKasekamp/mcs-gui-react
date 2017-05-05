import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Simple extends Component {
    render() {
        return (
            <div className="app flex-row align-items-center">
                {this.props.children}
            </div>
        );
    }
}

Simple.proptypes = {
    children: PropTypes.node
};
export default Simple;
