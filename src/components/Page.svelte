<!--suppress HtmlUnknownTarget -->
<script>
    import {link, Route, Router} from 'svelte-routing'
    import PageContent from "./PageContent.svelte"
    import NavbarTop from "./NavbarTop.svelte"
    import config from "../store/config"
    let menuActive=false;
</script>

<style lang="scss">
  @import "../styles/app/overrides";
  #sidebar-wrapper {
    border-right-color: $border-color;
  }
  #header-image {
    height: 2.3rem;
    width: 20rem;
    object-fit: cover;
  }
</style>

<div class="d-flex" id="wrapper" class:toggled={menuActive}>
    <div class="bg-primary" id="sidebar-wrapper">
        <a href={config.Logo.Link} use:link><img alt={config.Logo.Text} src={config.Logo.Image}/></a>
        <div class="list-group list-group-flush" id="left-nav">
            <slot name="nav-links" />
        </div>
    </div>

    <div id="page-content-wrapper">
        <NavbarTop bind:menuActive={menuActive}>
            <a href={config.Discord.Invite} ><img alt={config.Discord.Text} id="header-image" src={config.Discord.Image}/></a>
        </NavbarTop>
        <PageContent><slot name="content" /></PageContent>
    </div>
</div>
