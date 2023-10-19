//Estilos
import { BsFillPlayFill } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi'

import { Player } from '../components/Player'

import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"

export const Detail = ({ songs }) => {

  const { id } = useParams()

  const [play, setPlay] = useState([])
  const [music, setMusic] = useState([])

  //Carregamento de dados
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://localhost:3000/playlists/' + id);

      const data = await res.json();

      setPlay(data);
      setMusic(data.songs)
    }
    fetchData();
  }, [id])

  const [currentMusic, setCurrentMusic] = useState()


  return (

    < >
      <div className="hero">
        <img src={play.image} alt="" />
        <div className="hero-content">
          <p>Playlis</p>
          <h1>{play.name}</h1>
          <p className="des">{play.description}</p>
          <Link to={`/play/${play.id}`} className="play-icon" ><BsFillPlayFill /></Link>
        </div>
      </div>

      <ul>
        <li>
          <p>#</p>
          <p></p>
          <p>Name:</p>
          <p>Artist:</p>
          <p>Duration:</p>
        </li>
        {
          music.map((song, i) => (
            <li key={song.id}>
              <p>{i + 1}</p>
              <p><img src={song.img} /></p>
              <p>{song.name}</p>
              <p>{song.artist}</p>
              <p><BiTimeFive /> {song.duration}</p>
              <Link onClick={() => setCurrentMusic(song)} className="play-icon"><BsFillPlayFill /></Link>
            </li>
          ))
        }
      </ul>
      <Player currentMusic={currentMusic} />
    </>
  )
}
