<script>
    export let menuActive;
</script>

<style lang="scss">
    @import "../styles/app/overrides";
    #top-nav {
        border-bottom-color: $border-color;
    }
</style>


<nav class="navbar navbar-dark bg-primary" id="top-nav">
    <button class="navbar-toggler" id="menu-toggle" on:click={() => menuActive=!menuActive}>
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-brand">
        <slot />
    </div>
</nav>