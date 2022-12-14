import React, { useEffect } from "react"
import "../styles/game.css"
import Box from "./Box"
import Results from "./Results"

function Game({
  playerMark,
  setPlayerMark,
  setModalActive,
  results,
  setResults,
  gameActive,
  setGameActive,
  gameState,
  setGameState,
  playerTurn,
  setPlayerTurn,
  setRestartModal,
  gameType,
}) {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  const handleResultValidation = (gameStateCopy) => {
    let roundWon = false
    for (let i = 0; i <= 7; i++) {
      const winCondition = winningConditions[i]

      let a = gameStateCopy[winCondition[0]]
      let b = gameStateCopy[winCondition[1]]
      let c = gameStateCopy[winCondition[2]]
      if (a === "" || b === "" || c === "") {
        continue
      }
      if (a === b && b === c) {
        setModalActive([true, playerTurn])
        roundWon = true
        break
      }
    }
    if (roundWon) {
      setGameActive(false)
      let resultsCopy = [...results]
      if (playerTurn === "x") {
        resultsCopy[0] += 1
        setResults(resultsCopy)
      } else {
        resultsCopy[2] += 1
        setResults(resultsCopy)
      }
      return true
    }
    let roundDraw = !gameStateCopy.includes("")
    if (roundDraw) {
      setGameActive(false)
      setModalActive([true, "tie"])
      let resultsCopy = [...results]
      resultsCopy[1] += 1
      setResults(resultsCopy)
      return true
    }
    return false
  }
  const handleCpu = () => {
    setTimeout(() => {
      const newTurn = playerTurn === "o" ? "x" : "o"
      setPlayerTurn(newTurn)
      let freeIndexes = []
      for (let i = 0; i < gameState.length; i++) {
        if (gameState[i] === "" || gameState === undefined) {
          freeIndexes.push(i)
        }
      }
      let drawn = Math.floor(Math.random() * freeIndexes.length)

      let gameStateCopy = [...gameState]
      gameStateCopy[freeIndexes[drawn]] = playerTurn
      setGameState(gameStateCopy)
      const finished = handleResultValidation(gameStateCopy)
      if (!finished) {
        const newTurn = playerTurn === "o" ? "x" : "o"
        setPlayerTurn(newTurn)
      }
    }, 1000)
  }

  const handleCellPlayed = (boxId) => {
    let gameStateCopy = [...gameState]
    gameStateCopy[boxId] = gameType === "player" ? playerTurn : playerMark
    setGameState(gameStateCopy)
    const finished = handleResultValidation(gameStateCopy)
    if (!finished) {
      const newTurn = playerTurn === "o" ? "x" : "o"
      setPlayerTurn(newTurn)
    }
  }

  const handleClick = (boxId) => {
    if (gameType === "cpu") {
      if (gameState[boxId] !== "" || !gameActive || playerMark !== playerTurn) {
        return
      }
    }
    if (gameType === "player") {
      if (gameState[boxId] !== "" || !gameActive) {
        return
      }
    }

    handleCellPlayed(boxId)
  }

  useEffect(() => {
    if (playerTurn === playerMark || !gameActive || gameType === "player") {
      return
    }
    handleCpu()
  })

  let boxes = []
  for (let i = 0; i < 9; i++) {
    boxes.push(
      <Box
        key={i}
        boxId={i}
        handleClick={handleClick}
        gameState={gameState}
        playerMark={playerMark}
        playerTurn={playerTurn}
        gameType={gameType}
      />
    )
  }

  let turn = ""
  if (playerTurn === "x") {
    turn = (
      <svg width='64' height='64' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z'
          fill='#A8A8A8'
          fillRule='evenodd'
        />
      </svg>
    )
  } else if (playerTurn === "o") {
    turn = (
      <svg width='64' height='64' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z'
          fill='#A8A8A8'
        />
      </svg>
    )
  }

  return (
    <div className='game'>
      <div className='top-panel'>
        <div className='panel-logo'>
          <svg width='72' height='32' xmlns='http://www.w3.org/2000/svg'>
            <g fill='none' fillRule='evenodd'>
              <path
                d='M8.562 1.634 16 9.073l7.438-7.439a3 3 0 0 1 4.243 0l2.685 2.685a3 3 0 0 1 0 4.243L22.927 16l7.439 7.438a3 3 0 0 1 0 4.243l-2.685 2.685a3 3 0 0 1-4.243 0L16 22.927l-7.438 7.439a3 3 0 0 1-4.243 0L1.634 27.68a3 3 0 0 1 0-4.243L9.073 16 1.634 8.562a3 3 0 0 1 0-4.243L4.32 1.634a3 3 0 0 1 4.243 0Z'
                fill='#31C3BD'
              />
              <path
                d='M56.1 0c8.765 0 15.87 7.106 15.87 15.87 0 8.766-7.105 15.871-15.87 15.871-8.765 0-15.87-7.105-15.87-15.87C40.23 7.106 47.334 0 56.1 0Zm0 9.405a6.466 6.466 0 1 0 0 12.931 6.466 6.466 0 0 0 0-12.931Z'
                fill='#F2B137'
                fillRule='nonzero'
              />
            </g>
          </svg>
        </div>
        <div className='turn-info'>
          <div className='svg-wrapper'>{turn}</div>
          <span>Turn</span>
        </div>
        <button
          className='restart-button'
          onClick={() => {
            setRestartModal(true)
          }}
        >
          <svg width='20' height='20' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M19.524 0h-1.88a.476.476 0 0 0-.476.499l.159 3.284A9.81 9.81 0 0 0 9.835.317C4.415.317-.004 4.743 0 10.167.004 15.597 4.406 20 9.835 20a9.796 9.796 0 0 0 6.59-2.536.476.476 0 0 0 .019-.692l-1.348-1.349a.476.476 0 0 0-.65-.022 6.976 6.976 0 0 1-9.85-.63 6.987 6.987 0 0 1 .63-9.857 6.976 6.976 0 0 1 10.403 1.348l-4.027-.193a.476.476 0 0 0-.498.476v1.881c0 .263.213.476.476.476h7.944A.476.476 0 0 0 20 8.426V.476A.476.476 0 0 0 19.524 0Z'
              fill='#1F3641'
            />
          </svg>
        </button>
      </div>
      <div className='board'>{boxes}</div>
      <Results results={results} playerMark={playerMark} gameType={gameType} />
    </div>
  )
}

export default Game
