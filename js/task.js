document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loadingScreen');

    function showLoadingScreen() {
        loadingScreen.style.opacity = 1;
        loadingScreen.style.display = 'flex';
    }

    function hideLoadingScreen() {
        loadingScreen.style.opacity = 0;
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 300); // Match the transition duration in CSS
    }

    // Show the loading screen only on task.html reload
    showLoadingScreen();
    setTimeout(() => {
        hideLoadingScreen();
        const container = document.querySelector('.container');
        container.classList.add('fade-in');
    }, 3000); // Show loading screen for 3 seconds

    // Sparkles animation
    const sparklesContainer = document.getElementById('sparkles-container');
    const numberOfSparkles = 50;

    for (let i = 0; i < numberOfSparkles; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.animationDelay = `${Math.random() * 5}s`;
        sparklesContainer.appendChild(sparkle);
    }

    // Button click events
    document.getElementById('farmButton').addEventListener('click', function() {
        window.location.href = 'Refer.html';
    });

    document.getElementById('inviteButton').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});
