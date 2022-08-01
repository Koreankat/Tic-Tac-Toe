import React from "react"
import { Link } from "react-router-dom"
import "../styles/modal.css"

function GameEnded({
  playerMark,
  setModalActive,
  reset,
  setPlayerMark,
  setResults,
  gameModalActive,
  gameType,
}) {
  let svg = ""
  let fontColor = ""
  let takesText = "takes the round"
  let endText = ""
  if (gameModalActive[1] === "x") {
    svg = (
      <svg width='64' height='64' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z'
          fill='#31C3BD'
          fillRule='evenodd'
        />
      </svg>
    )
    fontColor = "#31C3BD"
  } else if (gameModalActive[1] === "o") {
    svg = (
      <svg width='64' height='64' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z'
          fill='#F2B137'
        />
      </svg>
    )
    fontColor = "#F2B137"
  } else {
    svg = null
    fontColor = "#A8BFC9"
    takesText = "round tied"
  }

  if (gameModalActive[1] === playerMark && gameType === "cpu") {
    endText = "you won!"
  } else if (gameModalActive[1] !== "tie" && gameType === "cpu") {
    endText = "oh no, you lost..."
  }

  if (
    gameModalActive[1] !== "tie" &&
    gameModalActive[1] !== playerMark &&
    gameType === "player"
  ) {
    endText = "Player 2 wins!"
  } else if (gameModalActive[1] !== "tie" && gameType === "player") {
    endText = "Player 1 wins!"
  }
  return (
    <div className='modal-wrapper'>
      <div className='modal'>
        <div className='result-info'>{endText}</div>
        <div className='takes-round' style={{ color: fontColor }}>
          <div className='playerMark'>{svg}</div>
          {takesText}
        </div>
        <div className='selection-buttons'>
          <Link to='/'>
            <button
              className='quit'
              onClick={() => {
                setModalActive([false, null])
                reset()
                setPlayerMark("x")
                setResults([0, 0, 0])
              }}
            >
              quit
            </button>
          </Link>
          <button
            className='next-round'
            onClick={() => {
              setModalActive([false, null])
              reset()
            }}
          >
            next round
          </button>
        </div>
      </div>
    </div>
  )
}

export default GameEnded
