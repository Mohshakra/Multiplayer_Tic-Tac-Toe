let board;

const squares = Array.from(document.querySelectorAll('#board div'));
document.getElementById('board').addEventListener('click', handleTurn);
const messages = document.querySelector('h2');
document.getElementById('reset-button').addEventListener('click', init);

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];


function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    winner = null;
    turn = 'X';
    render();
    };
    //be sure to call the init function!

function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
    if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
    });
    return winner ? winner : board.includes('') ? null : 'T';
    
    };

function handleTurn(event) {
    
    let idx = squares.findIndex(function(square) {
    return square === event.target;
    });
  
    if((board[idx] == "X" | board[idx] == "O") | (board[idx]== '') & ((winner == "X" |winner == "O"))){
    }
    else{
        board[idx] = turn;
        // check your console logs to make sure it's working!
        turn = turn === 'X' ? 'O' : 'X';
        winner = getWinner();
        render()}
    };

function render() {
        board.forEach(function(mark, index) {
        //this moves the value of the board item into the squares[idx]
        squares[index].textContent = mark;
        });
        messages.textContent = winner === 'T' ? `HMM, now one wins` : 
        winner ? `${winner} wins the game!` :
        `It's ${turn}'s turn!`;
    };

init();