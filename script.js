const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');

// Fonction pour déplacer le bouton de manière aléatoire
function moveButton() {
    // Calcule une position aléatoire en restant dans les limites de l'écran
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    
    // Applique les nouvelles coordonnées
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

// S'enfuit quand la souris s'approche (Ordinateur)
noButton.addEventListener('mouseover', moveButton);

// S'enfuit quand on essaie de le toucher (Mobile)
noButton.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Empêche le clic accidentel
    moveButton();
});

// Action quand on clique sur "Yes"
yesButton.addEventListener('click', () => {
    document.querySelector('.container').innerHTML = `
        <div id="image-container">
            <img src="https://media.tenor.com/gU_Pb_769ayAAAAi/peach-goma-peach-and-goma.gif" alt="Happy Cat">
        </div>
        <h1>YAY! I knew it! ❤️</h1>
    `;
});
        
