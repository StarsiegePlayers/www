<!--suppress HtmlUnknownTarget -->
<script>
    import {link, Route, Router} from 'svelte-routing'
    import Navlink from './components/Navlink.svelte'
    import Navgroup from './components/Navgroup.svelte'
    import Page from './components/Page.svelte'

    // routes
    import Error404 from "./views/404.svelte";
    import config from "./store/routes"
</script>

<Page>
    <span slot="nav-links">
        <Router>
            {#each config.Routemap as route}
                {#if typeof(route.group) === "string"}
                    <Navgroup name={route.group} routes={route.routes}>
                        {#each route.routes as groupRoute}
                            <Navlink href={groupRoute.route}>{groupRoute.text}</Navlink>
                        {/each}
                    </Navgroup>
                {:else}
                    <Navlink extrapadding={route.extrapadding} href={route.route}>{route.text}</Navlink>
                {/if}
            {/each}
        </Router>
    </span>

    <span slot="content">
        <Router>
            {#each config.Routemap as route}
                {#if typeof(route.group) === "string"}
                    {#each route.routes as groupRoute}
                        <Route path={groupRoute.route} component={groupRoute.component} />
                    {/each}
                {:else}
                    <Route path={route.route} component={route.component} />
                {/if}
            {/each}
            <Route component={Error404} path="*" />
        </Router>
    </span>
</Page>
