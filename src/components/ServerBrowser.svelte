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
</style>

{#if $info.Masters.length <= 0 && $info.Games.length <= 0 && $info.Errors.Length <= 0}
<div class="row">
    <h2>Server Browser Unavailable</h2>
</div>
{/if}

{#if $info.Masters.length > 0}
<div class="row justify-content-center">
    <h5 class="text-center">Master Servers</h5>
    <table cellspacing="0">
        <tr>
            <th class="header">No.</th>
            <th class="header">Hostname</th>
            <th class="header">Server Name</th>
            <th class="header">MOTD</th>
            <th class="header">Reported Games</th>
            <th class="header">Ping</th>
        </tr>
        {#each $info.Masters as master, i}
        <tr>
            <td class="server start">{i+1}</td>
            <td class="server">{master.Address}</td>
            <td class="server">{master.CommonName}</td>
            <td class="server">{master.MOTD}</td>
            <td class="server">{master.ServerCount}</td>
            <td class="server end">{Math.floor(master.Ping / 1000000)} ms</td>
        </tr>
        {/each}
    </table>
</div>
{/if}

{#if $info.Games.length > 0}
<div class="row justify-content-center">
    <h5 class="text-center">Game Servers</h5>
    <table cellspacing="0">
        <tr>
            <th class="header">No.</th>
            <th class="header">Server Name</th>
            <th class="header">Started</th>
            <th class="header">Legacy Clients</th>
            <th class="header">Players</th>
            <th class="header">Ping</th>
            <th class="header">Server Address</th>
        </tr>
        {#each $info.Games as game, i}
        <tr>
            <td class="server start">{i+1}</td>
            <td class="server">
                {#if game.GameStatus.Protected}<span class="sb-protected"></span>{/if}
                {#if game.GameStatus.Dedicated}<span class="sb-dedicated"></span>{/if}
                {#if game.GameStatus.Dynamix}<span class="sb-dynamix"></span>{/if}
                {#if game.GameStatus.WON}<span class="sb-won"></span>{/if}
                {game.Name}
            </td>
            <td class="server">{game.GameStatus.Started ? "yes" : "no"}</td>
            <td class="server">{game.GameStatus.AllowOldClients ? "yes" : "no"}</td>
            <td class="server">{game.PlayerCount} / {game.MaxPlayers}</td>
            <td class="server">{Math.floor(game.Ping / 1000000)} ms</td>
            <td class="server end"><a href="starsiege://{game.Address}">{game.Address}</a></td>
        </tr>
        {/each}
    </table>
</div>
{/if}
<hr />
{#if $info.Errors.length > 0}
<div class="row justify-content-center">
    <h5 class="text-center">Errors Encountered</h5>
    <div class="row">
        <table cellspacing="0">
            {#each $info.Errors as error}
            <tr><td>{error}</td></tr>
            {/each}
        </table>
    </div>
</div>
{/if}