function generateChessboard(containerId) {
  const container = document.getElementById(containerId);
  container.className = 'chessboard';

  const rows = 8;
  const cols = 8;
  const pieces = {
    '1': ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    '2': ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    '7': ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    '8': ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
  };

  const pieceImages = {
    'R': 'https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg',
    'N': 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg',
    'B': 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg',
    'Q': 'https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg',
    'K': 'https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg',
    'P': 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg'
  };

  const blackPieceImages = {
    'R': 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg',
    'N': 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg',
    'B': 'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg',
    'Q': 'https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg',
    'K': 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg',
    'P': 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg'
  };

  container.appendChild(document.createElement('div'));
  for (let i = 0; i < cols; i++) {
    const label = document.createElement('div');
    label.className = 'cell label';
    label.textContent = String.fromCharCode(65 + i);
    container.appendChild(label);
  }

  for (let row = rows; row >= 1; row--) {
    const rowLabel = document.createElement('div');
    rowLabel.className = 'cell label';
    rowLabel.textContent = row;
    container.appendChild(rowLabel);

    for (let col = 0; col < cols; col++) {
      const cell = document.createElement('div');
      const isBlack = (row + col) % 2 === 1;
      cell.className = `cell ${isBlack ? 'black' : 'white'}`;

      if (pieces[row]) {
        const piece = pieces[row][col];
        const img = document.createElement('img');
        img.src = row <= 2 ? pieceImages[piece] : blackPieceImages[piece];
        cell.appendChild(img);
      }

      container.appendChild(cell);
    }
  }
}

generateChessboard('chessboardContainer');
