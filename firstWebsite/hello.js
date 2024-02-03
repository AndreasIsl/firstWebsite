function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const scrollOffset = section.offsetTop - headerHeight;
        window.scrollTo({ top: scrollOffset, behavior: 'smooth' });
    }
}

// Array von Bildpfaden
var imagePaths = [
    'stacy.jpg',
    'stacy2.jpg',
    'stacy3.jpg',
    'stacy4.jpg',
    'stacy5.jpg',
    'stacy6.jpg',
    'stacy7.jpg',
    'stacy8.jpg',
    'stacy9.jpg',
    // Füge weitere Bildpfade hinzu...
];

// Aktueller Index des angezeigten Bildes
var currentImageIndex = 0;


function changeImage(direction) {
    // Berechne den neuen Index basierend auf der Richtung
    currentImageIndex += direction;

    // Überprüfe, ob der Index außerhalb des Bereichs des Arrays liegt
    if (currentImageIndex < 0) {
        currentImageIndex = imagePaths.length - 1; // Gehe zum letzten Bild
    } else if (currentImageIndex >= imagePaths.length) {
        currentImageIndex = 0; // Gehe zum ersten Bild
    }

    // Aktualisiere das Bild im Bildcontainer
    document.getElementById('stacyimg').src = imagePaths[currentImageIndex];
}