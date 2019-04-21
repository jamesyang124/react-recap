import { combineReducers } from 'redux';

// why reducer must be immutable?
// to trigger redux store knows its state changed,
// so redux can signal react to re-render component
// https://github.com/reduxjs/redux/blob/master/src/combineReducers.js#L164
// if nextStateForKey !== previousStateForKey
// use same state, this would not re-render and upadte redux store

const songReducer = () => {
  return [
    {
      title: 'No Scrubs',
      duration: '4:05'
    },
    {
      title: 'Macarena',
      duration: '2:30'
    },
    {
      title: 'All Star',
      duration: '3:15'
    },
    {
      title: 'I Want it That Way',
      duration: '1:45'
    }
  ];
};

// (selectedSong = null) => {}
// the default value means:
// if explicitly call func with param value undefined
//    func(undefined)
//      or
//    func()
// it will fallback to use default value null instead
//
// js function without explicitly return statement will return undefined
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSongs: selectedSongReducer
});
