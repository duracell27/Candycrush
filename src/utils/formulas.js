export const formulaForColumnOfFour = (boardSize) => {
  return boardSize * boardSize - (boardSize + boardSize + boardSize) - 1;
};

export const formulaForColumnOfThree = (boardSize) => {
  return boardSize * boardSize - (boardSize + boardSize) - 1;
};

export const formulaForMoveBelow = (boardSize) => {
  return boardSize * boardSize - boardSize - 1;
};

export const generateInvalidMoves = (boardSize, isFour = false) => {
  const invalidMoves = [];
  for (let i = boardSize; i <= boardSize * boardSize; i += boardSize) {
    if (isFour) invalidMoves.push(i - 3);
    invalidMoves.push(i - 2);
    invalidMoves.push(i - 1);
  }
  return invalidMoves;
};
