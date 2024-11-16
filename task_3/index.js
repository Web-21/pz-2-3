document.addEventListener("DOMContentLoaded", () => {
    const chessboard = document.getElementById("chessboard");
  
    const initialPosition = [
      ["rook_black", "knight_black", "bishop_black", "queen_black", "king_black", "bishop_black", "knight_black", "rook_black"],
      Array(8).fill("pawn_black"),
      ...Array(4).fill(Array(8).fill(null)),
      Array(8).fill("pawn_white"),
      ["rook_white", "knight_white", "bishop_white", "queen_white", "king_white", "bishop_white", "knight_white", "rook_white"],
    ];
  
    const columns = "ABCDEFGH".split("");
  
    
    chessboard.innerHTML += `<div></div>`; 
    for (const col of columns) {
      chessboard.innerHTML += `<div class="label column">${col}</div>`;
    }
    chessboard.innerHTML += `<div></div>`; 
  
    for (let row = 0; row < 8; row++) {
      
      chessboard.innerHTML += `<div class="label row">${8 - row}</div>`;
  
      for (let col = 0; col < 8; col++) {
        const cell = document.createElement("div");
        cell.classList.add("cell", (row + col) % 2 === 0 ? "white" : "black");
  
        if (initialPosition[row][col]) {
          const img = document.createElement("img");
          img.src = `img/${initialPosition[row][col]}.png`;
          img.alt = initialPosition[row][col];
          cell.appendChild(img);
        }
  
        chessboard.appendChild(cell);
      }
  
      
      chessboard.innerHTML += `<div class="label row">${8 - row}</div>`;
    }
  
   
    chessboard.innerHTML += `<div></div>`; 
    for (const col of columns) {
      chessboard.innerHTML += `<div class="label column">${col}</div>`;
    }
    chessboard.innerHTML += `<div></div>`; 
  });
  