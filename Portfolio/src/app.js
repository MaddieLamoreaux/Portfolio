// Get the play button
const playButton = document.getElementById('playButton');

// Add click event listener
playButton.addEventListener('click', () => {
    // Redirect to the game page
    window.location.href = 'tictac/index.html'; // Change this to the correct URL
});

// Get the Play Tic Tac Toe link
const playTicTacToe = document.getElementById('playTicTacToe');

// Add click event listener
playTicTacToe.addEventListener('click', (event) => {
    // Prevent the default behavior of the link
    event.preventDefault();
    
    // Redirect to the Tic Tac Toe game page
    window.location.href = 'tictac/index.html'; // Change this to the correct URL
});