import React from 'react';
import PropTypes from 'prop-types';

const PingResponse = (props) => {
    return <div>
      Ping <strong>{props.body.timestamp}</strong>
    </div>;
};

PingResponse.propTypes = {
  body: PropTypes.shape({
    timestamp: PropTypes.string.isRequired
  }).isRequired
};

export default PingResponse;
