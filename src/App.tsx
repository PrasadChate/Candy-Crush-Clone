import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { updateBoard } from "./store";
import { createBoard } from "./utils/createBoard";
import Board from "./components/Board";
import {
  checkForRowOfFour,
  checkForRowOfThree,
  isColumnOffour,
  isColumnOfThree,
} from "./utils/moveCheckLogic";
import {
  formulaForColumnOffour,
  formulaForColumnOfThree,
  generateInvalidMoves,
} from "./utils/formulas";

function App() {
  const dispatch = useAppDispatch();
  const board = useAppSelector(({ candyCrush: { board } }) => board);
  const boardSize = useAppSelector(
    ({ candyCrush: { boardSize } }) => boardSize
  );
  useEffect(() => {
    dispatch(updateBoard(createBoard(boardSize)));
    // console.log(createBoard(boardSize));
  }, [boardSize, dispatch]);

  // pop up 4 or 3 consecutive same candies in row or column
  useEffect(() => {
    const timeout = setTimeout(() => {
      const newBoard = [...board];
      isColumnOffour(newBoard, boardSize, formulaForColumnOffour(boardSize));
      checkForRowOfFour(
        newBoard,
        boardSize,
        generateInvalidMoves(boardSize, true)
      );
      isColumnOfThree(newBoard, boardSize, formulaForColumnOfThree(boardSize));
      checkForRowOfThree(newBoard, boardSize, generateInvalidMoves(boardSize));

      dispatch(updateBoard(newBoard));
    }, 150);
    return () => clearInterval(timeout);
  }, [board, boardSize, dispatch]);
  return (
    <div className="flex items-center justify-center h-screen">
      <Board />
    </div>
  );
}

export default App;
