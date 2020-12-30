let generateBoard = function(white, black) {
  let board = [];
  for (let y = 0; y < 8; y++) {
    let row = [];
    for (let x = 0; x < 8; x++) {
      if ((white[0] === y && white[1] === x) || (black[0] === y && black[1] === x)) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    board.push(row);
  }
  return board;
};

let queenThreat = function(board) {
  for (let y = 0; y < 8; y++) {
    let rowX = 0;
    let rowY = 0;
    let diag1 = 0;
    let diag2 = 0;
    for (let x = 0; x < 8; x++) {
      //Same horizontal
      rowX += board[y][x];
      //Same vertical
      rowY += board[x][y];
      if (rowY === 2 || rowX === 2) {
        return true;
      }
      // Same diagonal
      if (board[y][x] === 1) {
        for (let i = y, j = x; i < (7 - y), j > -1; i++, j--) {
          diag1 += board[j][j];
          diag2 += board[j][i];
          if (diag1 === 2 || diag2 === 2) {
            return true;
          }
        }
      }
    }
  }
  return false;
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));