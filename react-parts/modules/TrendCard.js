import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';
import * as faker from 'faker';
import ButtonLink from './ButtonLink';

const trendCard = (props) => {
  const { icon, children } = props;
  console.dir(props);
  return (
    <Card>
      <Card.Content>
        <Image floated="right" size="tiny" src={faker.image.avatar()} bordered />
        <Card.Header>{`${faker.name.firstName()} ${faker.name.lastName()}`}</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group
          {' '}
          <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <ButtonLink icon={icon} linkCount="2048" />
          { children }
        </div>
      </Card.Content>
    </Card>
  );
};

trendCard.propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default trendCard;
