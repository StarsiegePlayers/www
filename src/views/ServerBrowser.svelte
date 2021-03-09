<script>
    import {timeago} from "../components/timeago"
    import ServerBrowser from "../components/ServerBrowser.svelte";
    export let ServerInfo = undefined;
</script>

<div class="d-flex flex-wrap border-bottom">
    <div><h1>Server Browser</h1></div>
    {#if ServerInfo !== undefined && $ServerInfo.RequestTime !== ""}
        <div class="ms-auto align-self-end">Last Updated: <small use:timeago datetime="{$ServerInfo.RequestTime}" locale="en_US"></small></div>
    {:else}
        <div class="ms-auto align-self-end">Last Updated: <small>updating...</small></div>
    {/if}
</div>

<div class="row">
    <ServerBrowser bind:ServerInfo={ServerInfo} />
</div>
