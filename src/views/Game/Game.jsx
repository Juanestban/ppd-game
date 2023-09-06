import { useState } from 'react'

import GameViewModel from './Game.viewModel'

function Game({ onClick }) {
  const [choose, setChoose] = useState(undefined)
  const { result } = GameViewModel()

  const handleChoose = ({ target: { name } }) => setChoose(name)

  const handleSubmit = () => {
    onClick('Home')
  }

  return (
    <div id="game" className="container" style={{ flexDirection: 'column' }}>
      <div className="content">
        <div className="wrapImg">
          <img className="hand" src="src/assets/hand.svg" />
          <img className="hand" src="src/assets/hand.svg" />
        </div>
        <button className="button btn" name="piedra" onClick={handleChoose}>
          <span className="wrapImgText">
            <img className="svg" src="src/assets/piedra.svg" /> Piedra
          </span>
          <span></span>
        </button>
        <button className="button btn" name="papel" onClick={handleChoose}>
          <span className="wrapImgText">
            <img className="svg" src="src/assets/papel.svg" />
            Papel
          </span>
          <span></span>
        </button>
        <button className="button btn" name="tijeras" onClick={handleChoose}>
          <span className="wrapImgText">
            <img className="svg" src="src/assets/tijeras.svg" /> Tijeras
          </span>
          <span></span>
        </button>
      </div>
      {choose && (
        <button className="btnLanzar button" onClick={handleSubmit}>
          Lanzar
        </button>
      )}
    </div>
  )
}

export default Game
