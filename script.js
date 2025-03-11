// Array of fortune messages
const fortunes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "The best way to predict the future is to create it.",
    "You will find unexpected treasures where you least expect them.",
    "A journey of a thousand miles begins with a single step.",
    "Your hard work will soon pay off in unexpected ways.",
    "The greatest risk is not taking one.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "Your creativity will lead you to remarkable places.",
    "Good things come to those who wait, but better things come to those who work for it."
];

// Theme definitions
const themes = {
    red: {
        textColor: '#FFFFFF',
        backgroundColor: 'rgba(198, 40, 40, 0.8)',
        borderColor: '#e53935',
        fontFamily: '"Open Sans", "Segoe UI", sans-serif',
        fontSize: '1.5rem',
        fontWeight: '500',
        letterSpacing: '0.5px',
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
    },
    green: {
        textColor: '#FFFFFF',
        backgroundColor: 'rgba(46, 125, 50, 0.8)',
        borderColor: '#43a047',
        fontFamily: '"Roboto", "Arial", sans-serif',
        fontSize: '1.5rem',
        fontWeight: '400',
        letterSpacing: '0.4px',
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
    },
    blue: {
        textColor: '#FFFFFF',
        backgroundColor: 'rgba(21, 101, 192, 0.8)',
        borderColor: '#1e88e5',
        fontFamily: '"Lato", "Helvetica", sans-serif',
        fontSize: '1.5rem',
        fontWeight: '500',
        letterSpacing: '0.3px',
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
    },
    purple: {
        textColor: '#FFFFFF',
        backgroundColor: 'rgba(106, 27, 154, 0.8)',
        borderColor: '#8e24aa',
        fontFamily: '"Montserrat", "Verdana", sans-serif',
        fontSize: '1.5rem',
        fontWeight: '400',
        letterSpacing: '0.6px',
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
    }
};

// DOM elements
const fortuneText = document.getElementById('fortune-text');
const fortuneBox = document.getElementById('fortune-box');
const redThemeBtn = document.getElementById('red-theme');
const greenThemeBtn = document.getElementById('green-theme');
const blueThemeBtn = document.getElementById('blue-theme');
const purpleThemeBtn = document.getElementById('purple-theme');

// Function to get a random item from an array
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to display a random fortune
function displayRandomFortune() {
    const randomFortune = getRandomItem(fortunes);
    fortuneText.textContent = randomFortune;
}

// Function to apply a theme
function applyTheme(theme) {
    // Apply text styles
    fortuneText.style.color = theme.textColor;
    fortuneText.style.fontFamily = theme.fontFamily;
    fortuneText.style.fontSize = theme.fontSize;
    fortuneText.style.fontWeight = theme.fontWeight;
    fortuneText.style.letterSpacing = theme.letterSpacing;
    fortuneText.style.textShadow = theme.textShadow;
    
    // Apply box styles
    fortuneBox.style.backgroundColor = theme.backgroundColor;
    fortuneBox.style.borderColor = theme.borderColor;
    
    // Add a subtle box shadow based on the theme color
    const shadowColor = theme.borderColor.replace(')', ', 0.6)').replace('rgb', 'rgba');
    fortuneBox.style.boxShadow = `0 8px 16px ${shadowColor}`;
    
    // Add backdrop filter for glass effect
    fortuneBox.style.backdropFilter = 'blur(10px)';
}

// Event listeners for theme buttons
redThemeBtn.addEventListener('click', () => applyTheme(themes.red));
greenThemeBtn.addEventListener('click', () => applyTheme(themes.green));
blueThemeBtn.addEventListener('click', () => applyTheme(themes.blue));
purpleThemeBtn.addEventListener('click', () => applyTheme(themes.purple));

// Initialize with a random fortune when the page loads
window.addEventListener('load', displayRandomFortune);