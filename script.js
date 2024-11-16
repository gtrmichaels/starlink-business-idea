//script.js
document.addEventListener('DOMContentLoaded', () => {

    const scrollableList = document.querySelector('.scrollable-list');


    const items = [
        "Starlink Kit: The core satellite receiver.",
        "Ethernet Cables: Cat5e or better for high-speed connections.",
        "Ethernet Switch: 8-port switch for network distribution.",
        "Wi-Fi Router: High-performance dual-band MU-MIMO router."
    ];

    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        scrollableList.appendChild(listItem);
    });


    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {

    });
});