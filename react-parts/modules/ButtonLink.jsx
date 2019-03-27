import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Icon, Label
} from 'semantic-ui-react';

const buttonLink = (props) => {
  const { icon } = props;

  console.dir(props);
  return (
    <Button as="div" labelPosition="right" primary>
      <Button basic color="blue">
        <Icon name={icon} />
        Fork
      </Button>
      <Label as="a" basic color="blue" pointing="left">
        { props.linkCount }
      </Label>
    </Button>
  );
};

buttonLink.propTypes = {
  icon: PropTypes.string.isRequired,
  linkCount: PropTypes.string.isRequired
};

export default buttonLink;
