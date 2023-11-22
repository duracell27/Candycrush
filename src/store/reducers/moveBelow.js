import { candies } from "../../utils/candyData"
import { formulaForMoveBelow } from "../../utils/formulas"

export const moveBelowReducer = (state) =>{
    const newboard = [...state.board]
    const boardSize = state.boardSize

    let boardChanges = false

    const formulaForMove = formulaForMoveBelow(boardSize)

    for(let i = 0; i<=formulaForMove; i++){
        const firstRow = Array(boardSize).fill(0).map((_value, index)=>index)

        const isFirstRow = firstRow.includes(i)
        if(isFirstRow && newboard[i]===""){
            let randomNumber = Math.floor(Math.random() * candies.length)
            newboard[i] = candies[randomNumber]
            boardChanges = true
        }
        if(newboard[i+boardSize]===""){
            newboard[i+boardSize] = newboard[i]
            newboard[i]=""
            boardChanges=true
        }
        if(boardChanges) state.board = newboard
    }
}