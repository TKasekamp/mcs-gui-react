import React, {Component} from 'react';

/* eslint-disable */
class Simple extends Component {
    render() {
        return (
            <div className="app flex-row align-items-center">
                {this.props.children}
            </div>
        );
    }
}
export default Simple;
