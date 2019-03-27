import React from 'react';
import PropTypes from 'prop-types';

// elem in collection should have key prop, so react able to map from vDOM list to real DOM
//
// https://flaviocopes.com/react-state-vs-props/
// In a React component,
// props are variables passed to it by its parent component.
// State on the other hand is still variables,
// but directly initialized and managed by the component.
export default class DataList extends React.Component {
  render() {
    return this.props.dataList.map(d => (
      <div key={d.id} className="column centered">
        { d.first_name }
      </div>
    ));
  }
}

DataList.propTypes = {
  dataList: PropTypes.arrayOf(PropTypes.object)
};

DataList.defaultProps = {
  dataList: [{ id: 1, data: { first_name: 'default name' } }]
};
