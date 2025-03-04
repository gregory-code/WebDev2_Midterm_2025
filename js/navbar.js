function generateNavbar() {
    return `
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">Midterm</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="memory.html">Memory</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="page3.html">Space Marine</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="page5.html">Sonic</a></li>
								<li><a class="dropdown-item" href="page6.html">Forms</a></li>
								<li><a class="dropdown-item" href="page2.html">Water Vapor</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex" role="search" onsubmit="handleSearch(event)">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="searchInput">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    `;
}