document.addEventListener('DOMContentLoaded', function() {
    const startFarmingButton = document.getElementById('startFarming');
    const farmingPoints = document.getElementById('farmingPoints');
    const farmingStatus = document.getElementById('farmingStatus');
    const coinImage = document.querySelector('.coin-image');

    let farmingValue = 0;
    let farmingInterval = null;
    const TOTAL_FARMING_VALUE = 5;
    const MAX_TAPS = 5000;
    let tapCount = 0;

    function startFarming() {
        if (farmingInterval) {
            clearInterval(farmingInterval);
        }

        farmingPoints.style.display = 'inline';
        farmingStatus.textContent = 'Farming ';

        farmingInterval = setInterval(() => {
            farmingValue += 0.001;
            tapCount += 1;

            if (farmingValue >= TOTAL_FARMING_VALUE) {
                clearInterval(farmingInterval);
                farmingValue = TOTAL_FARMING_VALUE;
                stopFarming();
            } else if (tapCount >= MAX_TAPS) {
                clearInterval(farmingInterval);
                stopFarming();
            }

            farmingPoints.innerHTML = farmingValue.toFixed(3);
        }, 1500);

        coinImage.classList.add('mining');
    }

    function stopFarming() {
        clearInterval(farmingInterval);
        farmingInterval = null;
        coinImage.classList.remove('mining');
        setTimeout(() => {
            // Optionally add any effects or styles for when farming is complete
        }, 1000);

        startFarmingButton.innerHTML = '<span id="farmingStatus">Claim 5 $BLB</span>';
        startFarmingButton.style.backgroundColor = 'orange';
    }

    function showLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        loadingScreen.style.opacity = 1;
        loadingScreen.style.display = 'flex';
    }

    function hideLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        loadingScreen.style.opacity = 0;
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 300);
    }

    window.addEventListener('load', function() {
        // Check if we are on the index.html page
        if (window.location.pathname.includes('index.html')) {
            showLoadingScreen();
            setTimeout(() => {
                hideLoadingScreen();
                const container = document.querySelector('.container');
                container.classList.add('fade-in');
            }, 3000); // Show loading screen for 3 seconds
        }
    });

    startFarmingButton.addEventListener('click', function() {
        startFarming();
        coinImage.classList.add('clicked');
        setTimeout(() => {
            coinImage.classList.remove('clicked');
        }, 100);
    });

    // Sparkles animation
    const sparklesContainer = document.getElementById('sparkles-container');
    const numberOfSparkles = 20;

    for (let i = 0; i < numberOfSparkles; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.animationDelay = `${Math.random() * 5}s`;
        sparklesContainer.appendChild(sparkle);
    }

    // Add event listeners for page redirection without loading screen
    document.getElementById('farmButton').addEventListener('click', function() {
        window.location.href = 'refer.html';
    });

    document.getElementById('taskButton').addEventListener('click', function() {
        window.location.href = 'task.html';
    });
});
