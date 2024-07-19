document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links li a');
    const contentSection = document.getElementById('content');

    // Event listener for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const path = e.target.getAttribute('href');
            loadContent(path);
        });
    });

    // Function to load content dynamically
    function loadContent(path) {
        fetch(path)
            .then(response => response.text())
            .then(html => {
                contentSection.innerHTML = html;
            })
            .catch(error => console.error('Error fetching content:', error));
    }
});
