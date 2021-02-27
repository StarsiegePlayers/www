<!--suppress HtmlUnknownTarget -->
<script>
    export let user;
</script>

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
