import React from "react"
import { Link } from "react-router-dom"
import "../styles/menu.css"

function Menu({ playerMark, setPlayerMark, setGameType }) {
  const changePlayerMark = (clicked) => {
    if (playerMark === "o" && clicked === "x") {
      setPlayerMark("x")
    }
    if (playerMark === "x" && clicked === "o") {
      setPlayerMark("o")
    }
  }

  return (
    <div className='menu'>
      <div className='logo'>
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
      <div className='pick'>
        <h1>Pick player 1's mark</h1>
        <div className='button'>
          <div
            className={`x ${playerMark === "x" ? "active" : ""}`}
            onClick={() => {
              changePlayerMark("x")
            }}
          >
            <svg width='64' height='64' xmlns='http://www.w3.org/2000/svg'>
              <path d='M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z' />
            </svg>
          </div>
          <div
            className={`o ${playerMark === "o" ? "active" : ""}`}
            onClick={() => {
              changePlayerMark("o")
            }}
          >
            <svg width='64' height='64' xmlns='http://www.w3.org/2000/svg'>
              <path d='M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z' />
            </svg>
          </div>
          <div
            className={`background ${playerMark === "o" ? "" : "left"}`}
          ></div>
        </div>
        <p>Remember: X goes first</p>
      </div>
      <div className='buttons'>
        <Link to='/game'>
          <button
            className='cpu'
            onClick={() => {
              setGameType("cpu")
            }}
          >
            New game (vs cpu)
          </button>
        </Link>
        <Link to='/game'>
          <button
            className='player'
            onClick={() => {
              setGameType("player")
            }}
          >
            New game (vs player)
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Menu
