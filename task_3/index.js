const initialBoard = [
    ["black_rook", "black_knight", "black_bishop", "black_queen", "black_king", "black_bishop", "black_knight", "black_rook"],
    ["black_pawn", "black_pawn", "black_pawn", "black_pawn", "black_pawn", "black_pawn", "black_pawn", "black_pawn"],
    [],
    [],
    [],
    [],
    ["white_pawn", "white_pawn", "white_pawn", "white_pawn", "white_pawn", "white_pawn", "white_pawn", "white_pawn"],
    ["white_rook", "white_knight", "white_bishop", "white_queen", "white_king", "white_bishop", "white_knight", "white_rook"],
  ];
  
  function generateChessboard() {
    const chessboard = document.getElementById("chessboard");
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
  
    chessboard.appendChild(document.createElement("div")); 
    for (let col = 0; col < 8; col++) {
      const letterCell = document.createElement("div");
      letterCell.className = "column-letter";
      letterCell.textContent = letters[col];
      chessboard.appendChild(letterCell);
    }
  
    for (let row = 0; row < 8; row++) {
      const numberCell = document.createElement("div");
      numberCell.className = "row-number";
      numberCell.textContent = 8 - row;
      chessboard.appendChild(numberCell);
  
      for (let col = 0; col < 8; col++) {
        const square = document.createElement("div");
        square.className = "square " + ((row + col) % 2 === 0 ? "light" : "dark");
  
        const piece = initialBoard[row][col];
        if (piece) {
          const img = document.createElement("img");
          img.src = `img/${piece}.png`;
          img.alt = piece;
          square.appendChild(img);
        }
  
        chessboard.appendChild(square);
      }
    }
  }
  
  generateChessboard();
  