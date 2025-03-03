function setupSearch() {
    function handleSearch(event) {
        event.preventDefault();
        let query = document.getElementById('searchInput').value.toLowerCase();
        let pages = {
            'home': 'index.html',
            'page 2': 'page2.html',
            'page 3': 'page3.html',
            'page 4': 'page4.html',
            'page 5': 'page5.html',
            'page 6': 'page6.html',
            'memory game': 'memory.html'
        };

        if (pages[query]) {
            window.location.href = pages[query];
        } else {
            // Filter functionality for the dropdown
            let filter = query.toUpperCase();
            let div = document.getElementById("myDIV");
            let a = div.getElementsByTagName("a");

            for (let i = 0; i < a.length; i++) {
                let txtValue = a[i].textContent || a[i].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    a[i].style.display = "";
                } else {
                    a[i].style.display = "none";
                }
            }

            // Filter the input box within the dropdown.
            let input = document.getElementById('myInput');
            if (input) {
                input.value = document.getElementById('searchInput').value;
                myFunction();
            }
        }
        // Clear the search input field
        document.getElementById('searchInput').value = "";
    }

    const searchForm = document.querySelector('form[role="search"]');

    if (searchForm) {
        searchForm.addEventListener('submit', handleSearch);
    } else {
        console.error("Search form not found.");
    }
}

document.addEventListener('DOMContentLoaded', setupSearch);

// Filter function from Code 2
function myFunction() {
    var input, filter, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDIV");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}