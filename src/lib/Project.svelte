<script lang="ts">
    export let start_date = new Date().toDateString();
    export let end_date = new Date().toDateString();
    export let name: string;
    export let description: string;
    export let demo_url: string = null;
    export let source_url: string = null;
    export let video_path: string = null;
    export let tags: string[] | [] = [];
</script>

<div class="col-lg-6 mb-3 mb-sm-6">
    <div class="card text-center">
        <div class="card-header">{start_date} - {end_date}</div>
        <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">
            {description}
        </p>
        <!-- svelte-ignore a11y-media-has-caption -->
        {#if video_path}
        <video
        src={video_path}
        class="object-fit-contain w-100"
        autoplay
        />
        {/if}

        {#if demo_url}
        <a
            href={demo_url}
            class="btn btn-primary"
            target="_blank"><i class="bi bi-globe" />&nbsp;Demo</a
        >
        {/if}

        {#if demo_url}
        <a
            href={source_url}
            class="btn btn-primary"
            target="_blank"><i class="bi bi-github" />&nbsp;Code</a
        >
        {/if}
        </div>
        <div class="card-footer text-body-secondary">
        {#each tags as tag, i}
            {#if tags?.length === i}
                {tag}
            {:else}
                {tag},
            {/if}
        {:else}
            no tags...
        {/each}
        </div>
    </div>
</div>