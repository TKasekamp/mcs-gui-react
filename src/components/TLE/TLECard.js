/**
 * Created by Tõnis Kasekamp on 28.05.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';

const tle =
    {
        'ORDINAL': '1',
        'COMMENT': 'GENERATED VIA SPACETRACK.ORG API',
        'ORIGINATOR': 'JSPOC',
        'NORAD_CAT_ID': '39161',
        'OBJECT_NAME': 'ESTCUBE 1',
        'OBJECT_TYPE': 'PAYLOAD',
        'CLASSIFICATION_TYPE': 'U',
        'INTLDES': '13021C',
        'EPOCH': '2017-05-27 19:18:36',
        'EPOCH_MICROSECONDS': '908640',
        'MEAN_MOTION': '14.71887908',
        'ECCENTRICITY': '0.0009173',
        'INCLINATION': '98.0277',
        'RA_OF_ASC_NODE': '234.0722',
        'ARG_OF_PERICENTER': '199.3297',
        'MEAN_ANOMALY': '160.7569',
        'EPHEMERIS_TYPE': '0',
        'ELEMENT_SET_NO': '999',
        'REV_AT_EPOCH': '21775',
        'BSTAR': '4.4346e-05',
        'MEAN_MOTION_DOT': '2.28e-06',
        'MEAN_MOTION_DDOT': '0',
        'FILE': '2165239',
        'TLE_LINE0': '0 ESTCUBE 1',
        'TLE_LINE1': '1 39161U 13021C   17147.80459385 +.00000228 +00000-0 +44346-4 0  9996',
        'TLE_LINE2': '2 39161 098.0277 234.0722 0009173 199.3297 160.7569 14.71887908217754',
        'OBJECT_ID': '2013-021C',
        'OBJECT_NUMBER': '39161',
        'SEMIMAJOR_AXIS': '7033.184',
        'PERIOD': '97.833',
        'APOGEE': '661.501',
        'PERIGEE': '648.598'
    };

const TLECard = (props) => {
    return <div className="card">
        <div className="card-header">
            <i className="fa fa-align-justify"/> TLE
        </div>
        <div className="card-block">

            <dl className="row">
                <dt className="col-sm-3">Raw TLE</dt>
                <dd className="col-sm-9"><pre><code>
                        <div> {tle.TLE_LINE0} </div>
                        <div> {tle.TLE_LINE1}</div>
                        <div> {tle.TLE_LINE2}</div>
                    </code></pre>
                </dd>

                <dt className="col-sm-3">Name</dt>
                <dd className="col-sm-9">{tle.OBJECT_NAME}</dd>

                <dt className="col-sm-3">Number</dt>
                <dd className="col-sm-9">{tle.OBJECT_NUMBER}</dd>
                <dt className="col-sm-3">Class</dt>
                <dd className="col-sm-9">{tle.CLASSIFICATION_TYPE}</dd>
                <dt className="col-sm-3">ID</dt>
                <dd className="col-sm-9">{tle.OBJECT_ID}</dd>
                <dt className="col-sm-3">Epoch</dt>
                <dd className="col-sm-9">{tle.EPOCH}</dd>

                <div>Other data is here, just can't be bothered to write it out.</div>
            </dl>
        </div>
    </div>
};

TLECard.propTypes = {
    tle: PropTypes.object,
};

export default TLECard;