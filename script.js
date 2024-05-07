// script.js

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // You can add your own code to handle form submission here
        // For example, you can collect form data and send it to a server using AJAX
        // Replace the code below with your own implementation

        const formData = new FormData(contactForm);
        const formDataObject = Object.fromEntries(formData.entries());

        console.log(formDataObject); // Log form data to console
    });

    // Load the map
    const mapElement = document.getElementById('map');
    mapElement.innerHTML = '<iframe src="https://www.google.com/maps/embed?..." width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
});
