
import { Outlet, Link } from "react-router-dom";
import { BsFillPlayFill } from 'react-icons/bs'
import { useState } from "react";

export const MenuPlaylists = ({ playlists }) => {

    const [songs, setSongs] = useState([])
    const handle = (id) => {
        const current = (playlists[id - 1])
        setSongs(current.songs)
    }

    return (
        <div className='menu-nav'>
            <nav>
                <ul>
                    {
                        playlists.map((playlist) =>
                        (<li key={playlist.id}>
                            <Link to={`/play/${playlist.id}`} >
                                <section className="playlist-card">
                                    <img className="playlist-card-img" src={playlist.image} alt="" />
                                    <h2>{playlist.name}</h2>
                                    <p onClick={() => handle(playlist.id)} className="play-icon"><BsFillPlayFill /></p>
                                </section>
                            </Link>
                        </li>)
                        )
                    }
                </ul>
            </nav>
            <div className="details">
                <Outlet />
            </div>
        </div>


    )
}
