import React from 'react';
import SongList from './SongList';
import SongDetails from './SongDetails';

export default function App() {
  return (
    <div className="ui container grid">
     <div className="ui row">
      <div className="column eight wide">
      <SongList />
      </div>
      <div className="colum eight wide">
      <SongDetails />
      </div>
      </div>
    </div>
  )
}
