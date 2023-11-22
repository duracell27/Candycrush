export const isColumnOfFour = (newBoard, boardSize, formulaForColumnOfFour) => {
  for (let i = 0; i <= formulaForColumnOfFour; i++) {
    const columnOfFour = [
      i,
      i + boardSize,
      i + boardSize * 2,
      i + boardSize * 3,
    ];
    const decidedColor = newBoard[i];
    const isBlank = newBoard[i] === "";
    if (
      columnOfFour.every(
        (candy) => newBoard[candy] === decidedColor && !isBlank
      )
    ) {
      columnOfFour.forEach((candy) => (newBoard[candy] = ""));
      return true;
    }
  }
};

export const isColumnOfThree = (
  newBoard,
  boardSize,
  formulaForColumnOfThree
) => {
  for (let i = 0; i <= formulaForColumnOfThree; i++) {
    const columnOfThree = [i, i + boardSize, i + boardSize * 2];
    const decidedColor = newBoard[i];
    const isBlank = newBoard[i] === "";
    if (
      columnOfThree.every(
        (candy) => newBoard[candy] === decidedColor && !isBlank
      )
    ) {
      columnOfThree.forEach((candy) => (newBoard[candy] = ""));
      return true;
    }
  }
};

export const checkForRowOfFour = (newBoard, boardSize, invalidMoves) => {
  for (let i = 0; i < boardSize * boardSize; i++) {
    const rowOfFour = [i, i + 1, i + 2, i + 3];
    const decidedColor = newBoard[i];
    const isBlank = newBoard[i] === "";
    if (invalidMoves.includes(i)) continue;
    if (
      rowOfFour.every((candy) => newBoard[candy] === decidedColor && !isBlank)
    ) {
      rowOfFour.forEach((candy) => (newBoard[candy] = ""));
      return true;
    }
  }
};

export const checkForRowOfThree = (newBoard, boardSize, invalidMoves) => {
  for (let i = 0; i < boardSize * boardSize; i++) {
    const rowOfThree = [i, i + 1, i + 2];
    const decidedColor = newBoard[i];
    const isBlank = newBoard[i] === "";
    if (invalidMoves.includes(i)) continue;
    if (
      rowOfThree.every((candy) => newBoard[candy] === decidedColor && !isBlank)
    ) {
      rowOfThree.forEach((candy) => (newBoard[candy] = ""));
      return true;
    }
  }
};
