<!--suppress HtmlUnknownTarget -->
<script>
    import {link} from 'svelte-routing'
    import PageContent from "./PageContent.svelte"
    import NavbarTop from "./NavbarTop.svelte"
    import config from "../store/config"

    let menuActive=false;
</script>

<div class="d-flex" id="wrapper" class:toggled={menuActive}>
    <div class="bg-primary" id="sidebar-wrapper">
        <a href={config.Logo.Link} use:link><img alt={config.Logo.Text} src={config.Logo.Image}/></a>
        <div class="list-group" id="left-nav">
            <slot name="nav-links"/>
        </div>
    </div>

    <div id="page-content-wrapper">
        <NavbarTop bind:menuActive={menuActive}>
            <a href={config.Discord.Invite}><img alt={config.Discord.Text} id="header-image"
                                                 src={config.Discord.Image}/></a>
        </NavbarTop>
        <PageContent>
            <slot/>
        </PageContent>
    </div>
</div>

<style lang="scss">
  @import "../styles/app/variables";

  #header-image {
    height: 2.3rem;
    width: $left-nav-width + 5rem;
    object-fit: cover;
  }

  #page-content-wrapper {
    min-width: 100vw;
  }

  #sidebar-wrapper {
    min-height: 100vh;
    margin-left: -$left-nav-width;
    border-right-color: $border-color;
    -webkit-transition: margin .25s ease-out;
    -moz-transition: margin .25s ease-out;
    -o-transition: margin .25s ease-out;
    transition: margin .25s ease-out;
  }

  #sidebar-wrapper .list-group {
    width: $left-nav-width;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: 0;
  }

  @include media-breakpoint-up(md) {
    #sidebar-wrapper {
      margin-left: 0;
    }

    #page-content-wrapper {
      min-width: 0;
      width: 100%;
    }

    #wrapper.toggled #sidebar-wrapper {
      margin-left: -$left-nav-width;
    }
  }

  // hide the sidebar always in print
  @media print {
    #sidebar-wrapper {
      display: none;
    }
    #page-content-wrapper {
      width: 100%
    }
  }
</style>
