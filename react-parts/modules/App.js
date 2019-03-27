import React from 'react';
import {
  Grid, Button, Icon, Label
} from 'semantic-ui-react';
import ButtonLink from './ButtonLink';
import TrendCard from './TrendCard';
import SeasonDisplay from './SeasonDisplay';
import PhoneNumberUtils from '../helpers/phone-number-utils';

const app = (props) => {
  window.PhoneNumberUtils = new PhoneNumberUtils();

  console.dir(props);
  return (
    <Grid container centered padded="vertically">
      <Grid.Row className="tweleve column">
        <Button as="div" labelPosition="right" primary>
          <Button color="red">
            <Icon name="heart" />
            Like
          </Button>
          <Label as="a" basic color="red" pointing="left">
            2048
          </Label>
        </Button>
        <ButtonLink icon="fork" linkCount="2048" />
      </Grid.Row>
      <Grid.Row className="tweleve wide column">
        <TrendCard icon="fork">
          {/* passing as props.children in TrendCard */}
          <Button color="green">
            Approve
          </Button>
        </TrendCard>
      </Grid.Row>
      <Grid.Row className="tweleve wide column">
        <SeasonDisplay />
      </Grid.Row>
    </Grid>
  );
};

export default app;
