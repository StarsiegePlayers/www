<script>
    let menuActive=false;
</script>

<style lang="scss">
  @import "../styles/app/overrides";
  #sidebar-wrapper {
    border-right-color: $border-color;
  }

  #top-nav {
    border-bottom-color: $border-color;
  }

  #main-content {
    padding-top: 1.5rem;
  }

</style>

<div class="d-flex" id="wrapper" class:toggled={menuActive}>
    {#if false}<slot />{/if}
    <div class="bg-primary" id="sidebar-wrapper">
        <slot name="sidebar-heading"/>
        <div class="list-group list-group-flush" id="left-nav">
            <slot name="links" />
        </div>
    </div>

    <div id="page-content-wrapper">
        <nav class="navbar navbar-dark bg-primary" id="top-nav">
            <button class="navbar-toggler" id="menu-toggle" on:click={() => menuActive=!menuActive}>
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-brand">
                <slot name="top-right-content"/>
            </div>
        </nav>
        <div id="main-content" class="container">
            <slot name="content" />
        </div>
    </div>
</div>
