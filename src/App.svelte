<script lang="ts">
  // Import our custom CSS
  import "./scss/styles.scss";

  // Import all of Bootstrap's JS
  import * as bootstrap from "bootstrap";
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
      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<main class="container-xxl">
  <div class="row mb-4">
    <div class="col-sm-6 mb-3 mb-sm-0">
      <div class="card text-center">
        <div class="card-header">20.3.23 - NOW</div>
        <div class="card-body">
          <h5 class="card-title">Vidslide</h5>
          <p class="card-text">
            A TikTok, Instagram Reels and YouTube Reels inspired app. Post, edit
            and delete posts. Frontend hosted on Vercel. Backend hosted on
            OracleCloud.
          </p>
          <!-- svelte-ignore a11y-media-has-caption -->
          <video
            src="/assets/vidslide/screencast.mp4"
            class="object-fit-contain w-100"
            autoplay
          />
          <a
            href="https://svelte-kit-vid-slide.vercel.app/en/home"
            class="btn btn-primary"
            target="_blank"><i class="bi bi-globe" />&nbsp;Demo</a
          >
          <a
            href="https://github.com/jonasfroeller/SvelteKit_VidSlide"
            class="btn btn-primary"
            target="_blank"><i class="bi bi-github" />&nbsp;Code</a
          >
        </div>
        <div class="card-footer text-body-secondary">
          SvelteKit, ViteJS, TailwindCSS, SkeletonUI, FloatingUI, Typesave-i18n,
          Iconify, coollabs, Zod, JWT, MySQL, Apache, JS, TS, HTML, PHP, CSS.
        </div>
      </div>
    </div>
    <div class="col-sm-6 mb-3 mb-sm-0">
      <div class="card text-center">
        <div class="card-header">18.2.23 - NOW</div>
        <div class="card-body">
          <h5 class="card-title">Portfolio</h5>
          <p class="card-text">
            "jonasfroeller" is my personal website, that I created to show off
            my skills and interests. My name is Jonas, and I am a 17-year-old
            student currently studying at HTBLA Leonding in Austria. I am
            pursuing a field of study in IT/Mediatechnology, and I have a keen
            interest in programming, especially web development. Aside from my
            native language, German, I am also fluent in English, with a B+
            level of proficiency. I have experience working with various
            programming languages, including HTML, CSS, Java, ShellScript,
            JavaScript & NodeJS, PHP, and MySQL & Oracle SQL. Recently, I have
            discovered the Svelte JS-framework and learned Svelte along with
            SvelteKit. I have also gained expertise in working with TailwindCSS.
            This Portfolio is built with DaisyUI & TailwindCSS and statically
            hosted on Netlify & GitHub, hosted with NodeJS on Vercel.
          </p>
          <a
            href="https://jonasfroeller.vercel.app/en"
            class="btn btn-primary"
            target="_blank"><i class="bi bi-globe" />&nbsp;Demo</a
          >
          <a
            href="https://github.com/jonasfroeller/jonasfroeller/tree/master/portfolio"
            class="btn btn-primary"
            target="_blank"><i class="bi bi-github" />&nbsp;Code</a
          >
        </div>
        <div class="card-footer text-body-secondary">
          Main Languages i write in: HTML, CSS, Java, JavaScript & NodeJS, PHP,
          Oracle SQL and ShellScript.
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-6 mb-3 mb-sm-0">
      <div class="card text-center">
        <div class="card-header">about two years ago</div>
        <div class="card-body">
          <h5 class="card-title">Noice</h5>
          <p class="card-text">
            This website is about the Austrian band 'Noice'. Noice is a funk/pop
            band formed in Wieselburg in 2020. Their music, strongly influenced
            by pop music combines blues, funk and jazz elements in the most
            exciting way.
          </p>
          <a
            href="https://noice-band.netlify.app/"
            class="btn btn-primary"
            target="_blank"><i class="bi bi-globe" />&nbsp;Demo</a
          >
          <a
            href="https://github.com/jonasfroeller/Noice"
            class="btn btn-primary"
            target="_blank"><i class="bi bi-github" />&nbsp;Code</a
          >
        </div>
        <div class="card-footer text-body-secondary">HTML, CSS, JS</div>
      </div>
    </div>
    <div class="col-sm-6 mb-3 mb-sm-0">
      <div class="card text-center">
        <div class="card-header">2.7.23 - NOW</div>
        <div class="card-body">
          <h5 class="card-title">Taeglich Frisches Obst</h5>
          <p class="card-text">
            The band "Täglich frisches Obst," freshly formed in Upper Austria in
            February 2022, consists of five young musicians. With two electric
            guitars, drums, bass, and vocals, the band's lineup is very
            classical, but the music itself is not. Funky grooves, intricate
            guitar chords, and solid basslines are combined with vocals.
          </p>
          <a
            href="https://taeglichfrischesobst.vercel.app"
            class="btn btn-primary"
            target="_blank"><i class="bi bi-globe" />&nbsp;Demo</a
          >
          <a
            href="https://github.com/jonasfroeller/TaeglichFrischesObst"
            class="btn btn-primary"
            target="_blank"><i class="bi bi-github" />&nbsp;Code</a
          >
        </div>
        <div class="card-footer text-body-secondary">
          HTML, CSS, JS, TS, SvelteKit, Vite, Redis...
        </div>
      </div>
    </div>
  </div>
</main>
