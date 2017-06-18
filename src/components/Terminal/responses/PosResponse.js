import React from 'react';
import PropTypes from 'prop-types';

const PosResponse = (props) => {
    return <div>
            Satellite position:
    <dl className="row">
      <dt className="col-sm-3">ECEF</dt>
      <dd className="col-sm-9">{props.body.pos_x} {props.body.pos_y} {props.body.pos_z}</dd>
      <dt className="col-sm-3">LLA</dt>
      <dd className="col-sm-9">{props.body.lla_x} {props.body.lla_y} {props.body.lla_z}</dd>
    </dl>
    </div>;
};

PosResponse.propTypes = {
  body: PropTypes.shape({
    pos_x: PropTypes.number.isRequired,
    pos_y: PropTypes.number.isRequired,
    pos_z: PropTypes.number.isRequired,
    lla_x: PropTypes.number.isRequired,
    lla_y: PropTypes.number.isRequired,
    lla_z: PropTypes.number.isRequired
  }).isRequired
};

export default PosResponse;
