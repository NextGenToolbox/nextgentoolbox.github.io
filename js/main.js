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

 const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const closeSidebar = document.getElementById('closeSidebar');
    hamburger.addEventListener('click', () => { sidebar.classList.add('open'); });
    closeSidebar.addEventListener('click', () => { sidebar.classList.remove('open'); });

    // Scroll to top
    const scrollBtn = document.getElementById('scrollTopBtn');
    window.onscroll = () => {
        scrollBtn.style.display = (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) ? "block" : "none";
    };
    scrollBtn.onclick = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };

    // Search functionality
    const searchInput = document.getElementById('search');
    const toolCards = document.querySelectorAll('#tools-container .card');
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        toolCards.forEach(card => {
            const title = card.dataset.title.toLowerCase();
            card.style.display = title.includes(query) ? 'block' : 'none';
        });
    });
