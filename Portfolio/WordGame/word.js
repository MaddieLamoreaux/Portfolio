// Words for the game
const words = ["cake", "cookie", "brownie", "ice cream", "sugar", "chocolate", "candy", "sorbet", "tea", "coffee"];

// Game state variables
let wordDisplayElement = document.getElementById("wordList");
let userInputElement = document.getElementById("userInput");
let gameStatusElement = document.getElementById("gameStatus");
let wordsToType = [];
let correctWords = 0;
let incorrectWords = 0;
const maxWords = 10; // Number of correct or incorrect words to end the game

// Initialize the game
function startGame() {
    resetGame(); // Reset the game state
    wordsToType = generateRandomWords();
    displayCurrentWord();
    userInputElement.addEventListener("keyup", handleUserInput);
    gameStatusElement.textContent = `Type the word. Game ends after ${maxWords} correct or incorrect words.`;
}

// Generate a list of random words
function generateRandomWords() {
    let randomWords = [];
    const usedIndexes = new Set();

    while (randomWords.length < 10) { // Change size as needed
        const randomIndex = Math.floor(Math.random() * words.length);

        // Add random word to list if not already added
        if (!usedIndexes.has(randomIndex)) {
            randomWords.push(words[randomIndex]);
            usedIndexes.add(randomIndex);
        }
    }

    return randomWords;
}

// Display the current word to type
function displayCurrentWord() {
    // If there are words left to type, display the first one
    if (wordsToType.length > 0) {
        wordDisplayElement.textContent = wordsToType[0];
    } else {
        wordDisplayElement.textContent = ""; // Clear if no words left
    }
}

// Reset the game state
function resetGame() {
    wordsToType = [];
    correctWords = 0;
    incorrectWords = 0;
    userInputElement.value = ""; // Clear the input field
    userInputElement.disabled = false; // Enable the input field
}

// Handle user input
function handleUserInput(event) {
    // Only handle input when the Enter key is pressed
    if (event.key !== 'Enter') {
        return;
    }

    const userInput = userInputElement.value.toLowerCase().trim();

    // If the user input is empty, return
    if (userInput === "") {
        return;
    }

    // Check if user input matches the current word
    if (userInput === wordsToType[0]) {
        // Correct word typed
        correctWords++;
        // Remove the current word
        wordsToType.shift();
    } else {
        // Incorrect word typed
        incorrectWords++;
    }

    // Update the display to show the next word
    displayCurrentWord();

    // Clear the user input field every time
    userInputElement.value = "";

    // Check if game should end
    if (correctWords + incorrectWords >= maxWords) {
        endGame();
    }
}

// End the game and display the final results
function endGame() {
    userInputElement.removeEventListener("keyup", handleUserInput);
    userInputElement.disabled = true;
    let result = `Game over! You typed ${correctWords} correct words and ${incorrectWords} incorrect words.`;
    gameStatusElement.textContent = result;
}

// Start the game
startGame();