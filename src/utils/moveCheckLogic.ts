// column of 4
export const isColumnOffour = (
  newBoard: string[],
  boardSize: number,
  formulaForColumnOffour: number
) => {
  for (let i: number = 0; i <= formulaForColumnOffour; i++) {
    const columnOffour: number[] = [
      i,
      i + boardSize,
      i + boardSize * 2,
      i + boardSize * 3,
      //this is checking of consecutive 4 elements in the column
    ];
    const decidedColor: string = newBoard[i];
    const isBlank: boolean = newBoard[i] === "";

    // checking the match
    if (
      columnOffour.every(
        (candy: number) => newBoard[candy] === decidedColor && !isBlank
      )
    ) {
      // if matches then replacing it with blank spaces
      columnOffour.forEach((candy: number) => (newBoard[candy] = ""));
      return true;
    }
  }
};

// column of 3
export const isColumnOfThree = (
  newBoard: string[],
  boardSize: number,
  formulaForColumnOfThree: number
) => {
  for (let i: number = 0; i <= formulaForColumnOfThree; i++) {
    const columnOfThree: number[] = [
      i,
      i + boardSize,
      i + boardSize * 2,
      //this is checking of consecutive 4 elements in the column
    ];
    const decidedColor: string = newBoard[i];
    const isBlank: boolean = newBoard[i] === "";

    // checking the match
    if (
      columnOfThree.every(
        (candy: number) => newBoard[candy] === decidedColor && !isBlank
      )
    ) {
      // if matches then replacing it with blank spaces
      columnOfThree.forEach((candy: number) => (newBoard[candy] = ""));
      return true;
    }
  }
};

// row of 4
export const checkForRowOfFour = (
  newBoard: string[],
  boardSize: number,
  invalidMoves: number[]
) => {
  for (let i: number = 0; i < boardSize * boardSize; i++) {
    const rowOfFour = [i, i + 1, i + 2, i + 3];
    const decidedColor: string = newBoard[i];
    const isBlank: boolean = newBoard[i] === "";
    if (invalidMoves.includes(i)) continue;
    if (
      rowOfFour.every(
        (candy: number) => newBoard[candy] === decidedColor && !isBlank
      )
    ) {
      // if matches then replacing it with blank spaces
      rowOfFour.forEach((candy: number) => (newBoard[candy] = ""));
      return true;
    }
  }
};

// row of 3
export const checkForRowOfThree = (
  newBoard: string[],
  boardSize: number,
  invalidMoves: number[]
) => {
  for (let i: number = 0; i < boardSize * boardSize; i++) {
    const rowOfThree = [i, i + 1, i + 2];
    const decidedColor: string = newBoard[i];
    const isBlank: boolean = newBoard[i] === "";
    if (invalidMoves.includes(i)) continue;
    if (
      rowOfThree.every(
        (candy: number) => newBoard[candy] === decidedColor && !isBlank
      )
    ) {
      // if matches then replacing it with blank spaces
      rowOfThree.forEach((candy: number) => (newBoard[candy] = ""));
      return true;
    }
  }
};
