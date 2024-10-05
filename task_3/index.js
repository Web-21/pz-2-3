function generateChessboard() {
    const chessboard = document.getElementById('chessboard');
    const rows = 8;
    const cols = 8;
    const colLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const pieces = {
        1: ['black-rook', 'black-knight', 'black-bishop', 'black-queen', 'black-king', 'black-bishop', 'black-knight', 'black-rook'],
        2: Array(cols).fill('black-pawn'),
        7: Array(cols).fill('white-pawn'),
        8: ['white-rook', 'white-knight', 'white-bishop', 'white-queen', 'white-king', 'white-bishop', 'white-knight', 'white-rook']
    };

    chessboard.appendChild(createLabel(''));
    colLabels.forEach(label => {
        const cell = document.createElement('div');
        cell.classList.add('iav-label');
        cell.textContent = label;
        chessboard.appendChild(cell);
    });
    chessboard.appendChild(createLabel(''));

    for (let row = 1; row <= rows; row++) {
        const rowLabelLeft = document.createElement('div');
        rowLabelLeft.classList.add('iav-label');
        rowLabelLeft.textContent = rows - row + 1;
        chessboard.appendChild(rowLabelLeft);

        for (let col = 0; col < cols; col++) {
            const square = document.createElement('div');
            square.classList.add('iav-square', (row + col) % 2 === 0 ? 'iav-light' : 'iav-dark');

            if (pieces[row]) {
                const img = document.createElement('img');
                img.src = `img/${pieces[row][col]}.png`;
                square.appendChild(img);
            }

            chessboard.appendChild(square);
        }

        const rowLabelRight = document.createElement('div');
        rowLabelRight.classList.add('iav-label');
        rowLabelRight.textContent = rows - row + 1;
        chessboard.appendChild(rowLabelRight);
    }

    chessboard.appendChild(createLabel(''));
    colLabels.forEach(label => {
        const cell = document.createElement('div');
        cell.classList.add('iav-label');
        cell.textContent = label;
        chessboard.appendChild(cell);
    });
    chessboard.appendChild(createLabel(''));
}

function createLabel(text) {
    const label = document.createElement('div');
    label.classList.add('iav-label');
    label.textContent = text;
    return label;
}

generateChessboard();