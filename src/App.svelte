<script lang="ts">
  // Import our custom CSS
  import "./scss/styles.scss";

  // Import all of Bootstrap's JS
  // import * as bootstrap from "bootstrap";

  import Navigation from "./lib/Navigation.svelte";
  import Project from "./lib/Project.svelte";
  import { filteredData } from "./lib/projects";
</script>

<Navigation>
</Navigation>

<main class="container">
  <div class="row">
  {#each $filteredData as project, i}
    {#if i % 2 === 0}
      <Project 
      start_date={project.start_date} 
      end_date={project.end_date} 
      name={project.name}
      description={project.description}
      demo_url={project.demo_url}
      source_url={project.source_url}
      video_path={project.video_path}
      tags={project.tags}
      >
      </Project>
    {:else}
    <Project 
    start_date={project.start_date} 
    end_date={project.end_date} 
    name={project.name}
    description={project.description}
    demo_url={project.demo_url}
    source_url={project.source_url}
    video_path={project.video_path}
    tags={project.tags}
    >
    </Project>
    {/if}

  {:else}
    no data found...
  {/each}
  </div>
</main>