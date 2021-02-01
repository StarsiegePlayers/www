import Home from "./views/Home.svelte";
import Page from "./views/Page.svelte";
import About from "./views/About.svelte";

export default {
    Logo: {
        Text: "Starsiege Players Logo",
        Image: "https://via.placeholder.com/240x100.png?text=240x100",
        Link: "/"
    },
    Discord: {
        Text: "Join us on Discord!",
        Image: "https://discordapp.com/api/guilds/297873205316681728/embed.png?style=banner2",
        Link: "https://discord.gg/KA4N6J8"
    },
    Routemap: [
        {route: "/", text: "Home", component: Home},
        {group: "Community",
            routes: [
                {route: "/community", text: "News", component: Page},
                {route: "/community/discord", text: "Discord", component: Page},
                {route: "/community/speedrunning", text: "Speed Running", component: Page},
                {route: "/community/projects", text: "Projects", component: Page},
            ]
        },
        {group: "Getting Started",
            routes: [
                {route: "/intro", text: "Frequently Asked Questions", component: Page},
                {route: "/intro/help", text: "Help", component: Page},
                {route: "/intro/links", text: "Community At Large", component: Page},
            ]
        },
        {group: "Servers",
            routes: [
                {route: "/servers", text: "Server Browser", component: Page},
                {route: "/servers/stats", text: "Statistics", component: Page},
                {route: "/servers/map", text: "World Map", component: Page},
            ]
        },
        {group: "Missions",
            routes: [
                {route: "/missions", text: "Mission Browser", component: Page},
                {route: "/missions/stats", text: "Mission Statistics", component: Page},
                {route: "/terrain", text: "Terrains", component: About},
            ]
        },

        {group: "History",
            routes: [
                {route: "/history", text: "Web Archives", component: Page},
                {route: "/history/timeline", text: "Timelines", component: Page},
            ]
        },
        {route: "/about", text: "About", component: About, extrapadding:true},
    ]
}