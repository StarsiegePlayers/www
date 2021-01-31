<!--suppress HtmlUnknownTarget -->
<script>
    import {Router, links, Route} from 'svelte-routing'
    import Navlink from '../components/Navlink.svelte'
    import Navgroup from '../components/Navgroup.svelte'
    import Sidebar from '../components/Sidebar.svelte'

    // routes
    import Home from "../views/Home.svelte";
    import Page from "../views/Page.svelte";
    import NotFound from "../views/NotFound.svelte";
</script>

<Sidebar>
    <span slot="sidebar-heading">
        <a href="/"><img src="https://via.placeholder.com/240x100.png?text=240x100" alt="Starsiege Players Logo"/></a>
    </span>

    <span slot="top-right-content">
        <a href="https://discord.gg/KA4N6J8"><img src="static/img/discord.png" height="23.5rem" alt="Join us on Discord!"/></a>
    </span>

    <span slot="links">
        <Router>
            <Navlink href="/">Home</Navlink>

            <Navgroup name="Community">
                <Navlink href="/news">News</Navlink>
                <Navlink href="/speedrunning">Speed Running</Navlink>
                <Navlink href="/projects">Projects</Navlink>
            </Navgroup>

            <Navgroup name="Getting Started">
                <Navlink href="/faq">Frequently Asked Questions</Navlink>
                <Navlink href="/troubleshooting">Troubleshooting</Navlink>
                <Navlink href="/links">Community At Large</Navlink>
            </Navgroup>

            <Navgroup name="Servers">
                <Navlink href="/servers">Server Browser</Navlink>
                <Navlink href="/servers/map">World Map</Navlink>
                <Navlink href="/servers/stats">Statistics</Navlink>
            </Navgroup>

            <Navgroup name="Missions">
                <Navlink href="/missions/browse">Mission Browser</Navlink>
                <Navlink href="/missions/stats">Mission Statistics</Navlink>
                <Navlink href="/terrain">Terrain Browser</Navlink>
            </Navgroup>

            <Navgroup name="History">
                <Navlink href="/history/timeline">Timelines</Navlink>
                <Navlink href="/history/archives">Web Archives</Navlink>
            </Navgroup>

            <Navlink extrapadding="true" href="/about">About</Navlink>

        </Router>
    </span>

    <span slot="content">
        <Router>
            <Route path="/" component={Home} />
            <Route path="/page1" component={Page} />
            <Route path="/page2" component={Page} />
            <Route path="/page3" component={Page} />
            <Route path="/page4" component={Page} />
            <Route path="*" component={NotFound} />
        </Router>
    </span>
</Sidebar>