import { combineReducers } from 'redux';

const songsReducer = () => {

    return [
        { title: 'Smells like teen spirit', duration: '3:41'},
        { title: 'Mmmbop', duration: '3:10'},
        { title: 'Genie in a bottle', duration: '2:59'},
        { title: 'Wonderwall', duration: '4:02'}

    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
};


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

