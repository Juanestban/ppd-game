import { useState } from 'react'

import { KEYWORDS, OPTIONS } from '../../constants'
import { random } from '../../utils/random'

function GameViewModel({ loops }) {
  const [config, setConfig] = useState({ user: undefined, result: undefined, tried: 0 })
  const { user, tried } = config

  const game = (player) => {
    const valueRandom = random(0, 2)
    const opponent = KEYWORDS[valueRandom]

    if (opponent === KEYWORDS[0] && player == KEYWORDS[2]) {
      return OPTIONS.LOOSE
    } else if (opponent === KEYWORDS[1] && player === KEYWORDS[0]) {
      return OPTIONS.LOOSE
    } else if (opponent === KEYWORDS[2] && player === KEYWORDS[1]) {
      return OPTIONS.LOOSE
    } else if (opponent === player) {
      return OPTIONS.TIE
    }

    return OPTIONS.WIN
  }

  const handleSubmit = (cb) => {
    const res = game(config.user)
    const tried = config.tried + 1

    alert(res)
    if (loops <= tried) {
      cb()
      return
    }

    setConfig({ ...config, result: res, tried })
  }

  const handleClickOption = ({ target: { name } }) => setConfig({ ...config, user: name })

  return {
    user,
    tried,
    handleSubmit,
    handleClickOption,
  }
}

export default GameViewModel
