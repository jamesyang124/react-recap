import React from 'react';
import PropTypes from 'prop-types';
import regresClient from '../helpers/regres-client';
import Loading from './Loading';
import DataList from './DataList';

// props != state
// embedded react component mount at pops.children
// setState is defined by React.Component
//
// https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56
// bind your run time / after rendered function by bind in constructor
class SeasonDisplay extends React.Component {
  // @babel/plugin-proposal-class-properties
  // need add babel-eslint as well, add esling config too
  // public property
  state = {
    lat: null,
    errorMessage: null,
    inputVal: '',
    axiosResp: null,
    users: null // [{ data: { first_name: 'default name' } }]
  };

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    // can reduce this by arrow function + class property
    // this.axiosResponse = this.axiosResponse.bind(this);

    // state not the same as diff
    // only can be mutated by setState()
    // state must be init when component created
    // the only time we do directly assignment
    // in construction time
    //
    // https://reactjs.org/docs/react-component.html
    // You should not call setState() in the constructor().
    // Instead, if your component needs to use local state,
    // assign the "initial state" to this.state directly in the constructor
    // or put it to public property
    //
    // we can move out this to as public syntax, need babel support
    // this.state = { lat: null, errorMessage: null };

    console.log('constructor phase');
  }

  // You may call setState() immediately in componentDidMount().
  // It will trigger an extra rendering,
  // but it will happen before the browser updates the screen.
  // This guarantees that even though the render() will be called twice in this case,
  // the user won’t see the intermediate state.
  componentDidMount() {
    console.log('componentDidMount phase');
    // async operation
    // need state system to notify re-render when data comes in
    // when browser pop ask bar,
    // this request will be deferred until user tak action
    //
    // setState not run immediately, please use DidUpdate, or DidMount to fetch state
    window.navigator.geolocation.getCurrentPosition(
      (data) => {
        console.dir(data);
        this.setState({ lat: data.coords.latitude });
      },
      err => this.setState({ errorMessage: err.message })
    );

    // setState() does not always immediately update the component.
    // It may batch or defer the update until later.
    // This makes reading this.state right after calling setState() a potential pitfall.
    // Instead, use componentDidUpdate or a setState callback (setState(updater, callback)),
    // either of which are guaranteed to fire after the update has been applied.

    // image loading may delay, if you want to get image height,
    // use this.imageRef.current.addEventListener('load', this.setSpans);
    // setSpans is an arrow function as class property
    // setSpans = () => { ... }
  }

  componentDidUpdate() {
    console.log('componentDidUpdate phase');
  }

  componentWillUnmount() {
    console.log('SeasonDisplay in componentWillUnmount phase');
  }

  // event.preventDefault() means cancel event default behavior
  // ex: from submit will refresh page as default behavior
  onChange(event) {
    // need bind so we can fetch props from react component instance
    console.dir(this.props.onChangeMessage);
    const r = Object.assign(this.state, { inputVal: event.target.value });

    // event is https://reactjs.org/docs/events.html#event-pooling
    // not use async set state update in here,
    // ex: directly event related value update in setState
    this.setState(r);
    // console.dir(event);
    // console.dir(event.target.value);
  }

  // can rewrite it as arrow function as class property
  /*
  async axiosResponse() {
  */
  axiosResponse = async () => {
    // extract full request pattern to regres client
    const result = await regresClient.get('/api/users/2');

    console.dir(result);

    this.setState(state => Object.assign(state, { axiosResp: result }));
  }

  getUsers = async () => {
    const result = await regresClient.get('/api/users?page=2');

    console.log('getUsers', result);
    this.setState(state => Object.assign(state, { users: result.data.data }));
  }

  renderDisplay() {
    if (!this.state.errorMessage && !this.state.lat) {
      // with message prop have default value: Loading
      // but not explicitly asssign,
      // ex: message = { null } will lead null value not default value
      return <Loading />;
    }

    const text = this.state.errorMessage
      ? `Error: ${this.state.errorMessage}`
      : `Current Latittude: ${this.state.lat}`;

    return (
      <div className="ui grid">
        <div className="row centered">
          { this.state.axiosResp ? JSON.stringify(this.state.axiosResp.data) : '' }
        </div>
        <div className="row centered">
          { text }
        </div>
        <div className="row centered">
          {/*
            controlled element is react take care its event and re-rendered by react setState
          */}
          <input type="text" onChange={this.onChange} value={this.state.inputVal} />
        </div>
        <div className="row centered">
          <button type="button" onClick={this.axiosResponse}>CLICK ME TO GET API</button>
        </div>
        <div className="row centered">
          <button type="button" onClick={this.getUsers}>CLICK ME TO GET USERS API</button>
        </div>
        <div className="row centered user-list">
          {this.state.users ? <DataList dataList={this.state.users} /> : <DataList />}
        </div>
      </div>
    );
  }

  // call very frequently, less overhead in here
  // when state updated, being called
  // avoid conditional logic in render function,
  // move it to helper for readability
  // keep only one return in render function
  //
  // if you’re experiencing performance issues,
  // avoid using bind or arrow functions in render.
  render() {
    console.log('render phase');

    return this.renderDisplay();
  }
}

SeasonDisplay.propTypes = {
  onChangeMessage: PropTypes.string
};

SeasonDisplay.defaultProps = {
  onChangeMessage: 'onChange message'
};

export default SeasonDisplay;
