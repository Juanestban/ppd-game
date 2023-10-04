import { useState, useEffect, useCallback } from 'react'

import { Home } from './views/Home'
import { Game } from './views/Game'
import { DEFAULT_GAME_LOOP } from './constants'

export default function App() {
  const [view, setView] = useState('Home')
  const [loops, setLoops] = useState(DEFAULT_GAME_LOOP)

  const handleView = (typeView) => setView(typeView)

  const question = useCallback(() => {
    const response = window.prompt('Numbers of tries')
    const result = parseInt(response)

    if (!Number.isInteger(result)) {
      return question()
    }

    return result
  }, [])

  useEffect(() => {
    if (view !== 'Home') {
      const result = question()

      setLoops(result)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view])

  return view === 'Home' ? (
    <Home onClick={handleView} />
  ) : (
    <Game loops={loops} onClick={handleView} />
  )
}
