function generateChessboard() {
    const chessboard = document.getElementById('chessboard');
    const rows = 8;
    const cols = 8;
    const colLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const pieces = {
        'A8': 'black-rook', 'B8': 'black-knight', 'C8': 'black-bishop', 'D8': 'black-queen',
        'E8': 'black-king', 'F8': 'black-bishop', 'G8': 'black-knight', 'H8': 'black-rook',
        'A7': 'black-pawn', 'B7': 'black-pawn', 'C7': 'black-pawn', 'D7': 'black-pawn',
        'E7': 'black-pawn', 'F7': 'black-pawn', 'G7': 'black-pawn', 'H7': 'black-pawn',
        'A2': 'white-pawn', 'B2': 'white-pawn', 'C2': 'white-pawn', 'D2': 'white-pawn',
        'E2': 'white-pawn', 'F2': 'white-pawn', 'G2': 'white-pawn', 'H2': 'white-pawn',
        'A1': 'white-rook', 'B1': 'white-knight', 'C1': 'white-bishop', 'D1': 'white-queen',
        'E1': 'white-king', 'F1': 'white-bishop', 'G1': 'white-knight', 'H1': 'white-rook',
    };

    chessboard.appendChild(document.createElement('div'));
    colLabels.forEach(label => {
        const labelDiv = document.createElement('div');
        labelDiv.classList.add('label');
        labelDiv.textContent = label;
        chessboard.appendChild(labelDiv);
    });
    chessboard.appendChild(document.createElement('div'));

    for (let row = 1; row <= rows; row++) {
        const rowLabelLeft = document.createElement('div');
        rowLabelLeft.classList.add('label');
        rowLabelLeft.textContent = rows - row + 1;
        chessboard.appendChild(rowLabelLeft);

        for (let col = 0; col < cols; col++) {
            const square = document.createElement('div');
            square.classList.add('square', (row + col) % 2 === 0 ? 'light' : 'dark');

            const position = `${colLabels[col]}${rows - row + 1}`;
            if (pieces[position]) {
                const img = document.createElement('img');
                img.src = `img/${pieces[position]}.png`;
                img.alt = pieces[position];
                img.classList.add('piece');
                square.appendChild(img);
            }

            chessboard.appendChild(square);
        }

        const rowLabelRight = document.createElement('div');
        rowLabelRight.classList.add('label');
        rowLabelRight.textContent = rows - row + 1;
        chessboard.appendChild(rowLabelRight);
    }

    chessboard.appendChild(document.createElement('div'));
    colLabels.forEach(label => {
        const labelDiv = document.createElement('div');
        labelDiv.classList.add('label');
        labelDiv.textContent = label;
        chessboard.appendChild(labelDiv);
    });
    chessboard.appendChild(document.createElement('div'));
}

generateChessboard();
