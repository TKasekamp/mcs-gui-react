import React from 'react';
import PropTypes from 'prop-types';

const PongResponse = (props) => {
    return <div>
      Pong <strong>{props.body.timestamp}</strong>
    </div>;
};

PongResponse.propTypes = {
  body: PropTypes.shape({
    timestamp: PropTypes.string.isRequired
  }).isRequired
};

export default PongResponse;
