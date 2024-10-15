const button = document.getElementById("button");

button.addEventListener('click', () => {

    const container = document.createElement('div');
    container.id = 'container';
    container.classList.add('container');
    
    const chessboard = document.createElement('div');
    chessboard.classList.add('chessboard');

    const numbers = document.createElement('div');
    numbers.classList.add('numbers');
    numbers.innerHTML = `
        <div>8</div><div>7</div><div>6</div><div>5</div>
        <div>4</div><div>3</div><div>2</div><div>1</div>
    `;

    const board = document.createElement('div');
    board.classList.add('board');

    const tilesWithFigures = [
        { color: 'black', figure: 'black-rook' },
        { color: 'white', figure: 'black-knight' },
        { color: 'black', figure: 'black-bishop' },
        { color: 'white', figure: 'black-king' },
        { color: 'black', figure: 'black-queen' },
        { color: 'white', figure: 'black-bishop' },
        { color: 'black', figure: 'black-knight' },
        { color: 'white', figure: 'black-rook' },

        { color: 'white', figure: 'black-pawn' },
        { color: 'black', figure: 'black-pawn' },
        { color: 'white', figure: 'black-pawn' },
        { color: 'black', figure: 'black-pawn' },
        { color: 'white', figure: 'black-pawn' },
        { color: 'black', figure: 'black-pawn' },
        { color: 'white', figure: 'black-pawn' },
        { color: 'black', figure: 'black-pawn' },

        { color: 'black', figure: '' },
        { color: 'white', figure: '' },
        { color: 'black', figure: '' },
        { color: 'white', figure: '' },
        { color: 'black', figure: '' },
        { color: 'white', figure: '' },
        { color: 'black', figure: '' },
        { color: 'white', figure: '' },

        { color: 'white', figure: '' },
        { color: 'black', figure: '' },
        { color: 'white', figure: '' },
        { color: 'black', figure: '' },
        { color: 'white', figure: '' },
        { color: 'black', figure: '' },
        { color: 'white', figure: '' },
        { color: 'black', figure: '' },

        { color: 'black', figure: '' },
        { color: 'white', figure: '' },
        { color: 'black', figure: '' },
        { color: 'white', figure: '' },
        { color: 'black', figure: '' },
        { color: 'white', figure: '' },
        { color: 'black', figure: '' },
        { color: 'white', figure: '' },

        { color: 'white', figure: '' },
        { color: 'black', figure: '' },
        { color: 'white', figure: '' },
        { color: 'black', figure: '' },
        { color: 'white', figure: '' },
        { color: 'black', figure: '' },
        { color: 'white', figure: '' },
        { color: 'black', figure: '' },

        { color: 'black', figure: 'white-pawn' },
        { color: 'white', figure: 'white-pawn' },
        { color: 'black', figure: 'white-pawn' },
        { color: 'white', figure: 'white-pawn' },
        { color: 'black', figure: 'white-pawn' },
        { color: 'white', figure: 'white-pawn' },
        { color: 'black', figure: 'white-pawn' },
        { color: 'white', figure: 'white-pawn' },

        { color: 'white', figure: 'white-rook' },
        { color: 'black', figure: 'white-knight' },
        { color: 'white', figure: 'white-bishop' },
        { color: 'black', figure: 'white-king' },
        { color: 'white', figure: 'white-queen' },
        { color: 'black', figure: 'white-bishop' },
        { color: 'white', figure: 'white-knight' },
        { color: 'black', figure: 'white-rook' },
    ];

    tilesWithFigures.forEach(tile => {
        const tileElement = document.createElement('div');
        tileElement.classList.add('tile', tile.color);
        
        if (tile.figure) {
            const figureElement = document.createElement('div');
            figureElement.classList.add(tile.figure, 'figure');
            tileElement.appendChild(figureElement);
        }

        board.appendChild(tileElement);
    });

    const letters = document.createElement('div');
    letters.classList.add('letters');
    letters.innerHTML = `
        <div>a</div><div>b</div><div>c</div><div>d</div>
        <div>e</div><div>f</div><div>g</div><div>h</div>
    `;

    chessboard.appendChild(numbers);
    chessboard.appendChild(board);
    container.appendChild(chessboard);
    container.appendChild(letters);

    
    const mainblock = document.getElementById('main');
    mainblock.appendChild(container);
});