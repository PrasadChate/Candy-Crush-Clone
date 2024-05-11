import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { updateBoard } from "./store";
import { createBoard } from "./utils/createBoard";
import Board from "./components/Board";

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
  return (
    <div className="flex items-center justify-center h-screen">
      <Board />
    </div>
  );
}

export default App;
