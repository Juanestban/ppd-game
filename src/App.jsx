import { useState } from 'react'

import { Home } from './views/Home'
import { Game } from './views/Game'

export default function App() {
  const [view, setView] = useState('Home')

  const handleView = (typeView) => setView(typeView)

  return view === 'Home' ? <Home onClick={handleView} /> : <Game onClick={handleView} />
}
