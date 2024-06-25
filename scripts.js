const icebreakerQuestions = [
    "If you could have any superpower, what would it be?",
    "What's your favorite travel destination?",
    "What's the most interesting thing you've read recently?",
];
 
const showIcebreaker = () => {
    const contentDiv = document.getElementById('game-content');
    const randomQuestion = icebreakerQuestions[Math.floor(Math.random() * icebreakerQuestions.length)];
    contentDiv.innerHTML = `<p>${randomQuestion}</p>`;
};
 
const showTwoTruthsAndALie = () => {
    const contentDiv = document.getElementById('game-content');
    contentDiv.innerHTML = `
        <p>Share two truths and a lie about yourself, and let others guess which one is the lie.</p>
    `;
};
