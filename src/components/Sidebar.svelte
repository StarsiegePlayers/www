<script>
    let menuActive=false;
</script>

<div class="d-flex" id="wrapper" class:toggled={menuActive}>
    {#if false}<slot />{/if}
    <div class="bg-primary border-right" id="sidebar-wrapper">
        <slot name="sidebar-heading"/>
        <div class="list-group list-group-flush">
            <slot name="links" />
        </div>
    </div>

    <div id="page-content-wrapper">
        <nav class="navbar navbar-dark bg-primary border-bottom">
            <button class="navbar-toggler" id="menu-toggle" on:click={() => menuActive=!menuActive}>
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-brand">
                <slot name="top-right-content"/>
            </div>
        </nav>
        <div class="container-fluid">
            <slot name="content" />
        </div>
    </div>
</div>
