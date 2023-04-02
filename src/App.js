import React, { useState, useEffect } from 'react'
import Cell from './cell';

export default function App() {
  const values = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  const winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
  const [player, setPlayer] = useState('X')
  const [X, setX] = useState([])
  const [O, setO] = useState([])
  const [winner, setWinner] = useState(false)

  function check(player,condition){
    return player.includes(condition[0]) && player.includes(condition[1]) && player.includes(condition[2])
  }
  useEffect(() => {
    if (!winner) {
      if (X.length + O.length === 9)
        setWinner('Draw')
      winConditions.forEach((condition) => {
        if (check(X,condition)){
          setWinner('X')
        }
        else if (check(O,condition))
          setWinner('O')
      })
    }
  }, [X,O])

  function updateGrid(value) {
    player === 'X' ? setX([...X, value]) : setO([...O, value])
    setPlayer(player === 'X' ? 'o' : 'X')
  }
  function Status() {
    let result = false
    if (winner)
      winner === 'Draw' ? result = 'Draw' : result = `${winner} Wins`
    else if (player==='X')
      result = `X's Turn`
    else
      result=`O's Turn`
    return result
  }
  return (
    <>
      <h1 className={winner?`win`:``}>{Status()}
      </h1>
      <div className="container">
        {
          values.map(value => (
            <Cell handleClick={updateGrid} player={player} win={winner} key={value} value={value} />
          ))
        }
      </div></>
  )
}