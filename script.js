// Define Sudoku boards for five levels
const sudokuLevels = [
    {
        name: 'Level 1',
        board: [
            [5, 3, 0, 0, 7, 0, 0, 0, 0],
            [6, 0, 0, 1, 9, 5, 0, 0, 0],
            [0, 9, 8, 0, 0, 0, 0, 6, 0],
            [8, 0, 0, 0, 6, 0, 0, 0, 3],
            [4, 0, 0, 8, 0, 3, 0, 0, 1],
            [7, 0, 0, 0, 2, 0, 0, 0, 6],
            [0, 6, 0, 0, 0, 0, 2, 8, 0],
            [0, 0, 0, 4, 1, 9, 0, 0, 5],
            [0, 0, 0, 0, 8, 0, 0, 7, 9]
        ],
        solution: [
            [5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9]
        ]
    },
    {
        name: 'Level 2',
        board: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 3, 0, 8, 5],
            [0, 0, 1, 0, 2, 0, 0, 0, 0],
            [0, 0, 0, 5, 0, 7, 0, 0, 0],
            [0, 0, 4, 0, 0, 0, 1, 0, 0],
            [0, 9, 0, 0, 0, 0, 0, 0, 0],
            [5, 0, 0, 0, 0, 0, 0, 7, 3],
            [0, 0, 2, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 4, 0, 0, 0, 9]
        ],
        solution: [
            [9, 8, 7, 6, 5, 4, 3, 2, 1],
            [2, 4, 6, 1, 7, 3, 9, 8, 5],
            [3, 5, 1, 8, 2, 9, 7, 4, 6],
            [8, 2, 9, 5, 3, 7, 4, 6, 1],
            [6, 3, 4, 9, 8, 2, 1, 5, 7],
            [7, 9, 5, 4, 6, 1, 8, 3, 2],
            [5, 1, 8, 2, 9, 6, 4, 7, 3],
            [4, 7, 2, 3, 1, 8, 6, 9, 5],
            [1, 6, 3, 7, 4, 5, 2, 1, 9]
        ]
    },
    
    {
        name: 'Level 3',
        board: [
            [0, 0, 0, 6, 0, 0, 4, 0, 0],
            [7, 0, 0, 0, 0, 3, 6, 0, 0],
            [0, 0, 0, 0, 9, 1, 0, 8, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 5, 0, 1, 8, 0, 0, 0, 3],
            [0, 0, 0, 3, 0, 6, 0, 4, 5],
            [0, 4, 0, 2, 0, 0, 0, 6, 0],
            [9, 0, 3, 0, 0, 0, 0, 0, 0],
            [0, 2, 0, 0, 0, 0, 1, 0, 0]
        ],
        solution: [
                    [5, 8, 1, 6, 7, 2, 4, 3, 9],
                    [7, 9, 2, 8, 4, 3, 6, 5, 1],
                    [3, 6, 4, 5, 9, 1, 7, 8, 2],
                    [4, 3, 8, 9, 5, 7, 2, 1, 6],
                    [2, 5, 6, 1, 8, 4, 9, 7, 3],
                    [1, 7, 9, 3, 2, 6, 8, 4, 5],
                    [8, 4, 5, 2, 1, 9, 3, 6, 7],
                    [9, 1, 3, 7, 6, 8, 5, 2, 4],
                    [6, 2, 7, 4, 3, 5, 1, 9, 8]
        ]
    },
    {
        name: 'Level 4',
        board: [
            [8, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 3, 6, 0, 0, 0, 0, 0],
            [0, 7, 0, 0, 9, 0, 2, 0, 0],
            [0, 5, 0, 0, 0, 7, 0, 0, 0],
            [0, 0, 0, 0, 4, 5, 7, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 3, 0],
            [0, 0, 1, 0, 0, 0, 0, 6, 8],
            [0, 0, 8, 5, 0, 0, 0, 1, 0],
            [0, 9, 0, 0, 0, 0, 4, 0, 0]
        ],
        solution: [
            [8, 1, 2, 7, 5, 3, 6, 4, 9],
            [9, 4, 3, 6, 8, 2, 1, 7, 5],
            [6, 7, 5, 4, 9, 1, 2, 8, 3],
            [1, 5, 4, 2, 3, 7, 8, 9, 6],
            [3, 6, 9, 8, 4, 5, 7, 2, 1],
            [2, 8, 7, 1, 6, 9, 5, 3, 4],
            [5, 2, 1, 9, 7, 4, 3, 6, 8],
            [4, 3, 8, 5, 2, 6, 9, 1, 7],
            [7, 9, 6, 3, 1, 8, 4, 5, 2]
        ]
    }
];

let currentLevel = 0; // Start with the first level

// Render Sudoku board for the current level
function renderBoard() {
    const board = document.getElementById('sudoku-board');
    board.innerHTML = '';
    const level = sudokuLevels[currentLevel];
    const sudokuBoard = level.board;
    document.getElementById('level-title').innerText = level.name;

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const cell = document.createElement('input');
            cell.type = 'text';
            cell.maxLength = 1;
            cell.id = `cell-${row}-${col}`; // Assign a unique id to each cell
            cell.value = sudokuBoard[row][col] === 0 ? '' : sudokuBoard[row][col].toString();
            cell.disabled = sudokuBoard[row][col] !== 0;
            board.appendChild(cell);
            
        }
    }
    
    // Add event listener to handle Enter key press
    board.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const activeElement = document.activeElement;
            if (activeElement.tagName === 'INPUT' && activeElement.value === '') {
                const [row, col] = activeElement.id.split('-').slice(1).map(Number);
                activeElement.value = sudokuLevels[currentLevel].solution[row][col];
            }
        }
    });
}

// Check if the Sudoku board is correctly solved
function checkSolution() {
    const board = document.getElementById('sudoku-board').children;
    let currentBoard = [];
    
    // Read the current state of the board
    for (let i = 0; i < 9; i++) {
        currentBoard.push([]);
        for (let j = 0; j < 9; j++) {
            const value = board[i * 9 + j].value;
            currentBoard[i].push(value ? parseInt(value) : 0);
        }
    }
    
    const level = sudokuLevels[currentLevel];
    const solutionBoard = level.solution; // Use the solution board for comparison
    
    // Compare the current board with the solution board
    if (JSON.stringify(currentBoard) === JSON.stringify(solutionBoard)) {
        document.getElementById('result').innerText = 'Congratulations! You solved the puzzle correctly.';
        // Move to the next level if available
        if (currentLevel < sudokuLevels.length - 1) {
            currentLevel++;
            setTimeout(renderBoard, 1000); // Delay for better user experience
        }
    } else {
        document.getElementById('result').innerText = 'Solution Incorrect. Please try again.';
    }
}

// Event listener for the Check Solution button
document.getElementById('check-sudoku').addEventListener('click', checkSolution);

// Initial render of the Sudoku board
renderBoard();
