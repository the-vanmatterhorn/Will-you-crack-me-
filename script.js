const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

// Faire bouger le bouton "No" quand on le survole
noButton.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

// Action quand on clique sur "Yes"
yesButton.addEventListener('click', () => {
    document.querySelector('.container').innerHTML = `
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueGZ3bmZ3bmZ3bmZ3bmZ3bmZ3JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZNo&ep=v1_internal_gif_by_id/UMon967tT3y52/giphy.gif">
        <h1>YAY! I knew it! ❤️</h1>
    `;
});
