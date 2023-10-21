<script lang="ts">
    // Import all of Bootstrap's JS
    import * as bootstrap from "bootstrap";

    import { onMount } from "svelte/internal";
    import { filteredData } from "./projects";

    let input = "";

    function handleSearch(event: Event) {
        event.preventDefault();
        
        const searchUrl = `/?q=${encodeURIComponent(input)}`;
        window.location.href = searchUrl;
    }

    onMount(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const qValue = urlParams.get('q');
        input = qValue;

        $filteredData = $filteredData.filter(project => {
            return project.name.toLowerCase().includes(input.toLowerCase())
            || project.description.toLowerCase().includes(input.toLowerCase())
            || project.tags.toString().toLowerCase().includes(input.toLowerCase());
        });
    });
</script>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Jonas Fröller</a>
        <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link" href="https://jonasfroeller.vercel.app/en"
                >Portfolio</a
            >
            </li>
            <li class="nav-item dropdown">
            <span
                class="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <i class="bi bi-share-fill" />&nbsp;Socials
            </span>
            <ul class="dropdown-menu">
                <li>
                <a
                    class="dropdown-item"
                    href="https://www.xing.com/profile/Jonas_Froeller/cv"
                    target="_blank"
                >
                    <i class="bi bi-person-circle" />&nbsp;Xing
                </a>
                </li>
                <li>
                <a
                    class="dropdown-item"
                    href="https://www.linkedin.com/in/jonas-fr%C3%B6ller-8b4986235"
                    target="_blank"
                >
                    <i class="bi bi-linkedin" />&nbsp;Linkedin
                </a>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                <a
                    class="dropdown-item"
                    href="https://github.com/jonasfroeller"
                    target="_blank"
                >
                    <i class="bi bi-github" />&nbsp;GitHub
                </a>
                </li>
                <li>
                <a
                    class="dropdown-item"
                    href="https://codepen.io/jonasfroeller"
                    target="_blank"
                >
                    <i class="bi bi-code-slash" />&nbsp;CodePen
                </a>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                <a
                    class="dropdown-item"
                    href="https://www.npmjs.com/~jonasfroeller"
                    target="_blank"
                >
                    <i class="bi bi-filetype-js" />&nbsp;NPM
                </a>
                </li>
                <li>
                <a
                    class="dropdown-item"
                    href="https://hub.docker.com/u/jonasfroeller"
                    target="_blank"
                >
                    <i class="bi bi-box-arrow-in-up" />&nbsp;Dockerhub
                </a>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                <a
                    class="dropdown-item"
                    href="https://www.fiverr.com/codedesignmedia"
                    target="_blank"
                >
                    <i class="bi bi-bag-fill" />&nbsp;Fiverr
                </a>
                </li>
                <li>
                <a
                    class="dropdown-item"
                    href="https://buymeacoffee.com/jonasfroeller"
                    target="_blank"
                >
                    <i class="bi bi-heart-fill" />&nbsp;BuyMeACoffee
                </a>
                </li>
            </ul>
            </li>
        </ul>
        <form class="d-flex" role="search" on:submit={(event) => handleSearch(event)}>
            <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            bind:value={input}
            />
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
</nav>