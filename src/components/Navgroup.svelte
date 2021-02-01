<script>
    import {slide} from 'svelte/transition';
    import Icon from 'fa-svelte';
    import {faAngleDown, faCaretRight} from '@fortawesome/free-solid-svg-icons';
    import {currentPath} from "../store/history.js"

    export let routes;
    export let name = "";
    let active = false;

    currentPath.subscribe(function(path) {
        for (const v in routes) {
            if (path === routes[v].route) {
                active = true;
            }
        }
    });

</script>

<style>
    :global(.list-group-item) {
        text-transform: uppercase;
        color: yellow;
        font-family: BankGothic, monospace;
    }
    :global(.list-group-item-action.active) {
        background-color: #484848 !important
    }
    :global(.list-group-item.active) {
        font-weight: bold;
        color: yellow;
    }
    :global(a.list-group-item.active) {
        color: white;
    }
    :global(.extra-padding) {
        margin: 0.5rem 0 0 0 !important;
    }
    .list-group-title {
        font-weight: normal;
    }
</style>

<p class="list-group-item list-group-title bg-dark text-yellow extra-padding"
   class:active={active}
   on:click={() => active = !active}><Icon icon={active ? faAngleDown : faCaretRight}/> {name}</p>
{#if active}
<div class="list-group list-group-flush" id="navGroup{name}" transition:slide><slot /></div>
{/if}
