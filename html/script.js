document.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissors'];
    const userChoiceDisplay = document.querySelector('#user-choice span');
    const computerChoiceDisplay = document.querySelector('#computer-choice span');
    const winnerDisplay = document.querySelector('#winner span');
    
    document.querySelectorAll('.choice').forEach(choice => {
        choice.addEventListener('click', (e) => {
            const userChoice = e.target.id;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            const winner = determineWinner(userChoice, computerChoice);
            
            userChoiceDisplay.textContent = userChoice;
            computerChoiceDisplay.textContent = computerChoice;
            winnerDisplay.textContent = winner;
        });
    });

    function determineWinner(user, computer) {
        if (user === computer) {
            return 'It\'s a tie!';
        }
        if ((user === 'rock' && computer === 'scissors') ||
            (user === 'paper' && computer === 'rock') ||
            (user === 'scissors' && computer === 'paper')) {
            return 'You win!';
        } else {
            return 'Computer wins!';
        }
    }
});
