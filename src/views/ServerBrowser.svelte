<script>
    import {timeago} from "../components/timeago"
    import ServerBrowser from "../components/ServerBrowser.svelte";
    export let LastUpdated = null;
</script>

<div class="d-flex flex-wrap border-bottom">
    <div><h1>Server Browser</h1></div>
    {#if LastUpdated != null}
        <div class="ms-auto align-self-end">Last Updated: <small use:timeago datetime="{LastUpdated}" locale="en_US">{LastUpdated}</small></div>
    {/if}
</div>

<div class="row">
    <ServerBrowser bind:LastUpdated={LastUpdated} />
</div>
