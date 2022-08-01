import React from "react"

function Box({
  boxId,
  handleClick,
  gameState,
  playerMark,
  gameType,
  playerTurn,
}) {
  let taken = ""
  let playerMarkBackground = ""
  let gameStateCopy = [...gameState]
  if (gameStateCopy[boxId] === "o") {
    taken = "o-taken"
  } else if (gameStateCopy[boxId] === "x") {
    taken = "x-taken"
  }

  if (
    (playerMark === "x" && gameType === "cpu") ||
    (playerTurn === "x" && gameType === "player")
  ) {
    playerMarkBackground = "x-player"
  } else if (
    (playerMark === "o" && gameType === "cpu") ||
    (playerTurn === "o" && gameType === "player")
  ) {
    playerMarkBackground = "o-player"
  }
  return (
    <div
      className={`box ${taken} ${playerMarkBackground}`}
      id={boxId}
      onClick={() => {
        handleClick(boxId)
      }}
    ></div>
  )
}

export default Box
