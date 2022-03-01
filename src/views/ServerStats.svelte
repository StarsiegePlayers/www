<script>
    import {timeago} from "../components/timeago"
    import ServerStats from "../components/ServerStats.svelte";
    export let StatsInfo = undefined;
</script>

<div class="d-flex flex-wrap border-bottom">
    <div><h1>Multiplayer Statistics</h1></div>
    {#if StatsInfo !== undefined && $StatsInfo.lastupdated !== ""}
        <div class="ms-auto align-self-end">Last Updated: <small use:timeago datetime="{$StatsInfo.lastupdated}" locale="en_US"></small></div>
    {:else}
        <div class="ms-auto align-self-end">Last Updated: <small>updating...</small></div>
    {/if}
</div>

<div class="row">
    <ServerStats bind:StatsInfo={StatsInfo} />
</div>
