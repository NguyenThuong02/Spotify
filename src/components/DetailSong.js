import { useContext } from 'react';
import {Songs} from '../Context'

function DetailSong() {

    const {song} = useContext(Songs)

    return ( 
        <div className="col-span-1 p-3">
            <h2 className="text-[#3cbce6] font-bold">Now playing</h2>
            <h2 className="text-[#868f9b] text-3xl">{song.name}</h2>
            <div className="w-[240px] m-auto mt-10">
                <img className="w-[240px] h-[240px] object-cover" src={song.links.images[0].url} alt="avatar"/>
            </div>
            <div className="flex justify-evenly items-center mt-10">
                <img className="w-[70px] h-[70px] object-cover rounded-full" src={song.links.images[1].url} alt="avatar"/>
                <span className="text-xl text-[#fff]">{song.author}</span>
            </div>
        </div>
     );
}

export default DetailSong;