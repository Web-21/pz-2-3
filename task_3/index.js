// Функція для створення шахової дошки
function generateChessboard() {
    const chessboard = document.getElementById('chessboard');
    const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const pieces = {
        // Чорні фігури (верхня частина дошки)
        'A8': 'black-rook', 'B8': 'black-knight', 'C8': 'black-bishop', 'D8': 'black-queen',
        'E8': 'black-king', 'F8': 'black-bishop', 'G8': 'black-knight', 'H8': 'black-rook',
        'A7': 'black-pawn', 'B7': 'black-pawn', 'C7': 'black-pawn', 'D7': 'black-pawn',
        'E7': 'black-pawn', 'F7': 'black-pawn', 'G7': 'black-pawn', 'H7': 'black-pawn',
    
        // Білі фігури (нижня частина дошки)
        'A2': 'white-pawn', 'B2': 'white-pawn', 'C2': 'white-pawn', 'D2': 'white-pawn',
        'E2': 'white-pawn', 'F2': 'white-pawn', 'G2': 'white-pawn', 'H2': 'white-pawn',
        'A1': 'white-rook', 'B1': 'white-knight', 'C1': 'white-bishop', 'D1': 'white-queen',
        'E1': 'white-king', 'F1': 'white-bishop', 'G1': 'white-knight', 'H1': 'white-rook',
    };
    

    // Додаємо верхні мітки (A-H)
    chessboard.appendChild(document.createElement('div')); 
    columns.forEach(col => {
        const label = document.createElement('div');
        label.className = 'label';
        label.textContent = col;
        chessboard.appendChild(label);
    });

    // Генеруємо шахову дошку
    for (let row = 1; row <= 8; row++) {
        // Додаємо мітки рядків (1-8)
        const rowLabel = document.createElement('div');
        rowLabel.className = 'label';
        rowLabel.textContent = row;
        chessboard.appendChild(rowLabel);

        // Додаємо клітинки
        for (let col = 0; col < 8; col++) {
            const cell = document.createElement('div');
            const isBlack = (row + col) % 2 === 0;
            cell.className = `cell ${isBlack ? 'black' : 'white'}`;
            
            // Додаємо шахові фігури
            const position = `${columns[col]}${row}`;
            if (pieces[position]) {
                const piece = document.createElement('img');
                piece.src = `img/${pieces[position]}.png`;
                piece.alt = pieces[position];
                piece.className = 'piece';
                cell.appendChild(piece);
            }

            chessboard.appendChild(cell);
        }
    }
}


generateChessboard();
