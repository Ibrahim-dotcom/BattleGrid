import { useEffect, useState } from 'react'
import reactLogo from '/assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './account/Login'
import './account/Register'
import 'bootstrap/dist/css/bootstrap.min.css';

import Register from './account/Register'
import Button from 'react-bootstrap/Button';
import NavBar from './components/NavBar'
import Games from './components/Games/Games'
import FreeFire from '/assets/images/freefire1.jpg'
import GameChars from '/assets/images/gamechars.jpg'
import AnimeChar from '/assets/images/anime_main_char.jpg'
import Warship from '/assets/images/world_of_warship.jpg'
import AssassinsCreed from '/assets/images/assassins-creed.avif'
import CODM from '/assets/images/codm.webp'


function App() {
  const [count, setCount] = useState(0)
  const urls = [FreeFire, GameChars, Warship, AssassinsCreed, CODM]

  const changeBackground = (currentUrl) => {
    //const urls = [FreeFire, GameChars, AnimeChar]
    const gradient = 'linear-gradient(rgba(0, 0, 15, 0.95), rgba(0, 0, 0,0)),'
    const homeScreen = document.querySelector(".main-wrapper");
    homeScreen.style.backgroundImage = `${gradient}url(${currentUrl})`
  }


  useEffect(() => {
    console.log('in useeffect')
        const currentUrl = urls[Math.floor(Math.random() * urls.length)];
        changeBackground(currentUrl)
  }, [])

  // setInterval(() =>{
  //   setCount(count => (count + 1) % urls.length)
  //   const currentUrl = urls[Math.floor(Math.random() * urls.length)];
  //   console.log('in here', currentUrl)
  //   changeBackground(currentUrl)

  // }, 3000)

  return (
    <>
    <div className='main-wrapper'>
      {/* <div className='loading100'>
      </div> */}
      <NavBar />
      {/* <h1>Gear Up & Win Battles Discover Gaming Universes!</h1> */}
      <h1 style={{fontFamily: 'monospace'}}>BATTLE GRID</h1>
      <p>Gear up for triumphant battle and unearth diverse gaming universes! embark on thrilling adventures, conquer challenges and emerge victorious.</p>
      <Button as ="a" variant='primary' style={{padding: 15  }} href='#games'>GET STARTED</Button>
      {/* <div class="player"><span>Play</span></div> */}
    </div>
    <div id='games'>
      <Games />
    </div>
    </>
  )
}

export default App
