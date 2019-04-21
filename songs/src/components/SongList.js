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
const mapStateToProps = (reduxState, ownProps) => {
  // ownProps is defined in react, but not in redux store

  // disptach(action) returns that action's result.
  //
  // for redux middleware, returns plain object for reducers
  // for redux-thunk may return a (async) function
  //
  // as async action function would result to a promise,
  // so we put await before dispatch to catch resolved promise:
  //
  // const aysncAction = () => async dispatch => {};
  //
  // from babel: async dispatch => {} transpile to an _asyncToGenerator
  // await dispatch(aysncAction())
  //
  // o.w.
  // dispatch(await asyncFunction())
  // then this need redux-promise instead, eagerly evaluated

  console.log(reduxState);
  return reduxState;
};

// https://github.com/reduxjs/redux-thunk/blob/master/src/index.js
// redux-thunk => run async action => if action creator returns func

export default connect(mapStateToProps)(SongList);
