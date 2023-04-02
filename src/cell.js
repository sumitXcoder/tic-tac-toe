import React, { useState } from 'react'

export default function Cell({ handleClick, player, win, value }) {
    const [playerTurn, setPlayerTurn] = useState('')
    return (
        <div onClick={() => {
            if (!win && playerTurn === '') {
                handleClick(value)
                setPlayerTurn(player)
                console.log(value)
            }
        }} className={playerClass(playerTurn)}>{playerTurn==='X'?'×':playerTurn}</div>
    )
}
function playerClass(playerTurn){
    if(playerTurn==='')
        return
    else if(playerTurn==='X')
        return 'playerX'
    else
        return 'playerO'
}