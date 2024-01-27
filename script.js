// let cellSelection = 0;
const playerToken = "X";




// function gameboard(cellSelection) {
    
//     const cells = 9;
//     let initBoard = {};
//     // let currentBoard = {};

//     for (let i = 0; i < cells; i++) {
//         initBoard[i] = i;
//     }

    

//     function boardUpdate() {
//         console.log(initBoard);
//         // cellSelection++;

//         let currentBoard = initBoard;
        
//         for (let key in currentBoard) {
//             console.log(key);
//             if (key === cellSelection) {
//                 currentBoard[key] = playerToken;
//             }
//         };
//         console.log(currentBoard);
//         initBoard = currentBoard;
        
//         return currentBoard;
//     } 

// // initBoard = currentBoard;
// return boardUpdate();

// }



// Creates the
function gameBoard(boardButtons, boardCell) {

        const initialBoard = () => {
            
            board = {};

            for (let i = 0; i < 9; i++) {
                board[i] = i;
            }

            for (let i = 0; i < boardButtons.length; i++) {
                board[i] = boardButtons[i].value;
            }

            return board;

        }

        
        
        function updatedBoard() {

            const cellSelection = boardCell.id;
            let currentBoard = initialBoard();

            for (let key in currentBoard) {
                
                if (key === cellSelection) {
                    currentBoard[key] = playerToken;
                }
            };

            return currentBoard;
        }

        console.log(updatedBoard());
        return updatedBoard();

}





// for (let boardCell of boardButtons)

//     boardCell.addEventListener("click", () => {


//         const initialBoard = () => {
            
//             board = {};

//             for (let i = 0; i < 9; i++) {
//                 board[i] = i;
//             }

//             for (let i = 0; i < boardButtons.length; i++) {
//                 board[i] = boardButtons[i].value;
//             }

//             return board;

//         }

        
        
//         function updatedBoard() {

//             const cellSelection = boardCell.id;
//             let currentBoard = initialBoard();

//             for (let key in currentBoard) {
                
//                 if (key === cellSelection) {
//                     currentBoard[key] = playerToken;
//                     boardCell.value = currentBoard[key];
//                     boardCell.textContent = currentBoard[key];
//                 }
//             };

//             return currentBoard;
//         }



//         // function updateDisplay() {
//         //     boardCell.value =
//         // }

//         console.log(updatedBoard());
//         return updatedBoard();

// })



const executeGame = (function(){
    const boardButtons = document.getElementsByClassName("boardButton");
    
    for (let boardCell of boardButtons) {
        boardCell.addEventListener("click", () => {
            console.log("hey");
            const currentBoard = gameBoard(boardButtons, boardCell);
            console.log(currentBoard);
            boardCell.value = playerToken;
            boardCell.textContent = playerToken;

        })
    }
})(); 
    

