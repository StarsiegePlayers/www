<script>
    import {slide} from 'svelte/transition';
    export let name = ""
    let active = false;

</script>

<p class="list-group-item bg-dark text-yellow extra-padding" class:active={active} on:click={() => active = !active}>{#if active}&#x23F7;{:else}&rsaquo;{/if} {name}</p>
{#if active}
<div class="list-group list-group-flush" id="navGroup{name}" transition:slide>
    <slot></slot>
</div>
{/if}
