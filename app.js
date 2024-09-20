let time = 0;
let score = 0;
let timer;
const puzzleContainer = document.getElementById('puzzle-container');
const timeDisplay = document.getElementById('time');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('start-button');

const puzzles = [
    { question: "Identify the red flags in this transaction: Multiple small deposits just under the reporting threshold.", answer: "Structuring" },
    { question: "A company with no real business activity receives large sums of money. What typology is this?", answer: "Shell Companies" },
    { question: "Multiple individuals deposit small amounts into various accounts. What is this technique called?", answer: "Smurfing" }
];

startButton.addEventListener('click', startGame);

function startGame() {
    time = 0;
    score = 0;
    updateScoreBoard();
    startButton.disabled = true;
    puzzleContainer.innerHTML = '';
    puzzles.forEach((puzzle, index) => {
        const piece = document.createElement('div');
        piece.classList.add('puzzle-piece');
        piece.textContent = index + 1;
        piece.addEventListener('click', () => showPuzzle(puzzle));
        puzzleContainer.appendChild(piece);
    });
    timer = setInterval(() => {
        time++;
        updateScoreBoard();
    }, 1000);
}

function showPuzzle(puzzle) {
    const answer = prompt(puzzle.question);
    if (answer.toLowerCase() === puzzle.answer.toLowerCase()) {
        score += 100;
        alert('Correct!');
    } else {
        alert('Incorrect. The correct answer is: ' + puzzle.answer);
    }
    updateScoreBoard();
}

function updateScoreBoard() {
    timeDisplay.textContent = time;
    scoreDisplay.textContent = score;
    if (score === puzzles.length * 100) {
        clearInterval(timer);
        alert('Congratulations! You completed all puzzles.');
        startButton.disabled = false;
    }
}
