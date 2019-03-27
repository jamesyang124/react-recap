import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class Loading extends React.Component {
  componentWillUnmount() {
    console.log('Loading in componentWillUnmount phase');
  }

  render() {
    const { message } = this.props;

    return (
      <Dimmer active inverted>
        <Loader inverted>{ message }</Loader>
      </Dimmer>
    );
  }
}

Loading.propTypes = {
  message: PropTypes.string
};

// now the message is not isRequired in prop types check
// but with default value
Loading.defaultProps = {
  message: 'Loading...'
};

export default Loading;
