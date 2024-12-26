function toggleImage() {
    const image = document.getElementById('burger-flame');
    const toggle = document.getElementById('');

    if (toggle.checked) {
        image.src = ''; // Replace with the path to the second image
        image.alt = 'Image 2';
    } else {
        image.src = 'image1.jpg'; // Replace with the path to the first image
        image.alt = 'Image 1';
    }
}