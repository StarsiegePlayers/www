<script>
    import http from "../store/http";
    const defaultData = {
        "RequestTime": "",
        "Masters": [],
        "Games": [],
        "Errors": [],
    };
    const info = http(defaultData);
    info.get("/api/v1/multiplayer/servers");

    export const ServerInfo = info;
</script>

<style>
    .row {
        margin-bottom: 1.5rem;
    }

    .table>caption {
        color: white;
        text-align: center;
    }

    .table>:not(caption)>*>span {
        padding: 0 0.1rem !important;
    }

    .table>:not(caption)>*>* {
        background-color: transparent;
    }
</style>

{#if $info.Masters.length <= 0 && $info.Games.length <= 0 && $info.Errors.Length <= 0}
<div class="row">
    <h2>Server Browser Unavailable</h2>
</div>
{/if}

{#if $info.Masters.length > 0}
<div class="row justify-content-center table-responsive">
    <table class="table table-ss-blue table-bordered table-striped table-hover caption-top">
        <caption class="h4">Master Servers</caption>
        <tr class="table-ss-yellow">
            <th scope="col">No.</th>
            <th scope="col">Hostname</th>
            <th scope="col">Server Name</th>
            <th scope="col">MOTD</th>
            <th scope="col">Reported Games</th>
            <th scope="col">Ping</th>
        </tr>
        {#each $info.Masters as master, i}
        <tr>
            <th scope="row">{i+1}</th>
            <td>{master.Address}</td>
            <td>{master.CommonName}</td>
            <td>{master.MOTD}</td>
            <td>{master.ServerCount}</td>
            <td>{Math.floor(master.Ping / 1000000)} ms</td>
        </tr>
        {/each}
    </table>
</div>
{/if}

{#if $info.Games.length > 0}
<div class="row justify-content-center table-responsive">
    <table class="table table-ss-blue table-bordered table-striped table-hover caption-top">
        <caption class="h4">Game Servers</caption>
        <tr class="table-ss-yellow">
            <th scope="col">No.</th>
            <th scope="col">Server Name</th>
            <th scope="col">Started</th>
            <th scope="col">Legacy Clients</th>
            <th scope="col">Players</th>
            <th scope="col">Ping</th>
            <th scope="col">Server Address</th>
        </tr>
        {#each $info.Games as game, i}
        <tr>
            <th scope="row">{i+1}</th>
            <td>
                {#if game.GameStatus.Protected}<span class="sb-protected"></span>{/if}
                {#if game.GameStatus.Dedicated}<span class="sb-dedicated"></span>{/if}
                {#if game.GameStatus.Dynamix}<span class="sb-dynamix"></span>{/if}
                {#if game.GameStatus.WON}<span class="sb-won"></span>{/if}
                {game.Name}
            </td>
            <td>{game.GameStatus.Started ? "yes" : "no"}</td>
            <td>{game.GameStatus.AllowOldClients ? "yes" : "no"}</td>
            <td>{game.PlayerCount} / {game.MaxPlayers}</td>
            <td>{Math.floor(game.Ping / 1000000)} ms</td>
            <td><a href="starsiege://{game.Address}">{game.Address}</a></td>
        </tr>
        {/each}
    </table>
</div>
{/if}
<hr />
{#if $info.Errors.length > 0}
<div class="row justify-content-center table-responsive">
    <table class="table table-ss-blue table-bordered table-striped table-hover caption-top">
        <caption class="h4">Errors Encountered</caption>
        {#each $info.Errors as error, i}
        <tr>
            <th scope="row">{i+1}</th>
            <td>{error}</td>
        </tr>
        {/each}
    </table>
</div>
{/if}