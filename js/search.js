function setupSearch() {
    function handleSearch(event) {
        event.preventDefault();
        let query = document.getElementById('searchInput').value.toLowerCase();
        let pages = {
            'home': 'index.html',
            'horizontal navbar': 'horizontal-navbar.html',
            'vertical navbar': 'vertical-navbar.html',
            'dropdown navbar': 'dropdown-navbar.html',
            'complex navbar 1': 'complex-navbar-1.html',
            'complex navbar 2': 'complex-navbar-2.html'
        };
        if (pages[query]) {
            window.location.href = pages[query];
        }
    }
    const searchForm = document.querySelector('form[role="search"]');
    if (searchForm) {
        searchForm.addEventListener('submit', handleSearch);
    }
}