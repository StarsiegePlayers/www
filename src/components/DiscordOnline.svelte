<!--suppress HtmlUnknownTarget -->
<script>
    import Icon from 'fa-svelte'
    import {faCog} from '@fortawesome/free-solid-svg-icons'

    export let guildID;
    export let invite = "";
    export let memberName = "Member"
    export let onlineText = "Members Online";
    export let joinText = "Join Now!"
    export let theme = "light"
    export let users = "Members"

    const apiURL = "https://discord.com/api/guilds/" + guildID + "/widget.json";
    let loadedCount = 0;
    let promise = async function() {
        const response = await fetch(apiURL);
        return await response.json();
    }();
</script>

<style>
    :global(.spinner) {
        animation: spinner-frames 3s infinite linear;
    }
    @keyframes spinner-frames {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .discord-widget-container {
        margin: 0 auto;
    }
</style>

{#await promise}
    <div class="discord-widget-container" role="complementary">
        <div class="discord-widget">
            <div class="widget" class:widget-theme-light={theme === "light"} class:widget-theme-dark={theme === "dark"}>
                <div class="widget-header">
                    <a href="https://discord.com/?utm_source=Discord%20Widget&utm_medium=Logo" target="_blank" class="widget-logo"> </a>
                    <span class="widget-header-count"><strong></strong></span>
                </div>
                <div class="widget-body">
                    <div class="widget-role-name"><Icon class="spinner" icon={faCog} />&nbsp;&nbsp;&nbsp;Loading...</div>
                </div>
                <div class="widget-footer">
                </div>
            </div>
        </div>
    </div>
{:then discordData}
    <div class="discord-widget-container" role="complementary">
        <div class="discord-widget">
            <div class="widget" class:widget-theme-light={theme === "light"} class:widget-theme-dark={theme === "dark"}>
                <div class="widget-header">
                    <a href="https://discord.com/?utm_source=Discord%20Widget&utm_medium=Logo" target="_blank" class="widget-logo"> </a>
                    <span class="widget-header-count"><strong>{discordData.presence_count}</strong> {onlineText}</span>
                </div>
                <div class="widget-body">
                    <div data-name="{users}" data-default="true" class="widget-role-name">{users}</div>
                    <div data-name="{memberName}" class="widget-role-container">
                        {#each discordData.members as user}
                            <div class="widget-member">
                                <div class="widget-member-avatar">
                                    <img alt="{user.username}'s Avatar" src={user.avatar_url} loading="lazy" class="widget-member-avatar-img">
                                    <span class="widget-member-status"
                                          class:widget-member-status-online={user.status === "online"}
                                          class:widget-member-status-dnd={user.status === "dnd"}
                                          class:widget-member-status-idle={user.status === "idle"}
                                          class:widget-member-status-offline={user.status === "offline"}
                                    ></span>
                                </div>
                                <span class="widget-member-name">{user.username}</span>
                            </div>
                        {/each}
                    </div>
                </div>
                <div class="widget-footer">
                    <a href={invite !== "" ? invite : discordData.instant_invite} target="_blank" class="widget-btn-connect">{joinText}</a>
                </div>
            </div>
        </div>
    </div>
{/await}