<script>
    import {onDestroy, onMount} from 'svelte';
    import {globalHistory} from 'svelte-routing/src/history';
    import {currentPath} from "./store/history.js"

    import Router from './Router.svelte'

    let unsub;

    onMount(() => {
        unsub = globalHistory.listen(({ location, action }) => {
            $currentPath = location.pathname
        })
    })

    onDestroy(() => {
        unsub()
    })
</script>

<style global lang="scss">
    @import "./styles/app";
</style>


<Router/>