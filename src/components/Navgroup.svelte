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

<p class="list-group-item list-group-title bg-dark extra-padding"
   class:active={active}
   on:click={() => active = !active}>
    <Icon icon={active ? faAngleDown : faCaretRight}/> {name}</p>
{#if active}
    <div class="list-group" transition:slide>
        <slot/>
    </div>
{/if}
