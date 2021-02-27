<script>
    import Icon from "fa-svelte";
    import {faEdit} from "@fortawesome/free-solid-svg-icons";
    import {timeago} from "../components/timeago";
    import config from "../store/config";

    export let title;
    export let file;
    export let showEditLink = true;
    export let LastUpdated = 0;
</script>

<style>
    .push-left {
        margin-left: 0.5rem;
    }
</style>

<div class="d-flex flex-wrap border-bottom">
    <div><h1>{title}</h1></div>
    {#if showEditLink}
        <div class="ms-auto align-self-end"><a href="{config.GitContentURL}/tree/main/{file}" target="_blank">Edit me on
            GitHub!<span class="push-left"><Icon icon={faEdit}/></span></a></div>
    {/if}
    {#if !showEditLink && LastUpdated > 0}
        <div class="ms-auto align-self-end">Last Updated: <i use:timeago datetime="{LastUpdated}" locale="en_US">{LastUpdated}</i></div>
    {/if}
</div>

<div class="row">
    <slot />
</div>