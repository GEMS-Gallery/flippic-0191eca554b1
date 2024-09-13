import { backend } from 'declarations/backend';

const coin = document.getElementById('coin');
const flipBtn = document.getElementById('flipBtn');
const result = document.getElementById('result');
const headsInput = document.getElementById('headsInput');
const tailsInput = document.getElementById('tailsInput');

let headsImage, tailsImage;

async function uploadImage(inputElement, uploadFunction) {
    const file = inputElement.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = async function(e) {
            const arrayBuffer = e.target.result;
            const blob = new Blob([new Uint8Array(arrayBuffer)]);
            await uploadFunction(blob);
            alert('Image uploaded successfully!');
        };
        reader.readAsArrayBuffer(file);
    }
}

headsInput.addEventListener('change', () => uploadImage(headsInput, backend.uploadHeadsImage));
tailsInput.addEventListener('change', () => uploadImage(tailsInput, backend.uploadTailsImage));

async function loadImages() {
    const headsBlob = await backend.getHeadsImage();
    const tailsBlob = await backend.getTailsImage();

    if (headsBlob) {
        headsImage = URL.createObjectURL(new Blob([headsBlob]));
    }
    if (tailsBlob) {
        tailsImage = URL.createObjectURL(new Blob([tailsBlob]));
    }
}

async function flipCoin() {
    coin.classList.add('flipping');
    flipBtn.disabled = true;
    result.textContent = 'Flipping...';

    try {
        const flipResult = await backend.flipCoin();
        setTimeout(() => {
            coin.classList.remove('flipping');
            coin.style.backgroundImage = `url(${flipResult === 'heads' ? headsImage : tailsImage})`;
            result.textContent = `Result: ${flipResult.charAt(0).toUpperCase() + flipResult.slice(1)}`;
            flipBtn.disabled = false;
        }, 2000);
    } catch (error) {
        console.error('Error flipping coin:', error);
        result.textContent = 'Error flipping coin. Please try again.';
        flipBtn.disabled = false;
    }
}

flipBtn.addEventListener('click', flipCoin);

// Load images when the page loads
loadImages();