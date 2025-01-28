const input = document.getElementById("input")

function reverseString(str){
    return str.split("").reverse("").join("")
}
function check(){
    const value  = input.value
    const reversi = reverseString(value)
    if(value == "")
        value = "ab"
    if(value == reversi)
    {
        alert(`${value} is a palindrome!`)
    }
    else{
        alert(`${value} is not a palindrome.`)
    }
    input.value =""
}
// Function to update CSS variables dynamically
function updateAnimationSpeedAndCount(rotateSpeed, count) {
    const root = document.documentElement;

    // Set CSS variables dynamically
    root.style.setProperty('--rotate-speed', 10);
    root.style.setProperty('--count', 5);

    // Trigger a reflow to ensure the CSS changes take effect
    root.offsetHeight;
}

// Event listeners for inputs
document.addEventListener('DOMContentLoaded', () => {
    const rotateSpeedInput = document.getElementById('rotate-speed');
    const countInput = document.getElementById('count');

    rotateSpeedInput.addEventListener('input', () => {
        const speed = rotateSpeedInput.value;
        const count = countInput.value;
        updateAnimationSpeedAndCount(speed, count);
    });

    countInput.addEventListener('input', () => {
        const speed = rotateSpeedInput.value;
        const count = countInput.value;
        updateAnimationSpeedAndCount(speed, count);
    });


});

function copyCardTextById(id) {
    // Select the card element by its ID
    const card = document.getElementById(id);
   
    if (card) {
        // Get the `model-name` text and other HTML content
        const modelName = card.querySelector('.model-name')?.textContent || '';
        
        // Exclude the modelName (header) from otherContent by filtering out the span containing modelName
        let otherContent = [...card.querySelectorAll('span')]
            .filter(span => !span.classList.contains('model-name'))
            .map(span => span.innerHTML) // Use innerHTML to preserve links and formatting
            .join(' ');


        // Select the flex item for dynamic content insertion
        const flexItem = document.querySelector('.flexbox .flex-item');
        if (flexItem) {
            flexItem.innerHTML = `
                    <span class= 'model-name'>${modelName}</span>
                    <p>${otherContent}</p>
                `;

            // Apply styles dynamically to preserve flexbox behavior
            flexItem.style.display = 'flex';
            flexItem.style.flexDirection = 'column';
            flexItem.style.alignItems = 'center'; // Adjust based on your styling
        }

        // Ensure flexbox is visible
        const flexbox = document.querySelector('.flexbox');
        if (flexbox) {
            flexbox.classList.remove('hidden');

            // Preserve flexbox layout and centering
            flexbox.style.display = 'flex';
            flexbox.style.justifyContent = 'center';
            flexbox.style.alignItems = 'center';
        }
        const overlayCard = card.querySelector('.overlay-card');
        if (overlayCard) {
            // Set the overlay text to the model-name
           overlayCard.remove();
        }
        // Log to console for verification
        console.log('Updated flexbox with:', { modelName, otherContent });
    } else {
        console.error('Card with ID', id, 'not found.');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Get all the card elements on the page
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        // Get the model-name text from the card
        const modelName = card.querySelector('.model-name')?.textContent || '';
        const cardOverlaySetByModelName = false;
        // Get the overlay card element inside the card
        const overlayCard = card.querySelector('.overlay-card');

        if (overlayCard) {
            // Set the overlay text to the model-name immediately
           if(cardOverlaySetByModelName){
            overlayCard.textContent = modelName;
           }
            // Hide the overlay after a brief transition
            overlayCard.classList.add('done');
        }
    });
});
