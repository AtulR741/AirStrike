import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Game from './Game.js'

export default function NavBar(props) {
    const [gameStarted, setGameStarted] = useState(false); // State to toggle game view

    const handlePlayClick = () => {
      setGameStarted(true); // Start the game when "Play" is clicked
    };
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" onClick={handlePlayClick} aria-current="page" href="/">{props.primary}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.secondary}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.about}</a>
              </li>
            </ul>
          </div>
        </div>
        {gameStarted && <Game/>}
      </nav>
    )
}

NavBar.propTypes = {
    title : PropTypes.string,
    primary : PropTypes.string,
    secondary : PropTypes.string,
    about : PropTypes.string
}