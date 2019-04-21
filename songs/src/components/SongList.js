import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  render () {
    return <div>SongList</div>;
  }
}

// redux will hydrate redux state to react props with default value,
// from reducer's first argument's default value,
// then any action creator will suppose update its state later
//
// so you might see reducer init with [], but later update as {} instead
// only action creator can implicitly trigger state change,
// so reducer respond an updated state, and cause react re-rendered.
const mapStateToProps = (reduxState) => {
  console.log(reduxState);
  return reduxState;
};

// https://github.com/reduxjs/redux-thunk/blob/master/src/index.js
// redux-thunk => run async action => if action creator returns func

export default connect(mapStateToProps)(SongList);
