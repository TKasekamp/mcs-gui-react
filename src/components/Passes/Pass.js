import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {calculateDuration, myDayFormat, myTimeFormat} from '../../logic/Time';
import {calculatePassStatus} from '../../logic/PassStatus';
import PassStatus from './PassStatus';

class Pass extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', time: 0};
        this.calculateStatus.bind(this);
    }

    componentDidMount() {
        const intervalId = setInterval(() => {
            this.calculateStatus();
        }, 1000);
        this.setState({intervalId: intervalId});
        this.calculateStatus();
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    calculateStatus() {
        const s = calculatePassStatus(this.props.aos, this.props.los);
        this.setState({value: s.value, time: s.time});
    }

    render() {
        const passDate = myDayFormat(this.props.aos);
        const aosTime = myTimeFormat(this.props.aos);
        const losTime = myTimeFormat(this.props.los);
        const duration = myTimeFormat(calculateDuration(this.props.aos, this.props.los));

        return (
            <tr>
                <td>{passDate}</td>
                <td>{aosTime}</td>
                <td>{losTime}</td>
                <td>{duration}</td>
                <td><PassStatus value={this.state.value} time={this.state.time}/></td>
                <td>{this.props.maxElevation}°</td>
                <td>{this.props.groundStation}</td>
            </tr>
        );
    }
}

Pass.propTypes = {
    id: PropTypes.string.isRequired,
    aos: PropTypes.number.isRequired,
    los: PropTypes.number.isRequired,
    maxElevation: PropTypes.number.isRequired,
    groundStation: PropTypes.string.isRequired,
};

export default Pass;
