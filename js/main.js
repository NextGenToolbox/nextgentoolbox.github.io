// Dark Mode Toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// Post Search Filter
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    document.querySelectorAll('.post-card').forEach(card => {
        const title = card.dataset.title.toLowerCase();
        card.style.display = title.includes(query) ? 'block' : 'none';
    });
});
