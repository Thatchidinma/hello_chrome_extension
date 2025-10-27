// JavaScript for the popup (popup.js)

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('color-changer');
    const body = document.body;

    // Define a list of colors to cycle through
    const colors = ['#f7fafc', '#ffe6e6', '#e6f7ff', '#e6ffe6', '#fff3e0'];
    let colorIndex = 0;

    // Function to handle the button click
    button.addEventListener('click', () => {
        // Cycle to the next color
        colorIndex = (colorIndex + 1) % colors.length;
        const newColor = colors[colorIndex];

        // Change the background color of the popup
        body.style.backgroundColor = newColor;

        // Optionally, save the current color to Chrome storage
        // This is a common pattern to persist state
        chrome.storage.local.set({ popupColor: newColor }, () => {
            console.log('New color saved:', newColor);
        });
    });

    // Load the previously saved color when the popup opens
    chrome.storage.local.get(['popupColor'], (result) => {
        if (result.popupColor) {
            body.style.backgroundColor = result.popupColor;
        }
    });
});
