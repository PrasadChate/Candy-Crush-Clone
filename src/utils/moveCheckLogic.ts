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
