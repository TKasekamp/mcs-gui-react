import React from 'react';
import PropTypes from 'prop-types';

const DefaultResponse = (props) => {
    return <div>
      Default response. No pretty component defined :( <pre>{JSON.stringify(props.body)}</pre>
    </div>;
};

DefaultResponse.propTypes = {
  body: PropTypes.any.isRequired
};

export default DefaultResponse;
