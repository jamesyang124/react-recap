// given file name using index.js
// then webpack will automatically find import by default filename:
//  import actions from './action';
// to point to ./aciton/index.js

export const selectSong = song => {
  // return an action, type prop is required for redux
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
