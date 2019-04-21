import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  render () {
    return <div>SongList</div>;
  }
}

const mapStateToProps = (reduxState) => {
  console.log(reduxState);
  return reduxState;
};

// https://github.com/reduxjs/redux-thunk/blob/master/src/index.js
// redux-thunk => run async action => if action creator returns func

export default connect(mapStateToProps)(SongList);
