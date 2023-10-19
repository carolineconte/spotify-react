//Styles
import './App.css'

//Hooks
import { useEffect, useState } from 'react'
//Config React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useParams, Link } from "react-router-dom"

//Components
import { MenuPlaylists } from './pages/MenuPlaylists'
import { Detail } from './pages/Detail'
import { Player } from './components/Player'

function App() {

  //API
  const [playlists, setPlaylists] = useState([])
  //Carregamento de dados
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(' http://localhost:3000/playlists');
      const data = await res.json();
      setPlaylists(data);
    }
    fetchData();
  }, [])


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MenuPlaylists playlists={playlists} />}>
            <Route path='/play/:id' element={<Detail />} />
          </Route>
        </Routes>
    
      </BrowserRouter>
    </>
  )
}

export default App
