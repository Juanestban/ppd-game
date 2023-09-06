function Home({ onClick }) {
  const handleClick = () => onClick('Game')

  return (
    <div id="container" className="container">
      <div className="content">
        <div>
          <h1 className="title">Piedra, Papel o Tijeras</h1>
          <h3 className="h3">The Game</h3>
        </div>

        <button className="button buttonStart" onClick={handleClick}>
          Start
        </button>
      </div>
    </div>
  )
}

export default Home
