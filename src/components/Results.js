import React from "react"

function Results({ results, playerMark, gameType }) {
  return (
    <>
      {gameType === "cpu" ? (
        <div className='results'>
          <div className='you-result cross'>
            <span>X {playerMark === "x" ? "(You)" : "(Cpu)"}</span>
            <div className='you-score'>{results[0]}</div>
          </div>
          <div className='ties'>
            <span>Ties</span>
            <div className='ties-score'>{results[1]}</div>
          </div>
          <div className='cpu-results circle'>
            <span>O {playerMark === "o" ? "(You)" : "(Cpu)"}</span>
            <div className='cpu-score'>{results[2]}</div>
          </div>
        </div>
      ) : (
        <div className='results'>
          <div className='you-result cross'>
            <span>X {playerMark === "x" ? "(P1)" : "(P2)"}</span>
            <div className='you-score'>{results[0]}</div>
          </div>
          <div className='ties'>
            <span>Ties</span>
            <div className='ties-score'>{results[1]}</div>
          </div>
          <div className='cpu-results circle'>
            <span>O {playerMark === "x" ? "(P2)" : "(P1)"}</span>
            <div className='cpu-score'>{results[2]}</div>
          </div>
        </div>
      )}
    </>
  )
}
export default Results
