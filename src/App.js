import './App.css'
import DetailSong from "./components/DetailSong";
import ListSongs from "./components/ListSongs";
import Navbar from "./components/Navbar";
import Playing from './components/Playing'

import DataSongs from './data/songs.json'
import { Songs } from "./Context";
import { useState } from 'react';

function App() {

  const [song, setSong] = useState(DataSongs[0])

  const handleSetSong = (idSong) => {
    // Ở đây tìm kiếm nếu song.id trong DataSongs trùng với idSong thì lưu vào biến song
    const song = DataSongs.find(song => song.id === idSong)
    if(!song){
      setSong(DataSongs[0])
    } else {
      setSong(song)
      // setSong đã cập nhật một state mới là song(trong handleSetSong) sau đó song(trong handleSetSong) này đi lên thành giá trị của song state
    }
  }

  // //Như này sẽ dễ hiểu hơn nha!
// const [currentSong, setCurrentSong] = useState(DataSongs[0]);

// const handleSetSong = (idSong) => {
//   const foundSong = DataSongs.find(song => song.id === idSong);

//   if (!foundSong) {
//     setCurrentSong(DataSongs[0]);
//   } else {
//     // Nếu tìm thấy, cập nhật currentSong với bài hát tìm được
//     setCurrentSong(foundSong);
//   }
// };


  return (
    <div className="App">
      <Songs.Provider value={{DataSongs, song, handleSetSong}}>
        <Navbar />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
          {/* span 1 */}
          <DetailSong />
          {/* span 2 */}
          <ListSongs />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;
