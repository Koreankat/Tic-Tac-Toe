import React from "react"
import "../styles/modal.css"

function Restart({ setRestartModal, reset, setResults }) {
  return (
    <div className='modal-wrapper'>
      <div className='modal restart'>
        <div className='takes-round restart' style={{ color: "#A8BFC9" }}>
          Restart game?
        </div>
        <div className='selection-buttons'>
          <button
            className='quit restart'
            onClick={() => {
              setRestartModal(false)
            }}
          >
            No, cancel
          </button>
          <button
            className='next-round restart'
            onClick={() => {
              setRestartModal(false)
              reset()
              setResults([0, 0, 0])
            }}
          >
            Yes, restart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Restart
