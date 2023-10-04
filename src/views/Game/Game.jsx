import cn from 'classnames'

import GameViewModel from './Game.viewModel'
import { BUTTONS } from '../../constants'
import HandIcon from '../../components/Hand'

function Game({ loops, onClick }) {
  const { user, tried, handleClickOption, handleSubmit } = GameViewModel({ loops })

  const handleClickSubmit = () => {
    handleSubmit(() => {
      onClick('Home')
    })
  }

  return (
    <div id="game" className="container" style={{ flexDirection: 'column' }}>
      <div className="content">
        <div className="wrapImg">
          <HandIcon width="100px" height="100px" fill="#fff" />
          <HandIcon
            width="100px"
            height="100px"
            fill="#fff"
            style={{ transform: 'rotate(180deg)' }}
          />
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          {Array.from({ length: loops }).map((_, index) => (
            <span
              key={index}
              style={{
                display: 'block',
                width: 10,
                height: 10,
                borderRadius: '50%',
                border: '1px solid white',
                backgroundColor: tried === index ? 'white' : 'transparent',
              }}
            />
          ))}
        </div>
        {BUTTONS.map(({ title, name, svg }, index) => (
          <button
            key={index}
            name={name}
            className={cn(user === name && 'selected', 'button btn')}
            onClick={handleClickOption}
          >
            <span className="wrapImgText">
              <img className="svg" src={svg} alt="image" /> {title}
            </span>
            <span></span>
          </button>
        ))}
      </div>
      <button
        className={cn('btnLanzar button', !user && 'isHidden')}
        onClick={handleClickSubmit}
        disabled={!user}
      >
        Lanzar
      </button>
    </div>
  )
}

export default Game
