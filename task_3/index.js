function generateChessboard() {
    const board = document.getElementById('chessboard');
    board.innerHTML = '';
    const pieces = {
        '1a': '♖', '1b': '♘', '1c': '♗', '1d': '♕', '1e': '♔', '1f': '♗', '1g': '♘', '1h': '♖',
        '2a': '♙', '2b': '♙', '2c': '♙', '2d': '♙', '2e': '♙', '2f': '♙', '2g': '♙', '2h': '♙',
        '8a': '♜', '8b': '♞', '8c': '♝', '8d': '♛', '8e': '♚', '8f': '♝', '8g': '♞', '8h': '♜',
        '7a': '♟', '7b': '♟', '7c': '♟', '7d': '♟', '7e': '♟', '7f': '♟', '7g': '♟', '7h': '♟'
    };
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let isBlack = false;
    for (let row = 8; row >= 1; row--) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.classList.add('square', isBlack ? 'black' : 'white');
            const position = row + letters[col];
            if (pieces[position]) {
                square.innerHTML = `<span class="piece">${pieces[position]}</span>`;
            }
            board.appendChild(square);
            isBlack = !isBlack;
        }
        isBlack = !isBlack;
    }
}