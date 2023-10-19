// Estilos
import {
  BsFillHeartFill, BsPlayFill, BsStopFill,BsFillPauseFill
} from 'react-icons/bs'

export const Player = ({ currentMusic }) => {

  function stop() {
    meuPlayer.pause();
    meuPlayer.currentTime = 0;
  }

  function timeupdate() {
    const currentTime = meuPlayer.currentTime;
    const duration = meuPlayer.duration;
    const progress = (currentTime / duration) * 100;
    progressBar.value = progress;
  }

  function progress() {
    const duration = meuPlayer.duration;
    const seekTime = (progressBar.value / 100) * duration;
    meuPlayer.currentTime = seekTime;
  }

  return (

    <div className="player">

      <div className="container player-info">
        <div className="player-info__text">
          <h3>{currentMusic && currentMusic.name || <p>select a song</p>}</h3>
          <p>{currentMusic && currentMusic.artist || <p>select a song</p>}</p>
        </div>
        <BsFillHeartFill />
      </div>
      <div className='music-player'>
        <audio onTimeUpdate={timeupdate} id="meuPlayer" src={currentMusic && currentMusic.audio} type='audio/mp3' />
        <input onInput={progress} type="range" id="progressBar" min="0" max="100" value="0" />
        <div className='player-controls'>
          <button className="control-icon" onClick={() => { meuPlayer.play(); }} id="playButton"><BsPlayFill/></button>
          <button className="control-icon"  onClick={() => { meuPlayer.pause(); }} id="pauseButton"><BsFillPauseFill/></button>
          <button className="control-icon"  onClick={stop} id="stopButton"><BsStopFill/></button>
        </div>
      </div>
    </div>
  )
}
