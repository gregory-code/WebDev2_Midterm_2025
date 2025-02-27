
    document.getElementById("Home").addEventListener("click", function (loadHome) { // this will find the image and give it the functionality of a button.
        loadHome.preventDefault(); // we want to do our own implimentation so we want to prevent the default button click from being called
        window.location.href = "page2.html"; // we want to take the user to the new page
    });

    document.getElementById("Discover").addEventListener("click", function (loadDiscover) {
        loadDiscover.preventDefault();
        window.location.href = "page4.html";
    });

    document.getElementById("Contact").addEventListener("click", function (loadContact) {
        loadContact.preventDefault();
        window.location.href = "page5.html";
    });

    document.getElementById("Settings").addEventListener("click", function (loadSettings) {
        loadSettings.preventDefault();
        window.location.href = "index.html";
    });