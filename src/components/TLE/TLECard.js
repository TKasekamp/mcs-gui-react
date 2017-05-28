/**
 * Created by Tõnis Kasekamp on 28.05.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';

const TLECard = (props) => {
    return <div className="card">
        <div className="card-header">
            <i className="fa fa-align-justify"/> TLE
        </div>
        <div className="card-block">
            <div className="row">
                <code>
                    <div> {props.tleString.name}</div>
                    <div> {props.tleString.line1}</div>
                    <div> {props.tleString.line2}</div>
                </code>
            </div>
        </div>
    </div>
};

TLECard.propTypes = {
    tleString: PropTypes.string.isRequired,

};

export default TLECard;