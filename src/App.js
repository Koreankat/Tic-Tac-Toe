import "./App.css"
import Menu from "./components/Menu"
import Game from "./components/Game"
import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import GameEnded from "./components/GameEnded"
import Restart from "./components/Restart"

function App() {
  const [gameType, setGameType] = useState("")
  const [playerMark, setPlayerMark] = useState("x")
  const [results, setResults] = useState([0, 0, 0])
  const [gameActive, setGameActive] = useState(true)
  const [gameState, setGameState] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ])
  const [playerTurn, setPlayerTurn] = useState("x")
  const [gameModalActive, setGameModalActive] = useState([false, null])
  const [restartModal, setRestartModal] = useState(false)

  const reset = () => {
    setGameActive(true)
    setGameState(["", "", "", "", "", "", "", "", ""])
    setPlayerTurn("x")
  }

  return (
    <div className='App'>
      <React.StrictMode>
        <Routes>
          <Route
            path='/'
            element={
              <Menu
                playerMark={playerMark}
                setPlayerMark={setPlayerMark}
                setGameType={setGameType}
              />
            }
          />
          <Route
            path='/game'
            element={
              <Game
                playerMark={playerMark}
                setPlayerMark={setPlayerMark}
                setModalActive={setGameModalActive}
                results={results}
                setResults={setResults}
                gameActive={gameActive}
                setGameActive={setGameActive}
                gameState={gameState}
                setGameState={setGameState}
                playerTurn={playerTurn}
                setPlayerTurn={setPlayerTurn}
                setRestartModal={setRestartModal}
                gameType={gameType}
              />
            }
          />
        </Routes>
        {gameModalActive[0] ? (
          <GameEnded
            playerMark={playerMark}
            reset={reset}
            setModalActive={setGameModalActive}
            setPlayerMark={setPlayerMark}
            setResults={setResults}
            gameModalActive={gameModalActive}
            gameType={gameType}
          />
        ) : null}
        {restartModal ? (
          <Restart
            setRestartModal={setRestartModal}
            reset={reset}
            setResults={setResults}
          />
        ) : null}
      </React.StrictMode>
    </div>
  )
}

export default App
