import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { moveBelow, updateBoard } from "./store";
import { createBoard } from "./utils/createBoatd";
import Board from "./componets/Board";
import { checkForRowOfFour, checkForRowOfThree, isColumnOfFour, isColumnOfThree } from "./utils/moveCheckLogic";
import { formulaForColumnOfFour, formulaForColumnOfThree, generateInvalidMoves } from "./utils/formulas";

function App() {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.candyCrush.board);
  const boardSize = useSelector((state) => state.candyCrush.boardSize);

  useEffect(() => {
    dispatch(updateBoard(createBoard(boardSize)));
  }, [boardSize, dispatch]);

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      const newBoard = [...board]
      isColumnOfFour(newBoard, boardSize, formulaForColumnOfFour(boardSize))
      checkForRowOfFour(newBoard, boardSize, generateInvalidMoves(boardSize, true))

      isColumnOfThree(newBoard, boardSize, formulaForColumnOfThree(boardSize))
      checkForRowOfThree(newBoard, boardSize, generateInvalidMoves(boardSize, false))
      
      dispatch(updateBoard(newBoard));
      dispatch(moveBelow())
    },100)
    return () => clearInterval(timeout)
  },[board,boardSize, dispatch])
  return (
    <div className="flex items-center justify-center h-screen">
      <Board />
    </div>
  );
}

export default App;
