<script>
    import Tile from "./Tile.svelte"

    export let tiles;
</script>

{#each tiles as group}
    <div class="row">
        {#each group as tile}
            <Tile title={tile.Title} href={tile.Link} img={tile.Image}>{tile.Description}</Tile>
        {/each}
    </div>
{/each}
