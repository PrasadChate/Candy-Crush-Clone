import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { updateBoard } from "./store";
import { createBoard } from "./utils/createBoard";
import Board from "./components/Board";
import { isColumnOffour } from "./utils/moveCheckLogic";
import { formulaForColumnOffour } from "./utils/formulas";

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

  // implementing the 4 column similarity
  useEffect(() => {
    const timeout = setTimeout(() => {
      const newBoard = [...board];
      isColumnOffour(newBoard, boardSize, formulaForColumnOffour(boardSize));
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
