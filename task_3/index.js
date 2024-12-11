
let chest = document.getElementById('chest');
let rows = 8;
let cols = 8;
let colLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let pieces = {
    1: ['blk-rook', 'blk-knight', 'blk-bishop', 'blk-queen', 'blk-king', 'blk-bishop', 'blk-knight', 'blk-rook'],
    2: ['blk-pawn', 'blk-pawn', 'blk-pawn', 'blk-pawn', 'blk-pawn', 'blk-pawn', 'blk-pawn', 'blk-pawn'],
    7: ['wht-pawn', 'wht-pawn', 'wht-pawn', 'wht-pawn', 'wht-pawn', 'wht-pawn', 'wht-pawn', 'wht-pawn'],
    8: ['wht-rook', 'wht-knight', 'wht-bishop', 'wht-queen', 'wht-king', 'wht-bishop', 'wht-knight', 'wht-rook']
};
chest.appendChild(createSimpleLabel(''));
for (let i = 0; i < colLabels.length; i++) {
    let cell = document.createElement('div');
    cell.className = 'eam_label';
    cell.innerText = colLabels[i];
    chest.appendChild(cell);
}
chest.appendChild(createSimpleLabel(''));
for (let row = 1; row <= rows; row++) {
    let rowLabelLeft = document.createElement('div');
    rowLabelLeft.className = 'eam_label';
    rowLabelLeft.innerText = rows - row + 1;
    chest.appendChild(rowLabelLeft);
    for (let col = 0; col < cols; col++) {
        let square = document.createElement('div');
        square.className = 'eam_square';
        if ((row + col) % 2 === 0) {
            square.classList.add('eam_light');
        } else {
            square.classList.add('eam_dark');
        }
        if (pieces[row]) {
            let img = document.createElement('img');
            img.src = 'img/' + pieces[row][col] + '.png';
            square.appendChild(img);
        }
        chest.appendChild(square);
    }
    let rowLabelRight = document.createElement('div');
    rowLabelRight.className = 'eam_label';
    rowLabelRight.innerText = "";
    chest.appendChild(rowLabelRight);
}


function createSimpleLabel(text) {
    let label = document.createElement('div');
    label.className = 'eam_label';
    label.innerText = text;
    return label;
}

